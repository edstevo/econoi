const Gpio  = require('onoff').Gpio;
const relay = new Gpio(21, 'out');

let value = 1;

setInterval(function () {

    value   = !value;

    console.log(relay.readSync(value));

}, 1000);
