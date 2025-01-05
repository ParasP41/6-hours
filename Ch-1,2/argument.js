// console.log(process.argv);

const minimist = require("minimist");

// process.argv.forEach((val,index)=>{
//     console.log(`${index}:${val}`)
// })

const argNew=minimist(process.argv);
console.log(argNew)