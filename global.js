// Global Object  which has global scope

// console.log(global);
// globalThis.setTimeout(() => console.log("Hello World"), 3000);
// setTimeout(() => console.log("Hello World"), 3000);

// let n = setInterval(() => {
//   console.log("Time Interval");
// }, 1000);

// setTimeout(() => {
//   console.log("Timout");
//   clearInterval(n);
// }, 3000);


console.log(__dirname);                         // gives us the absolute path of this directory
console.log(__filename);                //gives us the absolute path of this directory with filename