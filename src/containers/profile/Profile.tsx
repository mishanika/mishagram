import React, { useState } from 'react';
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
import { TabStates } from './types';
import DiscoverPeopleSVG from '../../assets/svg/DiscoverPeopleSVG';
import ArrowSVG from '../../assets/svg/ArrowSVG';
import FeedSVG from '../../assets/svg/FeedSVG';

const Profile = () => {
  const renderFooter = ({ text, url }: IFooter) => (
    <div className="footer-element" onClick={() => window.open(url)} key={url}>
      <a href="#" className="footer-a-profile">
        {text}
      </a>
    </div>
  );
  const [activateTab, setActive] = useState<TabStates>({
    lowerPart: 'posts',
    upperPart: 'posts-upper',
  });
  const activeTab = (e: any) => {
    const activateTabCopy = activateTab;
    const upperTabDisable = document.querySelector(`.${activateTab.upperPart}`) as HTMLBaseElement;
    const upperTabAnable = e.target.closest('div') as HTMLBaseElement;
    const lowerTabDisable = document.querySelector(`.${activateTab.lowerPart}`) as HTMLBaseElement;
    const lowerTabAnable = document.querySelector(`.${upperTabAnable.classList[0].split('-')[0]}`) as HTMLBaseElement;
    const svgDisable = upperTabDisable.children[0] as HTMLBaseElement;
    const svgAnable = upperTabAnable.children[0] as HTMLBaseElement;
    if (window.screen.availWidth > 767) {
      upperTabDisable.style.color = '#737373';
      upperTabDisable.style.borderTop = 'none';
      upperTabAnable.style.color = '#fff';
      upperTabAnable.style.borderTop = '1px solid #fff';
      svgAnable.style.color = '#fff';
      svgDisable.style.color = '#737373';
    } else {
      upperTabDisable.style.color = '#737373';
      upperTabDisable.style.borderTop = 'none';
      upperTabAnable.style.color = '#0a84f6';
      svgAnable.style.color = '#0a84f6';
      svgDisable.style.color = '#737373';
    }
    lowerTabDisable.style.display = 'none';
    lowerTabAnable.style.display = 'flex';

    activateTabCopy.lowerPart = lowerTabAnable.classList[0];
    activateTabCopy.upperPart = upperTabAnable.classList.value;
    setActive({ ...activateTabCopy });
  };

  return (
    <main className="profile-main-section">
      <header className="header">
        <div className="settings">
          <SettingsSVG />
        </div>
        <div className="nickname-header">
          mishanika2 <ArrowSVG />
        </div>
        <DiscoverPeopleSVG />
      </header>
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
              <div className="posts-amount">0 {texts.posts}</div>
              <div className="folllowers">80 {texts.followers}</div>
              <div className="following">110 {texts.following}</div>
            </div>
            <div className="description"></div>
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
      <div className="upper-part-mobile">
        <div className="profile-wrapper-mobile">
          <div className="profile-photo-wrapper-mobile">
            <img src={donikghoul} alt="" className="profile-photo-mobile" />
          </div>
          <div className="profile-edition-wrapper-mobile">
            <div className="nickname">mishanika2</div>
            <div className="edit">{texts.edit}</div>
          </div>
        </div>
        <div className="description">qwerty</div>
        <div className="followers-wrapper-mobile">
          <div className="posts-amount">
            0 <span>{texts.posts}</span>
          </div>
          <div className="folllowers">
            80 <span>{texts.followers}</span>
          </div>
          <div className="following">
            110 <span>{texts.following}</span>
          </div>
        </div>
      </div>
      <div className="lower-part">
        <div className="posts-saved-tagged">
          <div className="posts-saved-tagged-inner">
            <div className="posts-upper" onClick={activeTab}>
              <PostsSVG /> <span>{texts.postS}</span>
            </div>
            <div className="feed-upper" onClick={activeTab}>
              <FeedSVG />
            </div>
            <div className="saved-upper" onClick={activeTab}>
              <SavedSVG /> <span> {texts.saved}</span>
            </div>
            <div className="tagged-upper" onClick={activeTab}>
              <TaggedSVG /> <span> {texts.tagged}</span>
            </div>
          </div>
          <div className="posts lower">
            <div className="share-photo"></div>
            <div className="share-text">
              <span>{texts.sharePhotos}</span>
              <span>{texts.whenYouShare}</span>
              <span>{texts.shareFirstPhoto}</span>
            </div>
          </div>
          <div className="feed lower">
            <div className="share-photo"></div>
            <div className="share-text">
              <span>{texts.sharePhotos}</span>
              <span>{texts.whenYouShare}</span>
              <span>{texts.shareFirstPhoto}</span>
            </div>
          </div>
          <div className="saved lower">
            <div className="pc-saved">
              <div className="pc-saved-text">
                <span>{texts.onlyYouCanSee}</span>
                <span>{texts.newCollection}</span>
              </div>
              <div className="saved-posts"></div>
            </div>
            <div className="mobile-saved">
              <span>{texts.onlyYouCanSee}</span>
              <div className="saved-photo"></div>
              <div className="mobile-saved-text">
                <span>{texts.save}</span>
                <span>{texts.savePhotosAndVideos}</span>
              </div>
              <div className="saved-posts"></div>
            </div>
          </div>
          <div className="tagged lower">
            <div className="photos-of-you"></div>
            <div className="tag-you">
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
