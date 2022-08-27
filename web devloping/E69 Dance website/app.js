
const express = require("express");
const path = require("path");
const app = express();
const port = 3590;
var mongoose = require('mongoose');
const bodyparser= require("body-parser")
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true, useUnifiedTopology: true});

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });
  const contact = mongoose.model('contact', contactSchema);


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // for serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); //set the template engine as pug
app.set('views',path.join(__dirname, 'views')) // set view  directory

// our pug demo END point
app.get("/", (req,res)=>{
    const con = "this is the best content on the internet so far so use it wisely"
    const params = { }
    res.status(200).render('home.pug',params)
});

app.get("/contact", (req,res)=>{
    const params = { }
    res.status(200).render('contact.pug',params)
});

app.post("/contact", (req,res)=>{
    //const con = "this is the best content on the internet so far so use it wisely"
    var mydata =new contact(req.body);
    mydata.save().then(() =>{
        res.send("this item has been saved to the database")
    }) .catch(() =>{
    res.status(400).send("Item was not saved to the database")
    })
    //res.status(200).render('contact.pug',params)});
})



// START THE SERVER
app.listen(port, ()=>{
    console.log(`the application started successfully on port ${port}`)
});