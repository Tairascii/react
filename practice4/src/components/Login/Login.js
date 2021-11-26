import React from 'react'
import './Login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router';
export default function Login({ authed, setAuthed }) {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    function onLog(){
        if (login==='Pablo' && pass==='qwerty'){
            setAuthed(true);
            navigate('/')
        }
        else{
            setLogin('')
            setPass('')
        }
    }
    return (
        <div className="login">
            <div className="formoch">
                <h1>Login page</h1>
                <label>User</label>
                <input value={login} type="text" onChange={e => setLogin(e.target.value)}/>
                <small>The correct username is: Pablo</small>
                <label>Password</label>
                <input value={pass} type="password" onChange={e => setPass(e.target.value)}/>
                <small>The correct password is: qwerty</small>
                <button onClick={onLog}>Submit</button>
            </div>
        </div>
    )
}
