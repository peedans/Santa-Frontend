import React, { useState } from 'react'
import useLocalStorage from 'use-local-storage'
import './Login.css'
import { login } from "../../../functions/auth";
import { useNavigate } from 'react-router-dom';

//redux
import { useDispatch } from 'react-redux'

import { toast } from 'react-toastify';





const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    

    const [value, setValue] = useState({
        username: '',
        password: '',

    });

    // เช็ค role ว่าเป็น role admin หรือ user
    const roleBaseRedirect = (role) => {
        console.log(role)
        if(role === 'admin'){
            navigate('/admin/index')
        }else {
            navigate('/user/index')
        }

    }

    const handleChange = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.name)
        setValue({
            ...value,
            [e.target.name]:
                e.target.value
        });
    };

    const handelSubmit = (e) => {
        // ใส่เพื่อไม่ให้ react refresh 
        e.preventDefault()
        console.log(value)

        login(value)
            .then(res => {
                // console.log(res.data)
                // alert(res.data)
                toast.dark('ล็อกอินสำเร็จ')

                // dispatch เก็บที่ redux
                dispatch({ 
                    type: 'LOGIN',
                    payload : {
                        token :res.data.token,
                        username : res.data.payload.user.username,
                        role: res.data.payload.user.role
                    },
                });
                // เก็บที่ localStorage
                
                localStorage.setItem('token', res.data.token)
                roleBaseRedirect(res.data.payload.user.role)
                
            }).catch(err => {
                console.log(err.response.data);
                toast.error(err.response.data)
            })
    }




    return (
        <div className='appLogin' >
            <div className="login">
                <h1 className="textLogin">login</h1>
                <div className='container'>
                    <div className='top'>

                        <i class='fab fa-google'></i>
                        <i class='fab fa-facebook-square'></i>
                        <i class='fab fa-linkedin'></i>
                        <i class='fab fa-twitter-square'></i>
                        <i class='fab fa-apple'></i>
                    </div>
                    <p className='divider'><span>Or</span></p>

                    <form onSubmit={handelSubmit}>
                        <label>Username</label>
                        <input type="text" placeholder='Enter your username' className="inputForm" onChange={handleChange} name='username'/>
                        <label>Password</label>
                        <input type="text" placeholder='Enter your password' className="inputForm" onChange={handleChange} name='password' />
                        <div className='remember'>
                            <input type='checkbox' checked='checked' className='checkBox' />
                            <p>Remember Me</p>
                        </div>
                        <button className="buttonLogin">Login</button>
                    </form>
                    <div className='bottom'>
                        <p>Forget your password</p>
                        <a href='/'>Reset Password</a>

                    </div>
                    <p className="create">Create Account</p>
                </div>
                <div className='textSanta'>
                    <h2 className="lightTheme">SANTA</h2>
                    <i  class='fas fa-toggle-on'></i>
                </div>
            </div>
        </div>
    )
}

export default Login