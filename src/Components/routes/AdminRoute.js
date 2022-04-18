import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
// เป็นตัวเข้าถึง store
import LoadingToRedirect from './LoadingToRedirect'
import { currentAdmin } from '../functions/auth'

const AdminRoute = ({ children }) => {
  // คืออะไรที่อยู่ภายใต้ UserRoute จะเป็น children คือhome
  // ดึงตัวแปรมาเช็ค ว่ามี token ไหม มีการ login ไหม
  // useSelector คือการเข้าถึง store ของ redux
  const { user } = useSelector((state) => ({ ...state }))
  // trueคือผ่าน คุณคือ admin false คุณไม่ใช้คือ admin
  const [ok, setOk] = useState(false)

  useEffect(() => {

    if (user && user.token) {
      currentAdmin(user.token)
        .then(res => {
          console.log(res)
          setOk(true)
        }).catch(err => {
          console.log(err)
          setOk(false)
        })
    }


  }, [user])







  // มีuser login มาไหม
  // console.log ('userRoute', children)
  return (
    // เช็คuser มีไหม   เช็คuser.token มีไหม ถ้ามี=? หรือถ้าเป็นจริง
    ok ? children : <LoadingToRedirect />
    )
}

export default AdminRoute