var wsl = require('./index'),
    util = require('util'),
    options = {
        host: 'diehl-inverter-demo.websolarlog.com',
        name: 'Diehl'
    },
    x = Date.now();

wsl.getProductionDeviceData(options).then(function (json) {
    console.log(util.inspect(json, { depth: 4, colors : true }));
    console.log(Date.now() - x, "milliseconds elapsed")
}).catch(function(e) {console.log(e)});

wsl.getProductionTotals(options).then(function (json) {
    console.log(util.inspect(json, { depth: 4, colors : true }));
    console.log(Date.now() - x, "milliseconds elapsed")
}).catch(function(e) {console.log(e)});
