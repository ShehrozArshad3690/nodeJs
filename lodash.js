let _ = require("lodash");

let number = _.random(0,20);

console.log(number);



let greet =_.once((name)=>{
    console.log(`Hello ${name}`);
})

greet("Ahmad");
greet("Shehroz");