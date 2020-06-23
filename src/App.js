

import './App.css';
import Header from "./Components/Header"

import React, { Component } from 'react'
import Main from './Components/Main';
import Footer from './Components/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="container">
	
        <Header  className="header"/>
		
        <Main className="main"/>
        <Footer className="footer"/>
      </div>
    )
  }
}
