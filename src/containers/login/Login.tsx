import React from 'react';
import './Login.css';
import screenshot1 from '../../assets/png/screenshot1-2x.png';
import screenshot2 from '../../assets/png/screenshot2-2x.png';
import screenshot3 from '../../assets/png/screenshot3-2x.png';
import screenshot4 from '../../assets/png/screenshot4-2x.png';
import microsoft from '../../assets/png/microsoft.png';
import googlePlay from '../../assets/png/googlePlay.png';

const Registration = () => {
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
              <div className="logo"></div>
              <div className="form-wrapper">
                <form action="" id="login-form" className="login-form">
                  <input
                    type="text"
                    className="nickname input-field"
                    id="nickname"
                    placeholder="Phone number, username or email adress"
                  />

                  <input type="password" className="password input-field" id="password" placeholder="Password" />
                  <div className="label-wrapper">
                    <input type="checkbox" id="info" className="info" name="info" />
                    <label htmlFor="info">Save login info</label>
                  </div>

                  <input type="submit" className="login-btn" id="login-btn" value="Log in" />
                </form>
              </div>

              <div className="or">
                <span>OR</span>
              </div>
              <div className="facebook-login">
                <div className="faceboor-icon"></div>
                <span>Log in with Facebook</span>
              </div>
              <span>Forgotten your password?</span>
            </div>
          </div>
          <div className="registration">
            <span>Don&apos;t you have an account?</span>&nbsp;
            <span>Sign up</span>
          </div>
          <div className="get-the-app">
            <span>Get the app.</span>
            <div className="get-the-app-img-wrapper">
              <img src={googlePlay} alt="" />
              <img src={microsoft} alt="" />
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="">
          <div className="">
            <a href="#" rel="nofollow noopener noreferrer" target="_blank">
              <div className="">Meta</div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Registration;
