const mqtt      = require('mqtt');
const client    = mqtt.connect('mqtt://test.mosquitto.org')

client.publish('ines-presence', 'Hello mqtt')
