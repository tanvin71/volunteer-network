import React , { useContext, useEffect, useState }from 'react';
import Tasks from '../tasks/Tasks';
import  {NameContext} from '../../App'
import randomColor from 'randomcolor';

const Home = () => {
     const [events, setEvents] =  useState([])
     const color = (randomColor());

     useEffect(() => {
         fetch('https://intense-sierra-99767.herokuapp.com/tasks')
         .then(res =>res.json())
         .then(data => setEvents(data))
     }, [])
    return (
        <div className='row'>
            {
                events.map(event => <Tasks color={color} event={event}></Tasks>)
            }
        </div>
    );
};

export default Home;