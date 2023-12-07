// fs module is used to directly deal with the file system
const { error } = require('console');
let fs=require('fs');

// // reading files
// fs.readFile("./docs/blogs.txt",(error,data)=>{
//     if (error) {
//         console.log(error);
//     }
//     // console.log(data);          // this shows data in buffer form not in string form
//     console.log(data.toString());     // this show data in string form      
// });

// console.log("last line");           //this shows before readFile function because readFile is asyn function and require some time to do

// // writing files

// fs.writeFile('./docs/blogs.txt','Hello This is Shehroz',()=>console.log("File has been written"));
// fs.writeFile('./docs/blogs1.txt','Hello This is Shehroz',()=>console.log("File has been written"));

// // directories
// if (!fs.existsSync('./Intro')) {            //exitsSync is a synchronous funtion
//     fs.mkdir('./Intro',(error)=>{           // this creates Intro folder in current directory(./)
//         if (error) {
//             console.log(error);
//         }
//         console.log("folder has been created")
//     })
// }else{
//     fs.rmdir('./Intro',(error)=>{
//         if (error) {
//             console.log(error);
//         }
//         console.log("Folder has been deleted");
//     })
// }

// deleting files

if (fs.existsSync('./docs/test.txt')) {
    fs.unlink('./docs/test.txt',(error)=>{
        if (error) {
            console.log(error);
        }
        console.log("File has been deleted");
    })
}else{
    console.log("File doesn't exist");
}