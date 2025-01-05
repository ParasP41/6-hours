const a = "1";
const b = "2";

// console.log(a, b)

//%s formate the variable into a string
//%d formate the variable into a number
//%i formate the variable into a integer
//%o formate the variable into a object

// console.log("I Am %s","Paras");
// console.clear();
// console.count("i am Paras")
// console.count("i am Nikhil")
// console.count("i am Nikhil")
// console.countReset("i am Nikhil")
// console.count("i am Nikhil")


// const killu = () => {
//     console.trace()
// }
// const melodie = () => {
//     killu();
// }
// melodie();


// const sum = () => {
//     console.log(`the addtion of a and b is ${a + b}`);
// }

// const multi = () => {
//     console.log(`the multiplication of a and b is ${a * b}`);
// }

// const measuteTime=()=>
// {
//     console.time("sum()");
//     sum();
//     console.timeEnd("sum()");
//     console.time("multi()") ;             
//     multi();
//     console.timeEnd("multi()");        
// }
// measuteTime();


import progressBar from "progress";
import chalk from "chalk";
const bar = new progressBar("downloading [:bar] :rate/bps :percent :etas", { total: 25 })
const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
        clearInterval(timer)
        console.log("Download Completed")
    }

}, 100)
console.log(chalk.green("Downloading"))