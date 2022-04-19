import './Activity.css';
import './App.css';
import { useState, useEffect  } from 'react';
// import Navbar from '../../Components/Navbar/Navbar';
import Profile from '../Profile/Profile';
// import Profile from '../Profile/Profile';
import axios from 'axios';
import {useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Activity = () => {
    const initialValues = {
        ActivityList: "",
        location: "",
        Kcalories: "",
        date: "",
        Weightgoal: "",
        Bmi: "",
        Bodyfat: "",
        Tdee: "",
        Description: ""
    };



    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [checkValue, setCheckValue] = useState(false);
    const navigate = useNavigate();
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

    };

    // console.log(formValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        // ค่าของ array ของ formvalueที่เป็นค่าว่างหรือไม่
        const value = Object.values(formValues).findIndex(v => v === '')
        // หาช่องว่างไม่เจอจะได้ค่า -1
        if (value === -1) {
            setCheckValue(true)

        };
    }


    useEffect(() => {
        // console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log(formValues)
        }
        // console.log(formValues);
    }, [formErrors]);


    useEffect(() => {
        (async () => {
            const client = axios.create({
                baseURL: 'https://final-santa-backend-hbeg0rl6u-peedans.vercel.app',
            })
            if (checkValue) {
                console.log("checkValue", checkValue)
                await client.post('/users/me/activity', formValues)
                    .then(res => {
                        if (res.status === 200) {
                            // กดส่งได้ครั้งเดียว
                            setCheckValue(false)
                            console.log(res)
                            toast.dark("ส่งข้อมูลสำเร็จ")
                            navigate("/data")
                        }

                    })

                
            }

        })();
    }, [checkValue])
    // ,[dependency]
    const validate = (values) => {
        const errors = {};
        if (!values.Description) {
            errors.Description = "Description is required";
        }
        if (!values.ActivityList) {
            errors.ActivityList = "ActivityList is required";
        } else if (values.ActivityList.length < 3) {
            errors.ActivityList = "ActivityList must be greater than 3";
        } else if (values.ActivityList.length > 20) {
            errors.ActivityList = "ActivityList must be less than 20";
        }
        if (!values.Kcalories) {
            errors.Kcalories = "Kcalories is required";
        } else if (values.Kcalories.length < 3) {
            errors.Kcalories = "Kcalories must be greater than 3";
        } else if (values.Kcalories.length > 20) {
            errors.Kcalories = "Kcalories must be less than 20";
        }
        if (!values.date) {
            errors.date = "Date is required";
        } else if (values.date.length < 3) {
            errors.date = "Date must be greater than 3";
        } else if (values.date.length > 20) {
            errors.date = "Date must be less than 20";
        }
        if (!values.Weightgoal) {
            errors.Weightgoal = "Weightgoal is required";
        } else if (values.Weightgoal.length < 3) {
            errors.Weightgoal = "Weightgoal must be greater than 3";
        } else if (values.Weightgoal.length > 20) {
            errors.Weightgoal = "Weightgoal must be less than 20";
        }
        if (!values.Weeklygoal) {
            errors.Weeklygoal = "Weeklygoal is required";
        } else if (values.Weeklygoal.length < 3) {
            errors.Weeklygoal = "Weeklygoal must be greater than 3";
        } else if (values.Weeklygoal.length > 20) {
            errors.Weeklygoal = "Weeklygoal must be less than 20";
        }
        if (!values.Bodyfat) {
            errors.Bodyfat = "Bodyfat is required";
        } else if (values.Bodyfat.length < 3) {
            errors.Bodyfat = "Bodyfat must be greater than 3";
        } else if (values.Bodyfat.length > 20) {
            errors.Bodyfat = "Bodyfat must be less than 20";
        }
        if (!values.Tdee) {
            errors.Tdee = "Tdee is required";
        } else if (values.Tdee.length < 5) {
            errors.Tdee = "Tdee must be greater than 5";
        } else if (values.Tdee.length > 20) {
            errors.Tdee = "Tdee must be less than 20";
        }
        if (!values.Bmi) {
            errors.Bmi = "BMI is required";
        } else if (values.Bmi.length < 2) {
            errors.Bmi = "BMI must be greater than 2";
        } else if (values.Bmi.length > 20) {
            errors.Bmi = "BMI must be less than 20";
        }
        if (!values.location) {
            errors.location = "Location is required";
        } else if (values.location.length < 3) {
            errors.location = "Location must be greater than 3";
        } else if (values.location.length > 20) {
            errors.location = "Location must be less than 20";
        }

        return errors;

    };

    console.log(formValues);

    return (
        <div className='App'>
            {/* <header>
                <Navbar className="Navbar" />
            </header> */}
            
            <section className="Register">
                <Profile className="Profile" />






                <div className="activityUser">

                

                    <form onSubmit={handleSubmit}>
                        <div >
                            <p className="Activity">Activity</p>
                            <div className="activityMenu">
                                <div className='activity1'>
                                    <div className="activityInfo">
                                        <label htmlFor="firstname" className="textActivityAc"></label>
                                        <input
                                            type="text"
                                            name="ActivityList"
                                            placeholder="Activity"
                                            className="inputActivityAc"
                                            id="ActivityList"
                                            value={formValues.ActivityList}
                                            onChange={handleChange}
                                        />
                                        <p className="errors">{formErrors.ActivityList}</p>
                                    </div>

                                    <div className="activityInfo">
                                        <label htmlFor="firstname" className="textActivityLoc"></label>
                                        <input
                                            type="text"
                                            name="location"
                                            className="inputActivityLoc"
                                            placeholder="location"
                                            id="location"
                                            value={formValues.location}
                                            onChange={handleChange}
                                        />
                                        <p className="errors">{formErrors.location}</p>
                                    </div>
                                </div>
                                <div className='activity2'>
                                    <div className="activityInfo">
                                        <label htmlFor="firstname" className="textActivitykal"></label>
                                        <input
                                            type="number"
                                            name="Kcalories"
                                            placeholder="Kcalories"
                                            className="inputActivitykal"
                                            id="Kcalories"
                                            value={formValues.Kcalories}
                                            onChange={handleChange}
                                        />
                                        <p className="errors">{formErrors.Kcalories}</p>
                                    </div>
                                    <div className="activityInfo">
                                        <label htmlFor="firstname" className="textActivityDate"></label>
                                        <input
                                            type="Date"
                                            name="date"
                                            placeholder="Date"
                                            className="inputActivityDate"
                                            id="Date"
                                            value={formValues.date}
                                            onChange={handleChange}
                                        />
                                        <p className="errors">{formErrors.date}</p>
                                    </div>
                                </div>



                                <div className='activity3'>
                                    <div className="activityInfo">
                                        <label htmlFor="firstname" className="textActivityWeightgoal"></label>
                                        <input
                                            type="number"
                                            name="Weightgoal"
                                            placeholder="Weight Goal"
                                            className="inputActivityWeightgoal"
                                            id="Weightgoal"
                                            value={formValues.Weightgoal}
                                            onChange={handleChange}
                                        />
                                        <p className="errors">{formErrors.Weightgoal}</p>
                                    </div>
                                    <div className="activityInfo">
                                        <label htmlFor="firstname" className="textActivityBMI"></label>
                                        <input
                                            type="number"
                                            name="Bmi"
                                            placeholder="BMI"
                                            className="inputActivityBMI"
                                            id="Date"
                                            value={formValues.Bmi}
                                            onChange={handleChange}
                                        />
                                        <p className="errors">{formErrors.Bmi}</p>
                                    </div>
                                    <div className="activityInfo">
                                        <label htmlFor="firstname" className="textActivityBodyfat"></label>
                                        <input
                                            type="number"
                                            name="Bodyfat"
                                            placeholder="BodyFat"
                                            className="inputActivityBodyfat"
                                            id="Bodyfat"
                                            value={formValues.Bodyfat}
                                            onChange={handleChange}
                                        />
                                        <p className="errors">{formErrors.Bodyfat}</p>
                                    </div>
                                    <div className="activityInfo">
                                        <label htmlFor="firstname" className="textActivityTdee"></label>
                                        <input
                                            type="number"
                                            name="Tdee"
                                            placeholder="Tdee"
                                            className="inputActivityTdee"
                                            id="Tdee"
                                            value={formValues.Tdee}
                                            onChange={handleChange}
                                        />
                                        <p className="errors">{formErrors.Tdee}</p>
                                    </div>
                                </div>


                                <div className="activity4">

                                    <label htmlFor="firstname" className="textActivityDes"></label>
                                    <input
                                        type="text"
                                        name="Description"
                                        className="inputActivityDes"
                                        placeholder="Description"
                                        id="Description"
                                        value={formValues.Description}
                                        onChange={handleChange}
                                    />

                                    <p className="errors">{formErrors.Description}</p>


                                </div>

                                <div className="save">
                                    <button type="submit" className="buttonSave" >SAVE </button>

                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </section>
        </div>)
}

export default Activity;


