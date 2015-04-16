var util = require('util'),
    http = require('http'),
    _ = require('lodash'),
    Promise = require('bluebird'),
    lastRequest = Promise.resolve(),
    debug = process.env.hasOwnProperty('WSL_DEBUG') ? consoleDebug : function () {
    };

//
// Private Helper Functions
//

function consoleDebug() {
    console.log.apply(this, arguments)
}

function getRequest(options) {
    var requestOptions = _.assign({
        port: 80,
        path: '/api.php/Live',
        headers: {},
        method: 'GET'
    }, options);

    // FIXME: Check option properties
    requestOptions.headers['Host'] = requestOptions.host;
    if (!_.isUndefined(requestOptions.username) && !_.isUndefined(requestOptions.password)) {
        requestOptions.headers['Authorization'] =
            "Basic " + new Buffer(requestOptions.username + ":" + requestOptions.password).toString("base64");
    }

    debug('REQUEST OPTIONS: ' + JSON.stringify(requestOptions));

    return new Promise(function (resolve, reject) {
        var data = "",
            getReq = http.request(requestOptions, function (response) {
                debug('STATUS: ' + response.statusCode);
                debug('HEADERS: ' + JSON.stringify(response.headers));

                var error;
                if (response.statusCode >= 300) {
                    if (response.statusCode === 401) {
                        error = new Error("Unauthorized: check username/password");
                    }
                    else {
                        error = new Error("Request failed. HTTP Status Code: " + response.statusCode);
                    }
                    debug('ERROR:' + 'Host ' + requestOptions.host + ' ' + error);
                    return reject(error);
                }

                response.setEncoding('utf8');
                response.on('data', function (result) {
                    debug("DATA CHUNK", result);
                    data += result;
                });
                response.on('end', function () {
                    debug("END");
                    var json = JSON.parse(data);
                    return resolve(json);
                });
            }).on('error', function (error) {
                debug('ERROR:' + 'Host ' + requestOptions.host + ' ' + error);
                return reject(error);
            });
        getReq.end();
    });
}

function getDeviceDataObject(name, type, json) {
    var keys = Object.keys(json);
    for (var i = 0; i < keys.length; ++i) {
        if ((json[keys[i]].type === type) && (json[keys[i]].name === name)) {
            return json[keys[i]]
        }
    }
}

function getTotalsObjectForType(type, json) {
    if (json.hasOwnProperty("totals")) {
        if ((!_.isUndefined(json.totals)) && (!_.isUndefined(json.totals[type]))) {
            return json.totals[type]
        }
    }
}

function checkRequiredProperties(options, requiredPropsArray) {
    for (var i = 0; i < requiredPropsArray.length; ++i) {
        if (_.isUndefined(options[requiredPropsArray[i]])) {
            return Promise.reject("Request options lacks required property=" + requiredPropsArray[i]);
        }
    }
    return Promise.resolve()
}

//
// Public Functions
//

module.exports.getJSON = function (options) {
    return checkRequiredProperties(options, ['host']).then(function () {
        return lastRequest = Promise.settle([lastRequest]).then(function () {
            return getRequest(options).then(function (json) {
                return Promise.resolve(json);
            })
        })
    })
};

module.exports.getProductionDeviceData = function (options) {
    return checkRequiredProperties(options, ['host', 'name']).then(function () {
        return lastRequest = Promise.settle([lastRequest]).then(function () {
            return getRequest(options).then(function (json) {
                var result = getDeviceDataObject(options.name, "production", json);
                if (!_.isUndefined(result)) {
                    return Promise.resolve(result);
                }
                else {
                    return Promise.reject(new Error("No data for production device name=" + options.name));
                }
            })
        })
    })
};

module.exports.getProductionTotals = function (options) {
    return checkRequiredProperties(options, ['host']).then(function () {
        return lastRequest = Promise.settle([lastRequest]).then(function () {
            return getRequest(options).then(function (json) {
                var result = getTotalsObjectForType("production", json);
                if (!_.isUndefined(result)) {
                    return Promise.resolve(result);
                }
                else {
                    return Promise.reject(new Error("No data for production totals"));
                }
            })
        })
    })
};
