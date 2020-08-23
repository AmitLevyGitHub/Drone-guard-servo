const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io').listen(server)
const piblaster = require('pi-blaster.js');

PORT = 5000

io.on('connection', socket => {
    socket.on('release', data => {
        if (data === "open") piblaster.setPwm(22, 0.145)
            else if (data === "close") piblaster.setPwm(22, 0.113)
    });
});

server.listen(5000, () => console.log(`App Server is listening on port ${PORT}`));
