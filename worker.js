const { parentPort} = require('worker_threads');

parentPort.on("message", (msg) => {
    let sum = 0;
    for (let i = 0; i < msg; i++) sum += i;
    parentPort.postMessage(`${msg} done`);
})

