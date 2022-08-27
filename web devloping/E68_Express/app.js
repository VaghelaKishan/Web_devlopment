// express use = routing & sclability handling , this is pakcage, it is design web design

const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // for serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); //set the template engine as pug
app.set('views',path.join(__dirname, 'views')) // set view  directory


// our pug demo END point
app.get("/", (req,res)=>{
    const con = "this is the best content on the internet so far so use it wisely"
    const params = {'title':'pug is the best', "content":con}
    res.status(200).render('index.pug',params)
});

app.post("/", (req,res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    let outputTowrite = `The name of client is ${name},${age} years old, ${gender}, residing at ${address}`
    fs.writeFileSync('output.txt',outputTowrite)
    const params ={'message':'your form has been submitted syccessfully'}
    res.status(200).render('index.pug',params)
})


app.get("/demo", (req,res)=>{
    res.status(200).render('demo',{title:'hey kishan',message:'hello there and thanks for telling me how to use pug!'})
});

app.get("/", (req,res)=>{
    res.send("this is my first expressapp with kishan vaghela")
});

app.get("/about", (req,res)=>{
    res.send("this is about page of my first expressapp with kishan vaghela")
});

app.post("/about", (req,res)=>{
    res.send("this is post request about page of my first expressapp with kishan vaghela")
});

app.get("/this", (req,res)=>{
    res.status(404).send("this page is not found")
});


// START THE SERVER
app.listen(port, ()=>{
    console.log(`the application started successfully on port ${port}`)
});