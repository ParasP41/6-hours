const path = require("path");

const filePath = "/Users/DELL/Pictures/Git-Hub/6-hours/Ch-4/files/sample.txt"

// //dirname
// console.log(path.dirname(filePath));
// console.log(__dirname);
// //basename
// console.log(path.basename(filePath));
// console.log(__filename);
// //extension
// console.log(path.extname(filePath));

// const sample = "sample.jsx"
// console.log(path.join(__dirname,sample))


const fs = require("fs");
const { error } = require("console");
const { isUtf8 } = require("buffer");
// console.log(fs)

// //reading from the path
// fs.readFile(filePath, "utf-8", (e, data) => {
//     if (e) {
//         throw new Error("Error:", e);
//     }
//     else {
//         // console.log(data.toString());
//         console.log(data);
//     }
// });


//reading the file syncronously

// try {
//     const data=fs.readFileSync(path.join(__dirname,"files","sample.txt"), "utf-8")
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }


const fspromises=require("fs").promises;
// const filereadings =async()=>
// {
//     try {
//         const data=await fspromises.readFile(filePath,{encoding:"utf-8"})
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// filereadings();


//write file
// const content="I am just loving it";
// fs.writeFile(path.join(__dirname,"files","text.txt"), content, (e) => {
//     if (e) {
//         throw new Error("Error:", e);
//     }
//     else {
//         // console.log(data.toString());
//         console.log("file updated successfully");
//     }
//     fs.readFile(path.join(__dirname,"files","text.txt"),"utf-8",(e,data)=>
//     {
// if(e)
//     {
//         throw new Error("Error:", e);
//     }
//     else {
//         console.log(data)
//     }
//     })
// });




//writing a file in fs promises

const fileWriting=async()=>
{
    try {
        await fspromises.writeFile(path.join(__dirname,"file","text.txt"),"i am WRITING this file from the fs promises");

    await fspromises.appendFile(path.join(__dirname,"file","text.txt"), "i am APPENDING this file from the fs promises"); 

    await fspromises.rename(path.join(__dirname,"file","text.txt"), path.join(__dirname,"file","newtext.txt"));

    const data=await fs.readFile(path.join(__dirname,"file","text.txt"),"utf-8")
    console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fileWriting();