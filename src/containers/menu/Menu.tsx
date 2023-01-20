import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Menu.css';
import { texts } from '../../constants/texts';
import { MenuStates } from './types/index';
import donikghoul from '../../assets/png/donikghoul.png';
import MishagramSVG from '../../assets/svg/MishagramSVG';
import HomeSVG from '../../assets/svg/HomeSVG';
import SearchSVG from '../../assets/svg/SearchSVG';
import ExploreSVG from '../../assets/svg/ExploreSVG';
import ReelsSVG from '../../assets/svg/ReelsSVG';
import MessengerSVG from '../../assets/svg/MessengerSVG';
import NotificationsSVG from '../../assets/svg/NotificationsSVG';
import NewPostSVG from '../../assets/svg/NewPostSVG';
import MoreSVG from '../../assets/svg/MoreSVG';

const Menu = () => {
  const [activateTab, setActive] = useState<MenuStates>({
    logo: false,
    home: false,
    search: false,
    explore: false,
    reels: false,
    messenger: false,
    notifications: false,
    newPost: false,
    profile: false,
    more: false,
  });
  /* eslint-disable no-prototype-builtins */
  const activeTab = (e: any) => {
    const tar = activateTab.hasOwnProperty(e.target.classList[0]) // eslint-disable-line
      ? e.target.classList[0]
      : e.target.parentNode.closest('div').classList[0];
    const keys = Object.keys(activateTab);
    const tempActiveTab = activateTab;
    keys.forEach((key) => {
      if (key === tar) {
        tempActiveTab[key as keyof typeof tempActiveTab] = true;
      } else {
        tempActiveTab[key as keyof typeof tempActiveTab] = false;
      }
    });
    setActive({ ...tempActiveTab });
  };
  useEffect(() => {
    const profilePicture = document.querySelector('.profilePicture') as HTMLBaseElement;
    if (activateTab.profile) {
      profilePicture.style.border = '2px solid white';
      profilePicture.style.width = '22px';
      profilePicture.style.height = '22px';
    } else {
      profilePicture.style.border = 'none';
    }
  }, [activateTab]);

  return (
    <>
      <div className="menu disableSelection">
        <Link to="/">
          <div className="logo">
            <MishagramSVG isActive={activateTab.logo} />
          </div>
        </Link>
        <div className="navigation">
          <Link to="/">
            <div className="home" onClick={activeTab}>
              <HomeSVG isActive={activateTab.home} />
              <span>{texts.home}</span>
            </div>
          </Link>

          <Link to="#">
            <div className="search" onClick={activeTab}>
              <SearchSVG isActive={activateTab.search} />
              <span>{texts.search}</span>
            </div>
          </Link>

          <Link to="/explore">
            <div className="explore" onClick={activeTab}>
              <ExploreSVG isActive={activateTab.explore} />
              <span>{texts.explore}</span>
            </div>
          </Link>

          <Link to="/reels">
            <div className="reels" onClick={activeTab}>
              <ReelsSVG isActive={activateTab.reels} />
              <span>{texts.reels}</span>
            </div>
          </Link>

          <Link to="/direct">
            <div className="messenger" onClick={activeTab}>
              <MessengerSVG isActive={activateTab.messenger} />
              <span>{texts.messages}</span>
            </div>
          </Link>

          <Link to="#">
            <div className="notifications" onClick={activeTab}>
              <NotificationsSVG isActive={activateTab.notifications} />
              <span>{texts.notifications}</span>
            </div>
          </Link>

          <Link to="#">
            <div className="newPost" onClick={activeTab}>
              <NewPostSVG isActive={activateTab.newPost} />
              <span>{texts.create}</span>
            </div>
          </Link>
          <Link to="/profile">
            <div className="profile" onClick={activeTab}>
              <img src={donikghoul} alt="profile" className="profilePicture" />
              <span>{texts.profile}</span>
            </div>
          </Link>
        </div>

        <div className="moreSection">
          <div className="more" onClick={activeTab}>
            <MoreSVG isActive={activateTab.more} />
            <span>{texts.more}</span>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Menu;
