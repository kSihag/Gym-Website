const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const port =80;

app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug');
app.set('views',path.join(__dirname, 'views'));

app.get('/',(req,res)=>{
    const con="Best content available"
    const params = {"title":'Pug is damn cool',"content":con}
    res.status(200).render('index.pug',params) 
});

app.post('/',(req,res)=>{
    name=req.body.name
    age=req.body.age
    gender=req.body.gender
    address=req.body.address
    more=req.body.more
    
    let outputToWrite = `The name of client is ${name} and age is ${age}, gender is ${gender}, residing at
     ${address}, and more about him/her is ${more}`
    fs.writeFileSync('output.txt',outputToWrite)
    const params = {"message":'Form successfully submitted'}
    res.status(200).render('index.pug',params) 
});







app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});