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

* 20150418, V0.0.2
    * Added support for HTTPS, added rejectUnauthorized: false to allow self-signed server certs. Should be set to true
      if server has a certificate signed from a trusted CA
    * Added timeout-handling for requests to abort request server doesn't send a response