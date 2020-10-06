import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NameContext, UserContext } from '../../App';
import './EventsTask.css'


const EventsTask = () => {
    const [choiceEvents, setChoiceEvents] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const  [eventName, setEventName] = useContext(NameContext)
    console.log(eventName)

    const {eventId} =  useParams();

    useEffect(() => {
        fetch('https://intense-sierra-99767.herokuapp.com/choiceCollection?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setChoiceEvents(data))
    },[])
    const deleteProduct = (eventId) => {
        fetch(`https://intense-sierra-99767.herokuapp.com/delete/${eventId}`, {
            method: 'DELETE'
        },[])
            .then(res => res.json())
            .then(result => {
                console.log(result);
            
            })

    }
    return (
        <div className="row">
            {
                choiceEvents.map(choice => <div className="main-div">
                    <div>
                        <img src={eventName.img} className='w-25'  alt=""/>
                    </div>
                    <div>
                        <p>{choice.eventName}</p>
                        <p>{choice.date}</p>
                        <button className="btn btn-danger" onClick={() => deleteProduct(choice.eventId)}>cancel</button>
                    </div>
                </div>  )
            }
        </div>
    );
};

export default EventsTask;