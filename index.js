const express = require('express')
const path = require('path')
const post = require('./things')
var things = require('./things.js');
var bodyParser = require('body-parser');
var multer = require('multer')
const PORT = process.env.PORT || 5000
var upload = multer()

var app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use('/',things);
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.array()); 
app.use(express.static('public'));
app.post('/',function(req,res){
    console.log(req.body);
    if(req.body.age){
        if(req.body.age == 24){
            res.send("Base 10? Seriously. Are you even an engineer?");
        }
        else if(req.body.age == 11000){
            res.send("We know you aren't a EE even if you do code all day");
        }
        else if(req.body.age == 18 || req.body.age == 0x18){
            res.render('q2');
        }
        else{
            res.send('Incorrect, Try again');
        }
    } else if(req.body.km){
        if(req.body.km == 50){
            res.send("Nah, not a trick question");
        }
        else if(req.body.km == 100){
            res.send("Are you trying?");
        }
        else if(req.body.km == 350){
            res.render('q3');
        }
        else{
           res.send('Incorrect, Try again');
        }
    } else if(req.body.gain){
        if(req.body.km == 0 || req.body.km == 1){
            res.send("Stop guessing.");
        }
        else if(req.body.km == 9){
            res.render('q4');
        }
        else{
           res.send('Incorrect, Try again');
        }
    } 

});
app.listen(PORT);
