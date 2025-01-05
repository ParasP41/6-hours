console.log("Paras");


// process.exit(0); //to exit the code
// process.exitCode=1; //to exit the code



// import lodash from "lodash";
// let arr=[1,2,3,4,5];
// // console.log(lodash.chunk(arr));
// console.log(lodash.last(arr));

// import cowsay from "cowsay"
// console.log(cowsay.say({
//     text: "Hello, World!",
//     e: "oO",
//     T: "U "  // U for upside-down cow
// }));

// import car from "./car";
// const car=require("./car");
// console.log(car);
// const { data } =require("./car");
// console.log(data) ;

const {tesla,ford} =require ("./car");
console.log(JSON.stringify(tesla,null,2)) ;
console.log(ford)