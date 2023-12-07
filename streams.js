const fs=require('fs');

// to read huge amount of data through streams

// const readStream =fs.createReadStream('./docs/blog2.txt');   

// readStream.on('data',(chunk)=>{
//     console.log("-----New Chunk Data");
//     // console.log(chunk);                 //again it gives us the chunk of data in buffer form
//     console.log(chunk.toString());              // this converts buffer to string
// })



// to write data in the form of streams
// const readStream =fs.createReadStream('./docs/blog2.txt');   
// const writeStream=fs.createWriteStream('./docs/blog3.txt',{encoding:'utf-8'})     // here second parameter enables tha data chunk as it is comming 

// readStream.on('data',(chunk)=>{
//     writeStream.write('\nNew Chunk\n');
//     writeStream.write(chunk);
// })

// piping 
const readStream =fs.createReadStream('./docs/blog2.txt');   
const writeStream=fs.createWriteStream('./docs/blog3.txt',{encoding:'utf-8'})     // here second parameter enables tha data chunk as it is comming 

readStream.pipe(writeStream);