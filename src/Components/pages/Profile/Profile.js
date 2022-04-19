import './Profile.css';
import { useState } from 'react';

const Profile = () => {
    const [picture, setPicture] = useState('');
    const [account, setAccount] = useState('');
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');

    const onSubmit = e => {
        e.preventDefault()

        const payload = {
            picture,
            account,
            name,
            height,
            weight,
            age
        }

        console.log('submit value', payload)
    }


    return (
        <form onSubmit={onSubmit} className="ProfileUser">
            <div >
                <div className="Picture">
                    <img src="https://image.similarpng.com/very-thumbnail/2020/12/Flat-design-santa-claus-premium-vector-PNG.png" alt="" width="180" height="180"
                        onChange={(e) => setPicture(e.target.value)}
                    />
                </div>
                <div className="Personalmanu">

                    <div className="Personal">
                        <label htmlFor="firstname" className="Personalinfo">Account</label>
                        <input
                            type="text"
                            name="firstname"
                            placeholder="บัญชีผู้ใช้"
                            className="inputAccount"
                            id="1"
                            onChange={(e) => setAccount(e.target.value)}
                        />
                    </div>

                    <div className="Personal">
                        <label htmlFor="firstname" className="Personalinfo">Name</label>
                        <input
                            type="text"
                            name="firstname"
                            placeholder="ชื่อ"
                            className="inputName"
                            id="1"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="Personal">
                        <label htmlFor="firstname" className="Personalinfo">Height</label>
                        <input
                            type="Select"
                            name="firstname"
                            placeholder="ส่วนสูง"
                            className="inputHeight"
                            id="1"
                            onChange={(e) => setHeight(e.target.value)}
                        />
                    </div>

                    <div className="Personal">
                        <label htmlFor="firstname" className="Personalinfo">Weight</label>
                        <input
                            type="integer"
                            name="firstname"
                            placeholder="น้ำหนัก"
                            className="inputWeight"
                            id="1"
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </div>

                    <div className="Personal">
                        <label htmlFor="firstname" className="Personalinfo">Age</label>
                        <input
                            type="integer"
                            name="firstname"
                            placeholder="อายุ"
                            className="inputAge"
                            id="1"
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>

                    <div className="Personal">
                        <label htmlFor="firstname" className="Personalinfo">Address</label>
                        <input
                            type="integer"
                            name="firstname"
                            placeholder="ที่อยู่"
                            className="inputAddress"
                            id="1"
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                </div>

               
            </div>
        </form>
    )

}

export default Profile;