const express = require('express')
const Gpio = require('onoff').Gpio;

const app = express()
const port = 3000
const i = 0

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

while (i < 10) {

    console.log("here");
}
