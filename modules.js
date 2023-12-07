// const showPeople=require('./people');




// console.log(showPeople);
// console.log(showPeople.ages);
// console.log(showPeople.people);




const {people,ages}=require('./people');


// console.log(showPeople);            // this gives us empty object bcz we don't manully import any variable or funtion in this variable


console.log(people,ages);



const osInfo=require("os");                 //this is built in object of os to show os properties
// console.log(osInfo);
console.log(osInfo.platform(),osInfo.homedir());