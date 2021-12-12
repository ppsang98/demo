import React from "react";
import ThemeButton from "../ThemeButton/ThemeButton";
import Clock from "../Clock/Clock";
import "./Header.css";
import LanguageButton from "../LanguageButton/LanguageButton";
import LoginButton from "../LoginButton/LoginButton";
import {Link} from 'react-router-dom';


const Header = (props) => {

  const {changeLanguage} = props;
  
  const lang = localStorage.getItem("i18nextLng");
  
  return (
    <div className="Header">
      <div className="Header__body">
        <div className="Header__body--left">
          <div className="notification">
            <i className="far fa-bell"></i>
            <label htmlFor="" className="notification__number">
              5
            </label>
          </div>
          <div className="Time-counter">
            <Clock />
          </div>
          <Link className="Header-link" to="/">HOME</Link>
          <Link className="Header-link" to={`/${lang}/news`}>NEWS</Link>
          
        </div>
        <div className="Header__body--right">
          <ThemeButton />
          <LanguageButton changeLanguage={changeLanguage} />
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
