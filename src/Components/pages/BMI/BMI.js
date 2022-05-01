import React, { useState } from 'react'
import './BMI.css'
import { toast } from 'react-toastify';

const BMI = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('ไม่มีข้อความ');
  
  
  
  
    let calcBmi = (e) => {
      e.preventDefault();
  
      if (weight === '' || height === '') {
        toast.dark('กรุณากรอกข้อมูลให้ครบถ้วน');
      } else {
        let bmi = (weight / (height / 100 * height / 100))
        setBmi(bmi.toFixed(1));
        // function สำหรับแสดงเลขทศนิยมกี่ตำแหน่ง
  
        if (bmi < 18.5) {
          setMessage('น้ำหนักน้อย / ผอม');
        } else if (bmi >= 18.5 && bmi <= 22.90) {
          setMessage('ปกติ (สุขภาพดี)');
        } else if (bmi >= 23 && bmi <= 24.90) {
          setMessage('ท้วม / โรคอ้วนระดับ 1');
        } else if (bmi >= 25 && bmi <= 29.99) {
          setMessage('อ้วน / โรคอ้วนระดับ 2');
        } else {
          setMessage('อ้วนมาก / โรคอ้วนระดับ 3');
        }
      }
    }
  
    let reload = () => {
      window.location.reload();
    }
  
    let imgSrc;
  
    if (bmi < 1) {
      imgSrc = null
    } else {
      if (bmi < 25) {
        imgSrc = "https://scontent.fhdy2-1.fna.fbcdn.net/v/t1.15752-9/276006606_1216050612132322_3511368579098220724_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEAZ5yETOtW4lPjKRKCnaviWtF_oBjhq4xa0X-gGOGrjGxXnsEVqkty0SyxAoxLXvatxo7BcboVJIzAbzajvvRK&_nc_ohc=KiKLLDb7Jo0AX-m2sKp&tn=7s4tO62H4I9pPY4J&_nc_ht=scontent.fhdy2-1.fna&oh=03_AVInVoz0bUEzJqf5o77OQMI0hXnBUyQ8FFxYb7oZdWE0ew&oe=62930640"
      } else if (bmi >= 25 && bmi < 30) {
        imgSrc = "https://scontent.fhdy2-1.fna.fbcdn.net/v/t1.15752-9/277213450_665400794568794_2191785693523521700_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeGRRatGPqhua7aJWieFIbR85He7fMZZQizkd7t8xllCLEIWQ1Ms3yFdw0Uxpv6kO9IWMa3zKi5T8z3WZrFztIOT&_nc_ohc=yKKlpMphUsgAX9kUjL3&_nc_ht=scontent.fhdy2-1.fna&oh=03_AVJrdy2f-Tcgj3ZE-PQ4bMcdYjahII9pihYVgyseOjbJSQ&oe=629340DF"
      } else {
        imgSrc = "https://scontent.fhdy2-1.fna.fbcdn.net/v/t1.15752-9/277615384_410641730403639_2929928611027152228_n.png?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeEG4i_CeIB8wntVjm6bozHhdBYcmjyhsDR0FhyaPKGwNHhMO_dDrxR66D1sfezXf880s_CPO-KRBmc2Kzzl_XTu&_nc_ohc=DJtGsnVyfdIAX9gQGt1&_nc_ht=scontent.fhdy2-1.fna&oh=03_AVK0MYtIEo6OMFX1aVMiRKQs4KXpnCsml9zWC3Jdv0U-FQ&oe=6294B9E1"
      }
    }
  
  
  
    return (
      <div className="AppBmi">
        <div className="containerBmi">
          <h2 className="centerBmi">BMI Calculator</h2>
          <form onSubmit={calcBmi}>
            <div>
              <label className="textcolor">Weight (Kg)</label>
              <input value={weight} onChange={(e) => setWeight(e.target.value)} className="inputBmi"/>
  
            </div>
            <div>
              <label className="textcolor">Height (Cm)</label>
              <input value={height} onChange={(e) => setHeight(e.target.value)} className="inputBmi" />
            </div>
            <div>
              <button className="btn">submit</button>
              <button className="btn btn-outline" type="submit" onClick={reload}>Reload</button>
            </div>
          </form>
  
          <div className="centerBmi">
            <h3>ค่า BMI ของคุณคือ: {bmi}</h3>
            <p className="messageBmi">{message}</p>
          </div>
  
          <div className="img-container">
            <img src={imgSrc} alt="" />
          </div>
  
        </div>
  
  
      </div>
    );
}

export default BMI