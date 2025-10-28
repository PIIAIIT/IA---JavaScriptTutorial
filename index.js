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
// Example
const social = new SocialPerformance([4,4], [4,3], [4,4], [4,4], [5,5], [4,4]);
const person = new Salesman('John', social);

console.log(person.calculateBonus());








// ---------- A simple Observer Pattern with Framework RxJS ----------
// npm init -y
// npm install rxjs
const { Subject } = require('rxjs');

const performanceSubject = new Subject();
const batchSubject = new Subject();

performanceSubject.subscribe(salesman => {
    const bonus = salesman.calculateBonus();
    console.log(`${salesman.name} has a bonus of ${bonus.toFixed(2)}`);
});

batchSubject.subscribe(personenListe => {
    personenListe.forEach(p => {
        const bonus = p.calculateBonus();
        console.log(`${p.name} has a bonus of ${bonus.toFixed(2)}`);
    });
});

// -- TEST --
performanceSubject.next(person);

const Personen = [];
for (let i = 0; i < 1000; i++) {
    const rand = Math.floor(Math.random() * 10);
    const rand2 =Math.floor(Math.random() * 10);
    const rand3 =Math.floor(Math.random() * 10);
    const social = new SocialPerformance([rand, rand], [rand, 10-rand], [rand2, rand2], [rand2, 10-rand2],[rand3, rand3], [10-rand3, rand3]);
    const person = new Salesman('Person ' + i, social);
    Personen.push(person);
}

batchSubject.next(Personen);



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