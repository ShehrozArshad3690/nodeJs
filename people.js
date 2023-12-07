const people=["Shehroz","Bilal","Adeel","Adil","Noman","Majid"];
const ages=[23,25,25,24,28,29];

console.log(people);

// manually export people variable to use it in other file
// module.exports=people;
module.exports={
    people,ages
}