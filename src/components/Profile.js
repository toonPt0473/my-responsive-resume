import React from 'react';
import { connect } from 'react-redux'

const rating = (rate) => {
  return Array.apply(null, {length: 5}).map((item , index) =>{
    return <span className={`fa fa-star fa-1x ${index + 1 <= rate ? "checked" : ""}`} key={index}></span>
  })
}
const renderSkillRating = data => <p>{data[0]} : {rating(data[1])}</p>;
const mySkills = [["HTML" , 2] , ["CSS", 2] , ["JS" , 2] ,["ReactJS" , 3] , ["NodeJS" , 2] , ["MongoDB" , 1] , ["Jquery" , 2] , ["Stackoverflow" , 3]];

const Profile = ({ profile }) => {
    const { lang } = profile;
    const checkLang = (thai ,eng) => lang === "thai" ? thai : eng;

    return (
      <div className="paper page1">
        <div className="header-profile">
          <h1>{profile.name}</h1><span style={{color: "khaki"}}>{profile.job}</span><hr/>
          <div className="flex">
            <span className="flex-item">
              <strong className="topic">{checkLang("เบอร์ติดต่อ: " , "Mobile: ")}</strong>{profile.mobile}
            </span>
            <span className="flex-item">
              <strong className="topic">My Github: </strong><a href="https://github.com/toonPt0473" target="blank" >{profile.github}</a>
            </span>
          </div>
        </div>
        <div className="flex body-profile">
          <div className="about">
            <h2 className="topic">ABOUT</h2>
            <p>{checkLang("เพศ: ", "Sex: ")}{profile.sex}</p>
            <p>{checkLang("วันเกิด: ", "Birth: ")}{profile.birthDate}</p>
            <p>{checkLang("การศึกษา: " , "Education: ")}{profile.education}</p>
            <p>{checkLang("ที่อยู่: " , "Address: ")}{profile.address}</p>
            <p>{checkLang("เงินเดือนที่ต้องการ: " , "Expect salary: ")}15000-20000{lang === "thai" ? " บาท" : " bath"}</p>
            <p>{checkLang("อีเมล: " , "Email: ")}{profile.email}</p>
          </div>
          <div className="skill">
            <h2 className="topic">SKILL RATING</h2>
            {mySkills.map(skill => renderSkillRating(skill))}
          </div>
        </div>
        
      </div>
    )
}

export default connect(state => state)(Profile)
