var bodyParser = require('body-parser');
var multer = require('multer')
const PORT = process.env.PORT || 5000
var upload = multer()

var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
   res.render('index');
});

router.get('/about', function(req, res){
   res.render('about');
});

router.get('/:name/:id', function(req, res){
   res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});


router.get('/hello', function(req, res){
   res.send('Hello World!');
});

router.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});

//router.post('/',function(req,res){
//  res.send(req.body);
//  res.send("Hi");
//});

//const post = (req, res)=>{
//   res.send('Recived Post');
//
//   console.log(req.body);
//   console.log("Parsed");
//}

//export this router to use in our index.js
module.exports = router;
//module.exports = post;
//
//

