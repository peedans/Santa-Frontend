import React from 'react'
import { useSelector } from 'react-redux'
// เป็นตัวเข้าถึง store
import LoadingToRedirect from './LoadingToRedirect'

const UserRoute = ({children}) => {
    // คืออะไรที่อยู่ภายใต้ UserRoute จะเป็น children คือhome
    // ดึงตัวแปรมาเช็ค ว่ามี token ไหม มีการ login ไหม
    // useSelector คือการเข้าถึง store ของ redux
    const { user } = useSelector((state) => ({...state}))
    // มีuser login มาไหม
    // console.log ('userRoute', children)
  return (
    // เช็คuser มีไหม   เช็คuser.token มีไหม ถ้ามี=? หรือถ้าเป็นจริง
    user && user.token ? children : <LoadingToRedirect/>
  )
}

export default UserRoute