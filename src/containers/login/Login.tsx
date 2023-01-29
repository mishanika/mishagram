import React from 'react';
import { useEffect } from 'react';
import './Login.css';
import screenshot1 from '../../assets/png/screenshot1-2x.png';
import screenshot2 from '../../assets/png/screenshot2-2x.png';
import screenshot3 from '../../assets/png/screenshot3-2x.png';
import screenshot4 from '../../assets/png/screenshot4-2x.png';
import microsoft from '../../assets/png/microsoft.png';
import googlePlay from '../../assets/png/googlePlay.png';
import { IFooter } from './types';
import { textsFooter } from '../../constants/textsLoginFooter';
import { textsMain } from '../../constants/textsLoginMain';
import { Link } from 'react-router-dom';

const Login = () => {
  const renderFooter = ({ text, url }: IFooter) => (
    <div className="footer-element" onClick={() => window.open(url)}>
      <a href="#" className="footer-a">
        {text}
      </a>
    </div>
  );

  const googlePlayRedirect = () => {
    window.open('https://play.google.com/store/apps/details?id=com.instagram.android');
  };

  const microsoftRedirect = () => {
    window.open(
      'ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C3052%2C1966',
    );
  };
  useEffect(() => {
    const phoneBlock = document.querySelectorAll('.screenshot');
    let counter = 0 as keyof typeof phoneBlock as number;
    setInterval(() => {
      phoneBlock![counter].classList.remove('active');
      counter++;
      if (counter == 4) {
        counter = 0;
      }
      phoneBlock![counter].classList.add('active');
    }, 5000);
  }, []);

  return (
    <div className="login-menu">
      <main className="main-section">
        <div className="phone-block">
          <img src={screenshot1} alt="" className="screenshot active" />
          <img src={screenshot2} alt="" className="screenshot" />
          <img src={screenshot3} alt="" className="screenshot" />
          <img src={screenshot4} alt="" className="screenshot" />
        </div>
        <div className="login-block">
          <div className="logo-form-wrapper">
            <div>
              <div className="logo-login"></div>
              <div className="form-wrapper">
                <form action="" id="login-form" className="login-form">
                  <input
                    type="text"
                    className="nickname-login input-field"
                    id="nickname"
                    placeholder="Phone number, username or email adress"
                  />

                  <input type="password" className="password input-field" id="password" placeholder="Password" />
                  <div className="label-wrapper">
                    <input type="checkbox" id="info" className="info" name="info" />
                    <label htmlFor="info">{textsMain.saveLoginInfo}</label>
                  </div>

                  <input type="submit" className="login-btn" id="login-btn" value="Log in" />
                </form>
              </div>

              <div className="or">
                <span>{textsMain.or}</span>
              </div>
              <div className="facebook-login">
                <div className="faceboor-icon"></div>
                <span>{textsMain.logInWithFacebook}</span>
              </div>
              <Link to="/forgot-pwd">
                <span className="forgot-pwd">{textsMain.forgottenYourPassword}</span>
              </Link>
            </div>
          </div>
          <div className="registration">
            <span>{textsMain.youHaveAnAccount}</span>&nbsp;
            <Link to="/reg">
              <span>{textsMain.signUp}</span>
            </Link>
          </div>
          <div className="get-the-app">
            <span>{textsMain.getTheApp}</span>
            <div className="get-the-app-img-wrapper">
              <img src={googlePlay} alt="" onClick={googlePlayRedirect} />
              <img src={microsoft} alt="" onClick={microsoftRedirect} />
            </div>
          </div>
        </div>
      </main>

      <footer className="footer-login">
        <div className="footer-upper">{textsFooter.map(renderFooter)}</div>
        <div className="footer-lower">
          <div className="language">{textsMain.language} (UK)</div>
          <div className="rights">{textsMain.rights}</div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
