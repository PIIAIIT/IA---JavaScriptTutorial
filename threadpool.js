// ./threadpool.js
// Parallelism (Multithreading)
// works on multiple processing units (cores, threads)
// multiple threads are running in parallel and are performing task
const { Worker } = require('worker_threads');
console.log("Worker Begins");

const w1 = new Worker("./worker.js");
const w2 = new Worker("./worker.js");

w1.on("message", msg => console.log(`Worker 1: ${msg}`));
w2.on("message", msg => console.log(`Worker 2: ${msg}`));

w1.postMessage(10000000);
w2.postMessage(10000000);

console.log("Worker Ends");
