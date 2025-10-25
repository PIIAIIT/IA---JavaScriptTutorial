// ------------------------ Bonus Computation ------------------------
function SocialPerformance(leadership, openness, behaviour, attitude, communication, integrity) {
    this.leadership = leadership;
    this.openness = openness;
    this.behaviour = behaviour;
    this.attitude = attitude;
    this.communication = communication;
    this.integrity = integrity;
}
function Salesman(name, socialPerformance) {
    this.name = name;
    this.socialPerformance = socialPerformance;
}

Salesman.prototype.calculateBonus = function() {
    const scores = Object.values(this.socialPerformance);
    const standard_vals = [100, 100, 150, 100, 100, 100];
    const bonuses = [];
    for (let i = 0; i < scores.length; i++) {
        let [score, weight] = scores[i];
        let factor = score / 50 * weight;
        bonuses.push(standard_vals[i] * factor);
    }
    return bonuses.reduce((a, b) => a + b);
}
const social = new SocialPerformance([4,4], [4,3], [4,4], [4,4], [5,5], [4,4]);
const person = new Salesman('John', social);

console.log(person.calculateBonus());





// ---------- A simple Observer Pattern with Framework RxJS ----------
// npm init -y
// npm install rxjs
const { Subject } = require('rxjs');

const subject = new Subject();

const observerA = subject.subscribe(value =>
    console.log(`Observer A: ${value}`)
);

const observerB = subject.subscribe(value =>
    console.log(`Observer B: ${value}`)
);

subject.next('Hello');
subject.next('World');

observerB.unsubscribe();
subject.next('!');






// --- Asynchrony, Parallelism and Concurrency (or Multithreading) ---




// Asynchrony
// operations that are preceded independently of the main-program
// main-program does not block (waits for completion)

console.log("Start");

setTimeout(() => {
    console.log("Async: operation completed");
}, 1000);

console.log("End");







// Concurrency
// can manage multiple tasks in overlapping time periods
// they start, run and complete not necessarily simultaneously

function doTask(name, time) {
    return new Promise(resolve => {
        console.log(`Task ${name} started`);
        setTimeout(() => {
            console.log(`Task ${name} completed`);
            resolve();
        }, time);
    });
}

async function main() {
    console.log("Async Main Begins");
    const p1 = doTask("Task1", 1000);
    const p2 = doTask("Task2", 500);
    await Promise.all([p1, p2]);
    console.log("Async Main Ends");
}

main();