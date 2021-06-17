const router = require('express').Router();


const jwt = require('jsonwebtoken');
let User = require('../models/register.model')


// Register the home route that displays a welcome message
// This route can be accessed without a token
router.get('/', function(req, res){
  res.send("Welcome to our API");
})


var userToken='';
router.post('/token', function(req, res){
  var emailID = req.body.emailID;
  var passward = req.body.passward;
  User.findOne({emailID: emailID}, function(err,doc){
    if (err){
      res.send("Couldn't find user");
    }
    else{

      if (passward === doc.passward){
        var token = jwt.sign({emailID: emailID}, process.env.TOKEN_SECRET,{expiresIn: 120});
        res.send({"token":token});
        userToken = token;
      }
      else{
        res.send("Incorrect Password");
      }

    }
  
});
  
})
var userInfo;
router.post('/profile', function(req, res){
  var emailID = req.body.emailID;
  jwt.verify(userToken, process.env.TOKEN_SECRET, function(err, decoded){
    userToken = ''
    if(!err){
      User.findOne({emailID: emailID}, function(err,doc){
        console.log(doc)
        if (err){
          console.log(err) }
        else {
          console.log(doc) 
          res.send(doc)}
          userInfo = doc;
  })
}}) });

router.get('/info', function(req,res){
  res.send(userInfo)
  userInfo = '';
})

module.exports = router;