//error object

// const error=new Error("something went wrong");
// console.log(error.stack);
// console.log(error.message);

// throw new Error("i am error object!");

// const {CustomError}=require("./customError")
// throw new CustomError("this is a custom error object!")



// exception using try and catch

// try {
//     dosomething();
// } catch (error) {
//     console.log("error occured");
//     console.log(error);
// }

function dosomething() {
    // const data = fetch("localhost:3000/api");
    console.log("something went wrong in the function");
}

// //uncaught exception
// process.on("uncaughtException",(err)=>
// {
//     console.log("there was an error",err);
//     process.exit(1);
// })

// dosomething();

//exception with promices

// const promise = new Promise(function (resolve, reject) {
//     if (true) {
//         resolve(dosomething());
//     }
//     else {
//         // reject(new Error("something went wrong"));
//         reject(dosomething());
//     }
// }).then((data) => console.log(data)).catch((err) => console.log("i am an error"))


//async await 

const some=async()=>
{
    try {
        const data=await dosomething();
        console.log(data);
    } catch (error) {
        console.log("error",error);
    }
}