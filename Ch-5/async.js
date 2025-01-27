//js is syncronous Languages 

//syncronous
// console.log("1")
// console.log("2")
// console.log("3")

//asynchronous
// console.log("1")
// console.log("2")
// setTimeout(() => {
//     console.log("3")
// }, 200);
// console.log("4")

console.log("Start opertaion")
function sleep(milliseconds) {
    console.log("Operation is running");
    setTimeout(() => {
        console.log("Operation is done!")
    }, milliseconds);
    
}
sleep(12); 
console.log("End opertaion")