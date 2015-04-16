var wsl = require('./index'),
    options = {
        host: 'diehl-inverter-demo.websolarlog.com',
        name: 'Diehl'
    },
    x = Date.now();

wsl.getProductionDeviceData(options).then(function (json) {
    console.log(json);
    console.log(Date.now() - x, "milliseconds ellapsed")
}).catch(function(e) {console.log(e)});

wsl.getProductionTotals(options).then(function (json) {
    console.log(json);
    console.log(Date.now() - x, "milliseconds ellapsed")
}).catch(function(e) {console.log(e)});
