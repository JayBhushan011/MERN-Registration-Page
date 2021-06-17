import React from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Registration.css";
import Axios from "axios";
import emailjs from "emailjs-com"
import GoogleLogin from 'react-google-login';

function sendToServer(user){

    emailjs.send("service_awrf50s","template_w0hvmrg",{
    to_name: "Jay",
    to_email: user.emailID,
    }, 
    "user_u8NXYPKlCZKpoWfglhJwX");

    

    console.log(user)
    Axios.post('http://localhost:6600/register/add',{
        "fName": user.fName,
        "lName": user.lName,
        "username": user.Username,
        "emailID": user.emailID,
        "passward": user.passward
    }).then( function(response) {console.log(response)})
    window.location="/login";
    
    
    
    
    
}


function Registration(){
    
    
    const { register, handleSubmit } = useForm();
    const onSubmit = async(data) => {
        console.log(data)
       
        await sendToServer(data)
    };

    const handleLogin = async googleData => {
       
        const data = googleData;
        console.log(data);
        var user = data.profileObj;
        Axios.post('http://localhost:6600/register/add',{
        "fName": user.givenName,
        "lName": user.familyName,
        "username": user.givenName + user.familyName,
        "emailID": user.email,
        "passward" : user.googleId,
        "pictureURL" : user.imageUrl
    }).then( function(response) {console.log(response)})
        window.location="/login";
      }
      


    return (

        
        <Form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
            <Form.Label> First Name </Form.Label>
            <Form.Control type="text" placeholder="Enter first name" {...register("fName", { required: true })}/>
        </Form.Group>
        <Form.Group>
            <Form.Label> Last Name </Form.Label>
            <Form.Control type="text" placeholder="Enter last name" {...register("lName", { required: true })}/>
        </Form.Group>
        <Form.Group>
            <Form.Label> UserName </Form.Label>
            <Form.Control type="text" placeholder="Choose username" {...register("Username", { required: true })}/>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" {...register("emailID", { required: true })} />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicPasswordConfirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" {...register("passward", { required: true })}/>
        </Form.Group>

        <Button variant="secondary" type="submit" className="button" >
            Submit
        </Button>
        <Button variant="link" type="submit" href="/login">
            Already have an account? 
        </Button>
        <GoogleLogin
        clientId="489357873653-1fgenli8k45369snuovqjihedqpmlpgs.apps.googleusercontent.com"
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
        />  
        </Form>
       

    );
};

export default Registration;
