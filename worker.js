const { Worker } = require('worker_threads');


const run = async () => {
	const worker = new Worker('./worker-client.js');

	worker.on('message', (msg) => {
		console.log(`Ответ от задачи ${msg.taskId}: ${msg.data}`);
	});

	worker.on('exit', () => {
		console.log(`Завершил работу`);
	});

	worker.postMessage('test')
	worker.postMessage('test2')
	worker.postMessage('test3')
}

run();
