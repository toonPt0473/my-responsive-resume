import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux'



const PostitComponent = ({ changeLang , profile : { lang } }) => {
    const onClickChangeLang = () => changeLang(lang === "thai" ? "ENG" : "THAI");
    return (
        <div className="post-it" onClick={onClickChangeLang}>
            <i className="pin"></i>
            <div className="note">
                <p className="postit-text">เปลี่ยนภาษา</p> 
                <p className="postit-text">Click !!</p>
          </div>
    </div>
    )
}

export default connect(state => state , actions)(PostitComponent)