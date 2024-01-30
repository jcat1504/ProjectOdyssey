import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUserName] = useState("");
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        localStorage.setItem("userId", username);
        setUserName("");
        navigate("/tasks");
    }
    return (
        <div className='login__container'>
            <form className='login__form' onSubmit={handleLogin}>
                <input
                    type='text'
                    name='username'
                    id='username'
                    required onChange={(e) => setUserName(e.target.value)}
                    value={username}
                    />
                    <button>SIGN IN</button>
            </form>
        </div>
    );
};

export default Login;