import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {listUser} from '../../functions/users'
import {useSelector} from 'react-redux'
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
// import { Switch } from 'antd';



const ManageAdmin = () => {
  // เข้าถึง state ที่อยู่ใน store
  const {user} =useSelector ((state)=>({...state}))
  // console.log(user)
  const [data,setData] =useState([])

  console.log('data',data)

  useEffect(() => {
    // ส่ง token มาให้ loadata
    loadData(user.token)
  }
  , []);

  // loadDataประกาศแล้ว
  const loadData = (authtoken) => {
    listUser(authtoken)
    .then(res => {
      // res คือ ทั้งหมด
      // res.data คือ เข้าถึงข้อมูล
      setData(res.data)
      console.log('setdata',res.data)
    })
    .catch(err => {
      console.log(err.response.data)
    })
  }

  const handleOnchange =(e,id)=>{
    console.log(e,id)
  }

  const showdata = (items) => items.map((item, index) => {
    console.log(item)
     return (
          <tr key={item._id}>

              <td>{item.username}</td>
              <td>{item.role}</td>
              <td >
              <div className='fas fa-toggle-on' checked={item.enabled} onChange={(e)=>handleOnchange(e,item._id)}></div>
              {/* <Switch checked={item.enabled} onChange={(e)=>handleOnchange(e,item._id)} /> */}
              </td>
              <td>{item.createdAt}</td>
              <td>{item.updatedAt}</td>
        
          </tr>
     )
})


  return (
    <div>
      <h1>ManageAdmin</h1>
      <h3><Link to="/admin/manage-admin">จัดการผู้ใช้งาน</Link></h3>
      <h3><Link to="/admin/index">แคชบอร์ด</Link></h3>

      <div>


            <table className='showdata'>
                <thead>
                    <tr >

                        <th className="text1">username</th>
                        <th className="text1">role</th>
                        <th className="text1">status</th>
                        <th className="text1">created</th>
                        <th className="text1">updated</th>
                        

                    </tr>
                </thead>
                <tbody>
                    {showdata(data)}
                </tbody>

                

            </table>

        </div>
    </div>
    
  )
}

export default ManageAdmin