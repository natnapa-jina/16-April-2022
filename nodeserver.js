const express = require('express') //install express: Terminal >npm install express --save
const app = express()
const port = 8080

//Define Variables
var id = 395919;
var status = "413  508";
var number = "158303  642745  103342  644686  768711";  
var render = "542136  720276  358202  757881  953929";

//Set &amp; Call EJS
app.set('view engine','ejs')

//Back-End NodeJS Display
app.get("/s",(req,res) =>{
    res.send("สลากกินแบ่งรัฐบาล")
}) 
//Font-End EJS Show HTML Display
app.get("/",(req,res) =>{
    res.render('index' , {userid : id, status : status, number : number, render : render})
})
//Open Serverclea
app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})

