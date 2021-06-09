import React from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Registration.css";
import Axios from "axios";
import emailjs from "emailjs-com"

function sendToServer(user){

    emailjs.send("service_awrf50s","template_w0hvmrg",{
    to_name: "Jay",
    to_email: user.emailID,
    }, 
    "user_u8NXYPKlCZKpoWfglhJwX");

    

    console.log(user)
    Axios.post('http://localhost:5000/register/add',{
        "fName": user.fName,
        "lName": user.lName,
        "username": user.Username,
        "emailID": user.emailID,
        "passward": user.passward
    }).then( function(response) {console.log(response)})
    
    
    
    
}


function Registration(){
    
    
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = async(data) => {
        console.log(data)
       
        await sendToServer(data)
    };
   


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
        </Form>
       

    );
};

export default Registration;
