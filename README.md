# node-websolarlog

[![Greenkeeper badge](https://badges.greenkeeper.io/mwittig/node-websolarlog.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/mwittig/node-websolarlog.svg?branch=master)](https://travis-ci.org/mwittig/node-websolarlog)

Access PV live logs from WebSolarLog in Node. 

## Usage Example

    var wsl = require('node-websolarlog'),
        options = {
            host: 'diehl-inverter-demo.websolarlog.com',
            name: 'Diehl'
        };
        
    // get full data
    wsl.getProductionDeviceData(options).then(function (json) {
        console.log(json);
    }).catch(function(e) {console.log(e)});
        
    // get production data for a single production device
    wsl.getProductionDeviceData(options).then(function (json) {
        console.log(json);
    }).catch(function(e) {console.log(e)});
    
    // get totals for all production devices
    wsl.getProductionTotals(options).then(function (json) {
        console.log(json);
    }).catch(function(e) {console.log(e)});

## Release History

See [Release History](https://github.com/mwittig/node-websolarlog/blob/master/HISTORY.md).

## License

Copyright (c) 2016-2018, Marcus Wittig and contributors. All rights reserved.

[MIT License](https://github.com/mwittig/node-websolarlog/blob/master/LICENSE).
