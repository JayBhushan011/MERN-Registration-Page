const router = require('express').Router();


let User = require('../models/register.model')

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/add').post((req,res) => {
  const fName = req.body.fName;
  const lName = req.body.lName;
  const username = req.body.username;
  const emailID = req.body.emailID;
  const passward = req.body.passward;


  
  const newUser = new User({
    fName,
    lName,
    username,
    emailID,
    passward
  });



  newUser.save()
  .then(() => res.json("User added!"))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
