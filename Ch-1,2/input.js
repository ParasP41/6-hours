// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("What is your name : ",name=>
// {
// console.log(`hii ${name}`);
// rl.close();
// });


const prompt =require("prompt-sync")();

const name=prompt("what is your name : ");
console.log(`hii ${name}`);