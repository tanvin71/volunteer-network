import React , { useContext, useEffect, useState }from 'react';
import Tasks from '../tasks/Tasks';
import  {NameContext} from '../../App'

const Home = () => {
     const [events, setEvents] =  useState([])

     useEffect(() => {
         fetch('https://intense-sierra-99767.herokuapp.com/tasks')
         .then(res =>res.json())
         .then(data => setEvents(data))
     }, [])
    return (
        <div className='row'>
            {
                events.map(event => <Tasks event={event}></Tasks>)
            }
        </div>
    );
};

export default Home;