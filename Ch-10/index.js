const express =require('express');
const app = express();
const port=3000;

app.get('/', (req, res) => {
    res.json(
        {
            "title": "Home Page",
            "content": "Welcome to our website!"
        }
    )
});

app.get("/about/get:id",(req, res) => {
    res.json(
        {
            "title": "About Page",
            "content": `This is about page with id ${req.params.id}. Welcome to our website!`
        })
})

app.post("/about/post:id",(req, res) => {
    res.json(
        {
            "title": "About Page",
            "content": `This is about page with id ${req.params.id}. Welcome to our website! This is a POST request.`
        })
})

app.put("/about/put:id",(req, res) => {
    res.json({
        "title": "About Page",
        "content": `This is about page with id ${req.params.id}. Welcome to our website! This is a PUT request.`
    })
})

app.delete("/about/delete:id",(req, res) => {
    res.json({
        "title": "About Page",
        "content": `This is about page with id ${req.params.id}. Welcome to our website! This is a DELETE request.`
    })
})

app.listen(port,()=>
{
    console.log(`server is started on ${port}`);
})