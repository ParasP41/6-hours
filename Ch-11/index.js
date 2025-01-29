const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

// Application level middleware
// const loggerMiddleware = (req, res, next) => {
//     console.log(`${new Date()} --- Request [${req.method}] [${req.url}]`);
// };

// app.use(loggerMiddleware);


//Router Level middleware
app.use("/api/users",router)

const fakeAuth=(req,res,next) => {
    const authStatus=false;
    if(authStatus){
        console.log("user is authenticated : "+authStatus);
    }else{
        res.status(401).json({message:"Unauthorized"})
    }
}

const getUsers = (req, res, next) => {
    res.json(
        {
            message: "Get users",

        }
    )
}
const createUsers = (req, res, next) => {
    res.json(
        {
            message: "Create user",
        }
    )
}

router.route("/").get(getUsers).post(createUsers);
router.use(fakeAuth);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

