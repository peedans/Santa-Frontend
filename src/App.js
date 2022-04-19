import React, { useState, useEffect } from 'react';
// useState คือ เก็บค่า useEffect ทำฉันด้วย
import Data from './Components/pages/Data/Data';
import Activity from './Components/pages/Activity/Activity';
import Login from './Components/pages/auth/Login/Login';
import Bmi from './Components/pages/BMI/BMI';
import EditActivity from './Components/pages/Activity/EditActivity';
import Register from './Components/pages/auth/Register';
import Navbar from './Components/pages/Navbar/Navbar';
import HomeAdmin from './Components/pages/Admin/HomeAdmin';
import HomeUser from './Components/pages/user/HomeUser';
import ManageAdmin from './Components/pages/Admin/ManageAdmin';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//functions
import { currentUser } from './Components/functions/auth';

//redux
import { useDispatch } from 'react-redux'

//Routes
import UserRoute from './Components/routes/UserRoute';
import AdminRoute from './Components/routes/AdminRoute';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const dispatch = useDispatch()

  const idtoken = localStorage.token

  if (idtoken) {
    // tokenเข้ามาใน currentUser
    currentUser(idtoken)
      // ได้กลับมาจากหลังบ้าน
      .then(res => {

        console.log(res.data);
        dispatch({
          type: 'LOGIN',
          payload: {
            token: idtoken,
            username: res.data.username,
            role: res.data.role
          },
        });
      }).catch(err => {

        console.log(err)
      })
  }


  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Activity" element={<Activity className="Activity" />} />
          <Route path="Data" element={<Data />} />
          <Route path="Bmi" element={<Bmi />} />
          <Route path="EditActivity/:activityDataId" element={<EditActivity />} />
          <Route path="Register" element={<Register />} />
          <Route path="/admin/index"

            element={<AdminRoute>
              <HomeAdmin />
            </AdminRoute>
            }
          />

          <Route path="/admin/manage-admin"

            element={<AdminRoute>
              <ManageAdmin />
            </AdminRoute>
            }
          />

          <Route
            path="/user/index"
            element={
              <UserRoute>
                <HomeUser />
              </UserRoute>

              
            }

            
          />


        </Routes>
      </div>
    </BrowserRouter>


  );
}

export default App;
