import React from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import Axios from "axios";


var userInfo;

function sendToServer(user){

    Axios.all([
        Axios.post('http://localhost:6600/auth/token',{
        "emailID": user.emailID,
        "passward": user.passward
    }), 
    Axios.post('http://localhost:6600/auth/profile',{
        "emailID": user.emailID,
    })
      ])
      .then(Axios.spread((data1, data2) => {
        console.log('data1', data1, 'data2', data2)
        userInfo = data2.data;
        window.location="/profile";
      }));

    

    // Axios.post('http://localhost:6600/auth/token',{
    //     "emailID": user.emailID,
    //     "passward": user.passward
    // })
    
    // Axios.post('http://localhost:6600/auth/profile',{
    //     "emailID": user.emailID,
    // }).then( function(response) { userInfo = response })
}

function Login(){
    
    const { register, handleSubmit } = useForm();
    const onSubmit = async(data) => {
       
        await sendToServer(data)
    };

    return (
        <Form className="form" onSubmit={handleSubmit(onSubmit)}>


        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" {...register("emailID", { required: true })} />
        </Form.Group>


        <Form.Group controlId="formBasicPasswordConfirm">
            <Form.Label> Password</Form.Label>
            <Form.Control type="password" placeholder="Password" {...register("passward", { required: true })}/>
        </Form.Group>

        <Button variant="secondary" type="submit" className="button" >
            Submit
        </Button>
        
        </Form>
    )
}   
export default Login;
