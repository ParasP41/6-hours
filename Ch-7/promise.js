// const promise = new Promise(function (resolve, reject) {
//     console.log("async promise")
//     if (false) {
//         const person={
//             name: "John Doe",
//             age: 30,
//             city: "New York"
//         }
//         resolve(person);
//     }
//     else {
//         const error={
//             message: "Failed to fetch data",
//             status: 404
//         }
//         reject(error);
//     }
// })

// promise.then(
//     (val) => {console.log(val) },
//     // (val) => {console.log(val) }
// ).catch((err) => {console.log("failed")}).finally(() => {console.log("clean up")});


// let p1 =Promise.resolve("Execution is done"); 
// // let p2 =Promise.reject("Execution is rejected"); 

// p1.then((value) => { console.log(value); })


//promises are asynchronous in nature

// function asyncTask()
// {
//     return Promise.resolve();
// }
// asyncTask().then(() => {
//     console.log(name);
// })
// let name = "Paras"

//chaining in promises

// let p=new Promise((resolve, reject) =>{
//     // resolve("Promise 1");
//     reject("REJECTED");
// }).then((val) => {
//     console.log(val)
//     return "done"
// }).then((val) => {
//     console.log(val)
//     return "done2"
// }).then((val) => {
//     console.log(val)
// }).catch((err) => {console.log(err)})



const makeApiCall=(time)=>
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("this api execution in : "+time)
        },time)
    })
}
// makeApiCall(1000).then((val)=>
// {
//     console.log(val);
// })

let multiApiCall =[makeApiCall(1000),makeApiCall(2000),makeApiCall(3000)]

// Promise.all(multiApiCall).then((val)=>
// {
//     console.log(val)
// })

Promise.race(multiApiCall).then((val)=>
{
    console.log(val)
})