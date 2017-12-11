import React from 'react';
import { connect } from 'react-redux'

const rating = (rate) => {
  return Array.apply(null, {length: 5}).map((item , index) =>{
    return <span className={`fa fa-star fa-1x ${index + 1 <= rate ? "checked" : ""}`} key={index}></span>
  })
}

const Profile = ({ profile }) => {
    const { lang } = profile
    return (
      <div className="paper page1">
        <div className="header-profile">
          <h1>{profile.name}</h1><span style={{color:"red"}}>{profile.job}</span><hr/>
          <div className="flex">
            <span className="flex-item white-text">{lang === "thai" ? "เบอร์ติดต่อ: " : "Mobile: "}{profile.mobile}</span>
            <span className="flex-item white-text">Github: <a href="https://github.com/toonPt0473">{profile.github}</a></span>
          </div>
        </div>
        <div className="flex body-profile">
          <div className="about">
            <h2>ABOUT</h2>
            <p className="white-text">{lang === "thai" ? "เพศ: " : "Sex: "}{profile.sex}</p>
            <p className="white-text">{lang === "thai" ? "วันเกิด: " : "Birth: "}{profile.birthDate}</p>
            <p className="white-text">{lang === "thai" ? "การศึกษา: " : "Education: "}{profile.education}</p>
            <p className="white-text">{lang === "thai" ? "ที่อยู่: " : "Address: "}{profile.address}</p>
            <p className="white text">{lang === "thai" ? "เงินเดือนที่ต้องการ: " : "Expect salary: "}15000-20000{lang === "thai" ? " บาท" : " bath"}</p>
            <p className="white-text">{lang === "thai" ? "อีเมล: " : "Email: "}{profile.email}</p>
          </div>
          <div className="skill">
            <h2>SKILL</h2>
            <p className="white-text">HTML : {rating(2)}</p>
            <p className="white-text">CSS : {rating(2)}</p>
            <p className="white-text">JS : {rating(3)}</p>
            <p className="white-text">REACTJS : {rating(3)}</p>
            <p className="white-text">NODEJS : {rating(2)}</p>
            <p className="white-text">MONGODB : {rating(1)}</p>
            <p className="white-text">JQUERY : {rating(2)}</p>
            <p className="white-text">Searching : {rating(4)}</p>
          </div>
        </div>
        
      </div>
    )
}

export default connect(state => state)(Profile)
