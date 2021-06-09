const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fName : {type: String, required: true, minlength : 3},
  lName : {type: String, required: true},
  username: {type: String, required: true, alphanumeric: true, unique: true, minlength : 3, maxlength: 30, lowercase:true},
  emailID : {type: String, required: true},
  passward: {type: String, required: true}
}, {
  timestamps: true,
});

userSchema.path('username').validate(function (value) {

  if (value.charAt(0) === "." || value.slice(-1) === "."){
    return false;
  }
  
}, 'Cannot start/end with dot (.)');

userSchema.path('username').validate(function (value) {

  if (( /[a-zA-Z]/.test(value)) === false) {
    return false;
  }
  
}, 'Atleast one alphabet');


const User = mongoose.model('User', userSchema);

module.exports = User;
