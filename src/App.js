import React, { Component } from 'react';

import BackPaperPage from './components/BackPaperPage';
import PostItComponent from './components/PostIt';  
import { connect } from 'react-redux';
import * as actions from './actions'
import Profile from './components/Profile'

import githubLogo from './images/github.svg'

export class App extends Component {
  componentDidMount(){
    this.props.changeLang("THAI")
    console.log(window.innerHeight);
    console.log(window.innerWidth)
  }

  render() {
    return (
      <div className="table">
        <div className="github">
          <a href="https://github.com/toonPt0473" target="blank" title="My Github">
            <img src={githubLogo} alt=""/>
          </a>
        </div>
        <Profile />
        <BackPaperPage />
        <PostItComponent />
      </div>
    )
  }
}

export default connect(null , actions)(App)
