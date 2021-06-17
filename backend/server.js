const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');


const app = express();

const PORT = process.env.PORT || 6600


app.use(cors());
app.use(express.json());

//Mongoose MongoDB Database Setup
require('dotenv').config();
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// *********


const registerRouter = require('./routes/register');
app.use('/register', registerRouter);

const googleUserRegister = require('./routes/googleUser');
app.use('/googleUserRegister', googleUserRegister);

const authAPI = require('./routes/authAPI');
app.use('/auth', authAPI);

app.get("/", function(request, response) {
  response.send("<h1>Hello World!</h1>");
})

app.listen(PORT, function() {
  console.log("Server is running on port " + PORT);
});
