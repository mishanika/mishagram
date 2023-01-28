import React from 'react';
import './Profile.css';
import { texts } from '../../constants/textsProfile';
import donikghoul from '../../assets/png/donikghoul.png';
import SettingsSVG from '../../assets/svg/SettingsSVG';
import PlusSVG from '../../assets/svg/PlusSVG';
import SavedSVG from '../../assets/svg/SavedSVG';
import PostsSVG from '../../assets/svg/PostsSVG';
import TaggedSVG from '../../assets/svg/TaggedSVG';
import { IFooter } from '../login/types';
import { textsFooter } from '../../constants/textsLoginFooter';
import { textsMain } from '../../constants/textsLoginMain';

const Profile = () => {
  const renderFooter = ({ text, url }: IFooter) => (
    <div className="footer-element" onClick={() => window.open(url)}>
      <a href="#" className="footer-a-profile">
        {text}
      </a>
    </div>
  );
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
              <div className="posts">0 {texts.posts}</div>
              <div className="folllowers">80 {texts.followers}</div>
              <div className="following">110 {texts.following}</div>
            </div>
          </div>
        </div>
        <div className="highlights">
          <div className="highlight">
            <div className="highlights-circle">
              <PlusSVG />
            </div>
            <span className="highlights-text">{texts.new}</span>
          </div>
        </div>
      </div>
      <div className="lower-part">
        <div className="posts-saved-tagged">
          <div className="posts-saved-tagged-inner">
            <div className="posted-posts-upper">
              <PostsSVG /> {texts.postS}
            </div>
            <div className="saved-upper">
              <SavedSVG /> {texts.saved}
            </div>
            <div className="tagged-upper">
              <TaggedSVG /> {texts.tagged}
            </div>
          </div>
          <div className="posted-posts-lower">
            <div className="share-photo"></div>
            <div className="share-photo-text">
              <span>{texts.sharePhotos}</span>
              <span>{texts.whenYouShare}</span>
              <span>{texts.shareFirstPhoto}</span>
            </div>
          </div>
          <div className="saved-lower">
            <span>{texts.onlyYouCanSee}</span>
            <div className="saved-posts"></div>
            <span>{texts.newCollection}</span>
          </div>
          <div className="tagged-lower">
            <div className="photos-of-you"></div>
            <div className="share-photo-text">
              <span>{texts.photosOfYou}</span>
              <span>{texts.whenPeopleTagYou}</span>
            </div>
          </div>
        </div>
        <div className="footer-profile">
          <div className="footer-upper">{textsFooter.map(renderFooter)}</div>
          <div className="footer-lower-profile">
            <div className="language">{textsMain.language} (UK)</div>
            <div className="rights">{textsMain.rights}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
