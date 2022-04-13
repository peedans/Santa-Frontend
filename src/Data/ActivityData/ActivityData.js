import './ActivityData.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";



const ActivityData = () => {

    const [data, setData] = useState([])
    // const {activityDataId} = useParams();

    useEffect(() => {
        (async () => {
            const client = axios.create({
                baseURL: 'http://localhost:7000',
            })
            const res = await client.get('/users/me/activity')
            setData(res.data)
            console.log("console", res.data)
        })();
    }, [])

    // useEffect(() => {
    //     (async () => {
    //         const client = axios.create({
    //             baseURL: 'http://localhost:7000',
    //         })
    //         const res = await client.delete(`/users/me/activity/${activityDataId}`);
    //         setData(res.data)

    //     })();
    // }, [])


    const showdata = (items) => items.map((item, index) => {
        console.log(item)
        return (
            <tr key={item._id}>

                <td>{item.ActivityList}</td>
                <td>{item.location}</td>
                <td>{item.Kcalories}</td>
                <td>{item.date}</td>
                <td>{item.Weightgoal}</td>
                <td>{item.Bodyfat}</td>
                <td>{item.Tdee}</td>
                <td>{item.Bmi}</td>
                <td>{item.Description}</td>
                <td>
                    <Link to={`/EditActivity/${item._id}`}>
                        <button className="editActivity" >Edit Activity</button>
                    </Link>
                </td>

                <td>
                    
                        <button variant="danger" >Delete</button>
                
                </td>

                {/* <button className="editActivity" >Edit Activity</button>
                    <button variant="danger">Delete</button>
                 */}
            </tr>
        )
    })

    // const navigate = useNavigate();
    // const EditActivity = () => {
    //     c("/EditActivity",{state.id.data._id})
    //     console.log("EditActivity")
    // }
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


            </table>

        </React.Fragment>





    )
}

export default ActivityData