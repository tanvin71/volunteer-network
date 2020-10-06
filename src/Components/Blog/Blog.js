import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import {NameContext}  from '../../App';
import fakeData from '../../fakeData'
import './Blog.css'

const Blog = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [eventName, setEventName] = useContext(NameContext)
    console.log(eventName.name,eventName.id, eventName.img)
    const [userDetails, setUserDetails] = useState({
        name:'',
        email:'', 
        date: '',
        description: '',
        eventName:'',
    })
    
    const history = useHistory()
    const handleInput = () => {
        
    }
    
    const handleSubmit = (e) => {
        const name= document.getElementById('name').value;
        const email= document.getElementById('email').value;
        const date= document.getElementById('date').value;
        const description= document.getElementById('description').value;
        const eventName= document.getElementById('eventName').value;
        const total = {name, email, date ,description,eventName}

        const newEvents  = { ...total}
        fetch('https://intense-sierra-99767.herokuapp.com/event', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(total)
    })
     .then(data  => {
        console.log(data);
        history.push('/events')
         
     })
        console.log(newEvents)
        e.preventDefault()
    }
    const handleRegistration = () => {
        
    }
    console.log(userDetails)
    return (
        <div>
           <form  onSubmit={handleSubmit} className="login">
               <input type="text" placeholder="Full Name" name ="name" id ="name" required  value={loggedInUser.name}/>
               <br/>
               <input type="text" placeholder="Username or Email" id="email" required name="email" value={loggedInUser.email}/>
               <br/>
               <input type="date" placeholder="Date"  id="date"  required name="date"/>
               <br/>
               <input type="text" placeholder="Description" id="description" required  name="description"/>
               <br/>
                <input type="text" placeholder="Organize books at the library" required  id="eventName"  name="eventName" value={eventName.name}/>
               <br/>
               <button className="btn btn-primary regis" onClick={handleRegistration}type="submit">Registration</button>
           </form>
        </div>
    );
};

export default Blog;