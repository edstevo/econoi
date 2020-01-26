const Gpio = require('onoff').Gpio;

setInterval(function () {

    console.log("Reading...");
    console.log(Gpio);
    console.log(Gpio.SCL);
    console.log(Gpio.SDA);

}, 1000);
