# node-websolarlog

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

## History

* 20150417, V0.0.1
    * Initial Version

* 20150512, V0.0.2
    * Added support for HTTPS, added rejectUnauthorized: false to allow self-signed server certs. Should be set to true
      if server has a certificate signed from a trusted CA
    * Added timeout-handling for requests to abort request server doesn't send a response
    
* 20160210, V0.0.3
    * Added error handling for invalid JSON returned with response
    * Revised license information to provide a SPDX 2.0 license identifier in consonance with npm v2.1 guidelines on 
      license metadata - see also https://github.com/npm/npm/releases/tag/v2.10.0
    * Dependency updates