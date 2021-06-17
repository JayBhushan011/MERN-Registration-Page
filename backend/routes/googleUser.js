const router = require('express').Router();


let googleUser = require('../models/googleUser.model')

router.route('/').get((req, res) => {
    googleUser.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/add').post((req,res) => {
  const fName = req.body.fName;
  const lName = req.body.lName;
  const username = req.body.username;
  const emailID = req.body.emailID;
  const pictureURL = req.body.pictureURL;


  
  const newUser = new googleUser({
    fName,
    lName,
    username,
    emailID,
    pictureURL
  });



  newUser.save()
  .then(() => res.json("User added!"))
  .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
