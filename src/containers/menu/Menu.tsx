import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Menu.css';
import { texts } from '../../constants/textsMenu';
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

  const [menuState, setMenuState] = useState(false);

  const handleClick = (e: any) => {
    activeTab(e);
    changeMenu(e);
  };
  const changeMenu = (e: any) => {
    const menu = document.querySelector('.menu-inner') as HTMLBaseElement;
    const div = document.createElement('div');
    const rounded = e.target.closest('.search')
      ? e.target.closest('.search')
      : document.querySelector('.notifications');
    let searchNotification =
      rounded.classList[0] == 'search'
        ? (document.querySelector('.search-block') as HTMLBaseElement)
        : (document.querySelector('.notifications-block') as HTMLBaseElement);

    if (!menuState) {
      div.className = 'clickHandler';
      document.querySelector('.menu')?.append(div);
      div.onclick = () => {
        let panel = document.querySelector('.search-block') as HTMLBaseElement;
        if (panel.offsetLeft != 76) {
          panel = document.querySelector('.notifications-block') as HTMLBaseElement;
        }
        panel.style.left = '-401px';
        menu.classList.remove('menuChanged');
        document.querySelector('.clickHandler')?.remove();
        document.querySelector('.radiusedBorder')?.classList.remove('radiusedBorder');
        setMenuState(false);
      };

      menu.classList.add('menuChanged');
      searchNotification.style.left = '76px';
      document.querySelector('.radiusedBorder')?.classList.remove('radiusedBorder');
      rounded.classList.add('radiusedBorder');
      setMenuState(true);
    } else {
      if (!rounded.classList.value.includes('radiusedBorder')) {
        searchNotification.style.left = '76px';
        searchNotification = (
          searchNotification.classList[0] == 'search-block'
            ? document.querySelector('.notifications-block')
            : document.querySelector('.search-block')
        ) as HTMLBaseElement;
        searchNotification.style.left = '-401px';
        document.querySelector('.radiusedBorder')?.classList.remove('radiusedBorder');
        rounded.classList.add('radiusedBorder');
      } else {
        searchNotification.style.left = '-401px';
        menu.classList.remove('menuChanged');
        document.querySelector('.radiusedBorder')?.classList.remove('radiusedBorder');
        document.querySelector('.clickHandler')?.remove();
        setMenuState(false);
      }
    }
  };
  /* eslint-disable no-prototype-builtins */
  const activeTab = (e: any) => {
    const tar = Object.prototype.hasOwnProperty.call(activateTab, e.target.classList[0])
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
      <div className="menu">
        <div className="menu-inner">
          <Link to="/">
            <div className="logo">
              <MishagramSVG logoState={menuState} />
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
              <div className="search" onClick={handleClick}>
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
              <div className="notifications" onClick={handleClick}>
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
      </div>
      <div className="retractable-panels">
        <div className="search-block">
          <div className="search-upper-part"></div>
          <span>{texts.search}</span>
          <input type="text" />
          <div className="search-lower-part">
            <div className="recent-clearAll">
              <span>{texts.recent}</span>
              <span>{texts.clearAll}</span>
            </div>
            <div className="found-people">
              <div className="person">
                <div className="search-photo"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="notifications-block"></div>
      </div>
      <Outlet />
    </>
  );
};

export default Menu;
