import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import Frame from '../assets/imgs/Frame.png';
import logo from "../assets/imgs/kerryexpress_logo_white.png";

const Registersuccess = () => {
  let location = useLocation();
  console.log(location.state.form.username.length);
  // console.log(location.state.form.username)
  return(
    <div className="app">
      <img src={logo}  className="logo"/>
      <div className="ui-rectangle">
        <img src={Frame}/>
        <div className="center">
          Welcome to &nbsp;
          <div className="ui-h2">
          Kerry Express
          </div>
        </div>
        <div className="userName" >
          {location.state.form.username}
        </div>
        <div className="buttonback">
        <button><a href="/Kerryform" >Back to home</a></button>
        </div>
      </div>
    </div>
  );
}
export default Registersuccess;