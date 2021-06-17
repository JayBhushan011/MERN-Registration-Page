const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const googleUserSchema = new Schema({
  fName : {type: String, required: true, minlength : 3},
  lName : {type: String, required: true},
  username: {type: String, required: true, alphanumeric: true, unique: true, minlength : 3, maxlength: 30, lowercase:true},
  emailID : {type: String, required: true},
  pictureURL: {type: String}
}, {
  timestamps: true,
});

const googleUser = mongoose.model('googleUserSchema', googleUserSchema);

module.exports = googleUser;
