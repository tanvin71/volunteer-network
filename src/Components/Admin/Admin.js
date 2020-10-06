import React from 'react';
import img from '../../images/Group 1329.png'
import'./Admin.css';

const Admin = () => {
    return (
        <div className="admin">
            <div className="left-side">
                <p>Volunteer register list</p>
                <p>Add event</p>

            </div>
            <div className="right-side">
                <thead>
                    <tr>Name</tr>
                    <tr>Email id</tr>
                    <tr>Registating date</tr>
                    <tr>Volunteer list</tr>
                    <tr> Action</tr>
                </thead>
            </div>
        </div>
    );
};

export default Admin;