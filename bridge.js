const mqtt      = require('mqtt');
const client    = mqtt.connect('mqtt://test.mosquitto.org')

client.on("connect", () => {

    console.log("connected");
});
