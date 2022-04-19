import React, { useState } from 'react'
import './Register.css'
import { register } from '../../functions/auth'
import { toast } from 'react-toastify';

const Register = () => {
  const [value, setValue] = useState({
    username: '',
    password: '',
    password1: '',
  })

  const handleChange = (e) => {
    // console.log(e.target.value)
    // console.log(e.target.name)
    setValue({
      ...value,
      [e.target.name]:
        e.target.value
    });
  };

  // console.log(values)
  const handelSubmit = (e) => {
    // ใส่เพื่อไม่ให้ react refresh 
    e.preventDefault()
    console.log(value)
    if (value.password !== value.password1) {
      toast.dark('รหัสผ่านไม่ตรงกัน')
    } else {
      register(value)
      .then(res => {
        console.log(res.data)
        toast.success(res.data)
      }).catch(err=>{
        console.log(err.response.data);
        toast.err(err.response.data)
      })
    }
     
  }



  return (
    <div>
      <h1 className='headRegister'>Register</h1>
      <form onSubmit={handelSubmit} className='container'>
        <label className='labelText'>Username</label>
        <input type="text" name="username" placeholder="Name" onChange={handleChange} className="inputForm" />

        <label className='labelText'>Password</label>
        <input type="text" name="password" placeholder="password" onChange={handleChange} className="inputForm"/>
        <br />
        <label className='labelText'>Confirm Password</label>
        <input type="text" name="password1" placeholder="password" onChange={handleChange} className="inputForm"/>

        
          <button disabled={value.password.length < 6 } type='submit' className="buttonRegister">Submit</button>
        
      </form>


    </div>
  )
}

export default Register