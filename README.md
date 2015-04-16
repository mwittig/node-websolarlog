# node-websolarlog

Access PV live logs from WebSolarLog in Node. 

## Usage Examples

    var wsl = require('./index'),
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
