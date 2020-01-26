const Gpio  = require('onoff').Gpio;
const relay = new Gpio(21, 'out');

let value = 1;

setInterval(function () {

    value   = !value;
    console.log("Value = " + value);
    console.log(relay);

    relay.writeSync(value);

}, 1000);
