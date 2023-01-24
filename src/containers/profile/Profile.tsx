import React from 'react';
import './Profile.css';
import { texts } from '../../constants/textsProfile';
import donikghoul from '../../assets/png/donikghoul.png';
import SettingsSVG from '../../assets/svg/SettingsSVG';

const Profile = () => {
  return (
    <main className="profile-main-section">
      <div className="upper-part">
        <div className="profile-wrapper">
          <div className="profile-photo-wrapper">
            <img src={donikghoul} alt="" className="profile-photo" />
          </div>
          <div className="profile-edition-wrapper">
            <div className="nickname-edit-wrapper">
              <div className="nickname">mishanika2</div>
              <div className="edit">{texts.edit}</div>
              <div className="settings">
                <SettingsSVG />
              </div>
            </div>
            <div className="followers-wrapper">
              <div className="posts">{texts.posts}</div>
              <div className="folllowers">{texts.followers}</div>
              <div className="following">{texts.following}</div>
            </div>
          </div>
        </div>
        <div className="highlights">
          <div className="highlight">
            <div className="highlights-circle"></div>
            <span className="highlights-text">{texts.new}</span>
          </div>
        </div>
      </div>
      <div className="lower-part"></div>
    </main>
  );
};

export default Profile;
