const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const piblaster = require('pi-blaster.js');

PORT = process.env.PORT || 5000

	io.on('connection', socket => {
		socket.on('release', data => {
			if (data === "open") {
				piblaster.setPwm(22, 0.145)
			} else if (data === "closing") {
				piblaster.setPwm(22, 0.1)
			}
		});
	});

server.listen(PORT, () => console.log(`App Server is listening on port ${PORT}`));

