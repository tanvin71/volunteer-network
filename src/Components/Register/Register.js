import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import img from '../../images/google.png';
import './Register.css'
import {UserContext}  from '../../App'
import { useHistory, useLocation } from 'react-router-dom';



const Register = () => {
     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
     
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(res =>  {
            const {displayName, email, photoURL} = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email, 
                photo: photoURL
            }
            setLoggedInUser(signedInUser);
            history.replace(from);
            console.log(displayName, email, photoURL);
        })
        .catch(err=> {
            console.log(err)
            console.log(err.message)
        })
    }
    return (
        <div className="text-center login">
            <h2>Login with</h2>
            <button onClick={handleSignIn}><img src={img} className="icon-img" alt=""/> Continue with google</button>
            <p>Don't have an account?<a href="">create an account</a> </p>
        </div>
    );
};

export default Register;