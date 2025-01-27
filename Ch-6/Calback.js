//calback function is asynchronously in nature

// console.log("task start")
// function asyncack(cb)
// {
//     console.log("task running")
//     cb();
// }
// asyncack(function() {
//     console.log(name);
//     });
// console.log("task end")
// let name = "Paras";

//making callback asynchronous
// so for making it waht we do that call the cb function in the settimeout so all the variable will be loacted in the memory

console.log("task start")
function asyncack(cb) {
    console.log("task running")
    setTimeout(() => {
        cb(null, "Paras");
    }, 2000);
}
asyncack(function (err, data) {
    if (err) {
        throw (err)
    }
    else {
        console.log("Data:", data);
    }
});
console.log("task end")


//Callbackhell

function asyncack(cb) {
    console.log("task running")
    setTimeout(() => {
        cb(null, "Paras");
    }, 0);
}

function makeApiCall(cb) {
    setTimeout(() => {
        console.log("Api call")
    }, 0)
}

makeApiCall(() => {
    makeApiCall(() => {
        asyncack(() => {
            asyncack(() => {
                asyncack(() => {

                })
            })
        })

    })
})