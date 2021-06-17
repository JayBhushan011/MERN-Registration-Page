import React, { useState, useEffect } from 'react';
import "./Profile.css";
import Axios from "axios";

function Profile(){
    const [isLoading, setLoading] = useState(true);
    const [userInfo, setuserInfo] = useState();
    
    useEffect(() => {
        Axios.get('http://localhost:6600/auth/info').then(response => {
          setuserInfo(response.data);
          setLoading(false);
        });
      }, []);

    if (isLoading) {
      return <div className="App">Loading...</div>;
    }
    if(!userInfo.imageUrl){
        userInfo.imageUrl = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    }

    return (
        <div className = "profileBlock">
             <h1> Welcome {userInfo.fName + " " +  userInfo.lName}</h1>
             <img className = "profileImg" alt = "the person" src = {userInfo.imageUrl} /> 
             <p className = "other-info"> Email ID : {userInfo.emailID} </p>
        </div>

    
    
   
    )
}

export default Profile;

