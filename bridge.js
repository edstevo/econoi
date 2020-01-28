const mqtt      = require('mqtt');
const client    = mqtt.connect('mqtt://test.mosquitto.org')

client.on("connect", () => {

    client.subscribe("ines-presence", () => {

        if (!err) {
            client.publish('ines-presence', 'Hello mqtt')
        }
    });

    console.log("connected");
});

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString());
})
