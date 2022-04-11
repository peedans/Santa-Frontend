import React from 'react'
import useLocalStorage from 'use-local-storage'
import './Login.css'


const Login = () => {

    const [theme,setTheme]=useLocalStorage('theme'?'dark':'light')

    const changeTheme=()=>{
        setTheme(theme==='dark'?'light':'dark')
    }



    return (
        <div className='appLogin' data-theme={theme}>
            <div className="login">
                <h1 className ="textLogin">login</h1>
                <div className='container'>
                <div className='top'>

                    <i class='fab fa-google'></i>
                    <i class='fab fa-facebook-square'></i>
                    <i class='fab fa-linkedin'></i>
                    <i class='fab fa-twitter-square'></i>
                    <i class='fab fa-apple'></i>
                </div>
                <p className='divider'><span>Or</span></p>
                <form>
                <label>E-mail</label>
                <input type="email" placeholder='Enter your email'  className="inputForm"/>
                <label>Password</label>
                <input type="password" placeholder='Enter your password' className="inputForm" />
                <div className='remember'>
            <input type='checkbox' checked='checked' className="inputForm" />
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
        <div className='theme-toggle'>
            <h2 className="lightTheme">Light Theme</h2>
            <i onClick={changeTheme} class='fas fa-toggle-on'></i>
        </div>
    </div>
    </div>
    )
}

export default Login