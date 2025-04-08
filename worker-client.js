const { parentPort, workerData } = require('worker_threads');


parentPort.on('message', (message) => {
	parentPort.postMessage(message)
})
