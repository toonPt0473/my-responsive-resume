import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux'

const PostitComponent = ({ changeLang , profile : { lang } }) => {
    const onClickChangeLang = () => changeLang(lang === "thai" ? "ENG" : "THAI");
    return (
        <div className="post-it" id="post-it" onClick={onClickChangeLang}>
            <div className="postit-pin"></div>
            <div>
                <p className="postit-text">เปลี่ยนภาษา</p>
            </div>
            <div >
                <p className="postit-text">Click !!</p>
            </div>
        </div>
    )
}

export default connect(state => state , actions)(PostitComponent)
