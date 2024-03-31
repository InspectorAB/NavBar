import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Registration(props) {
    const [formData, setFormData] = useState({})

    const Navigate = useNavigate();
    const handleData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData);

    }
    const addUser = (e) => {
        e.preventDefault()
        const data = JSON.stringify(formData)
        localStorage.setItem('gfg', data)
        Navigate('/');
    }

    return (
        <div>
            Please register here
            <hr/>
            <form onSubmit={addUser}>
                <input type='text' placeholder='Enter Username' name='uname'
                    onChange={handleData}/>
                <input type='email' placeholder='Enter Email' name='email'
                    onChange={handleData}/>
                <button>Register User</button>
            </form>
        </div>
    );
}

export default Registration;