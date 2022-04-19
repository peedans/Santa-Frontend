import './ActivityData.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const ActivityData = () => {

    const [data, setData] = useState([])
    // const {activityDataId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {

        const client = axios.create({
            baseURL: 'https://final-santa-backend-hbeg0rl6u-peedans.vercel.app',
        })
        const res = await client.get('/users/me/activity')
        setData(res.data)
        // console.log("console", res.data)

    }


    // useEffect(() => {
    //     (async () => {
    //         const client = axios.create({
    //             baseURL: 'http://localhost:7000',
    //         })
    //         const res = await client.delete(`/users/me/activity/${activityDataId}`);
    //         setData(res.data)

    //     })();
    // }, [])

    const deleteActivity = async (id) => {
        try {
            const client = axios.create({
                baseURL: 'https://final-santa-backend-hbeg0rl6u-peedans.vercel.app',
            })
            const res = await client.delete(`/users/me/activity/${id}`);

            //   console.log("aa",res.data)
            getData();

            // ('Delete Success')
            toast.dark('ลบข้อมูลสำเร็จ')

        } catch (error) {
            console.log(error)
        }
    }


    const showdata = (items) => items.map((item, index) => {
        // console.log(item)
        return (
            <tr key={item._id}>

                <td >{item.ActivityList}</td>
                <td >{item.location}</td>
                <td >{item.Kcalories}</td>
                <td >{item.date}</td>
                <td >{item.Weightgoal}</td>
                <td >{item.Bodyfat}</td>
                <td >{item.Tdee}</td>
                <td >{item.Bmi}</td>
                <td >{item.Description}</td>
                <td>
                    <Link to={`/EditActivity/${item._id}`}>
                        <button className="editActivity" >Edit Activity</button>
                    </Link>
                </td>

                <td>

                    <button variant="danger" onClick={() => deleteActivity(item._id)} className="deleteActivity" >Delete</button>

                </td>


            </tr>
        )
    })


    return (
        <React.Fragment>


            <table className='showdata'>
                <thead>
                    <tr >

                        <th className="text1">Activity </th>
                        <th className="text1">Location</th>
                        <th className="text1">Kcalories</th>
                        <th className="text1">Date</th>
                        <th className="text1">WeightGoal</th>
                        <th className="text1">BodyFat</th>
                        <th className="text1">Tdee</th>
                        <th className="text1">BMI</th>
                        <th className="text1">Description</th>

                    </tr>
                </thead>
                <tbody>
                    {showdata(data)}
                </tbody>
                <Link to={'/Activity'}>
                    <button className="buttonAddactivity">Add Activity</button>
                </Link>
            </table>

        </React.Fragment>





    )
}

export default ActivityData