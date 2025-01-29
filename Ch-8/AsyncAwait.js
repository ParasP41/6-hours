const userLogin = () => {
    console.log("Enter the username and password");
    let username = prompt("Enter username:");
    let password = prompt("Enter password:");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username == "Paras" && password == "69r95p41") {
                resolve("Login successful");
            }
            else {
                reject("Invalid username or password");
            }
        }, 1000);
    })
}


function gotoHomePage(userAuthStatus) {
    return Promise.resolve(`Go To HomePage as : ${userAuthStatus}`)
}

// userLogin().then((val)=>
// {
//     console.log(val);
//     return gotoHomePage(val); 
// }).then((userAuthStatus)=>
// {
//     console.log(userAuthStatus);
// }).catch((err)=>{
//     console.log(err)
// })


/////////////////using async / await

async function performTask() {
    try {
        const response = await userLogin();
    console.log("validated user");
    const userAuthStatus = await gotoHomePage(response)
    console.log(userAuthStatus)
        
    } catch (error) {
        console.log(error)
    }
    
}

performTask();