import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import EventsTask from '../EventsTask/EventsTask';


const Events = () => {
    const handleAddEvent = () =>  {
        fetch('https://intense-sierra-99767.herokuapp.com/addEvent', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }

    const [choiceEvents, setChoiceEvents] = useState([]);

    useEffect(() => {
        fetch('https://intense-sierra-99767.herokuapp.com/choiceCollection')
        .then(res => res.json())
        .then(data => setChoiceEvents(data))
    },[])
    return (
        <div>
            <div className="col-md-6">
                <EventsTask></EventsTask>
            </div>
        </div>
    );
};

export default Events;