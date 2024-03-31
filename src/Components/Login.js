import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const addUser = (e) => {
        e.preventDefault();
        const userData = localStorage.getItem('gfg');
        const data = JSON.parse(userData);
        
        if(data && data.uname === formData.uname && data.email === formData.email) {
            localStorage.setItem('IsLogin', 'true'); 
            navigate('/Portfolio');
        } else {
            localStorage.removeItem('IsLogin'); 
            navigate('/Registration');
        }
    };

    return (
        <div>
            Please Login using your registered name and email<br></br>
            <hr></hr>
            <form onSubmit={addUser}>
                <input
                    type="text"
                    placeholder="Enter Username"
                    name="uname"
                    onChange={handleData}
                />
                <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    onChange={handleData}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
