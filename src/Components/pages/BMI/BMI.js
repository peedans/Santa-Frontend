import React, { useState } from 'react'
import './BMI.css'

const BMI = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('ไม่มีข้อความ');
  
  
  
  
    let calcBmi = (e) => {
      e.preventDefault();
  
      if (weight === '' || height === '') {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
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
        imgSrc = "https://scontent.xx.fbcdn.net/v/t1.15752-9/276006606_1216050612132322_3511368579098220724_n.png?stp=dst-png_p235x165&_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_ohc=Pp05ccUc_eIAX93eLrF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIbRgmnH7sVaR3tef-eHVpwO4csV-RSJteLfrYW-MhwsQ&oe=626B7940"
      } else if (bmi >= 25 && bmi < 30) {
        imgSrc = "https://scontent.xx.fbcdn.net/v/t1.15752-9/277213450_665400794568794_2191785693523521700_n.png?stp=dst-png_s206x206&_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=IFsz5V5s2iAAX9Tu5MN&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIWzMK4yrg15ri7KrUGqBFWS7Ip-rNciOA7tJNEn5FUhQ&oe=626BB3DF"
      } else {
        imgSrc = "https://scontent.furt2-1.fna.fbcdn.net/v/t1.15752-9/277615384_410641730403639_2929928611027152228_n.png?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=IKtXgfZxX3cAX-S3Qbx&tn=BUYCBEtl_yBOthHs&_nc_ht=scontent.furt2-1.fna&oh=03_AVJxr1l8B0NanW4Q6Zfb51x_ZND71acAalO9QQk-Bt56kA&oe=6284E7E1"
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