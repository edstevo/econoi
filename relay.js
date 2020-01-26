const Gpio  = require('onoff').Gpio;
const relay = new Gpio(26, 'out');

let value = 1;

setInterval(function () {

    value   = !value;

    relay.writeSync(relay.readSync() ^ 1);
    console.log(relay.readSync(value));

}, 1000);
