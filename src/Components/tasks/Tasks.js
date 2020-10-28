import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NameContext, UserContext } from '../../App';
import './Tasks.css';


const Tasks = (props) => {
    const {img, name,id }  = props.event;
    console.log(props.randomColor)
    
    const  [eventName, setEventName] = useContext(NameContext)
    
    const handleAuth =  () => {

    }
    return (
            <div className="col-md-3 mt-4 task" onClick={()=> setEventName({img,id,name})}>
                <Link to={"/event/" +id }className="card p-2">
                    <img className="task-img" src={img} alt=""/>
                    <h4  style={{background:props.color}}className="text-center text-white pb-4 bg-primary">{name}</h4>
                </Link>   

            </div>
    );
};

export default Tasks;