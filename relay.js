const Gpio  = require('onoff').Gpio;
const relay2 = new Gpio(21, 'out');
const relay1 = new Gpio(26, 'out');

setInterval(function () {

    relay1.writeSync(relay1.readSync() ^ 1);
    relay2.writeSync(relay2.readSync() ^ 1);

}, 1000);
