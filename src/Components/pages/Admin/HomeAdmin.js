import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1>Home Admin</h1>
      <h3><Link to="/admin/manage-admin">จัดการผู้ใช้งาน</Link></h3>
      <h3><Link to="/admin/index">แคชบอร์ด</Link></h3>

    </div>
    
  )
}

export default Home