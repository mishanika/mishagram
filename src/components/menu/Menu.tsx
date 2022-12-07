import React, { useState } from "react";
import "./Menu.css";
import * as texts from "../../constants/texts";
import donikghoul from "../../assets/images/png/donikghoul.png";
import MishagramSVG from "../../assets/images/MishagramSVG";
import HomeSVG from "../../assets/images/HomeSVG";
import SearchSVG from "../../assets/images/SearchSVG";
import ExploreSVG from "../../assets/images/ExploreSVG";
import ReelsSVG from "../../assets/images/ReelsSVG";
import MessengerSVG from "../../assets/images/MessengerSVG";
import NotificationsSVG from "../../assets/images/NotificationsSVG";
import NewPostSVG from "../../assets/images/NewPostSVG";
import MoreSVG from "../../assets/images/MoreSVG";

interface MenuStates {
  logo: boolean;
  home: boolean;
  search: boolean;
  explore: boolean;
  reels: boolean;
  messenger: boolean;
  notifications: boolean;
  newPost: boolean;
  profile: boolean;
  more: boolean;
}

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

  const activeTab = (e: any) => {
    const tar = activateTab.hasOwnProperty(e.target.classList[0])
      ? e.target.classList[0]
      : e.target.parentNode.closest("div").classList[0];
    console.log(tar);
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

  return (
    <div className="menu disableSelection">
      <div className="logo">
        <MishagramSVG isActive={activateTab.logo} />
      </div>
      <div className="navigation">
        <div className="home" onClick={activeTab}>
          <HomeSVG isActive={activateTab.home} />
          <span>{texts.text.Home}</span>
        </div>

        <div className="search" onClick={activeTab}>
          <SearchSVG isActive={activateTab.search} />
          <span>{texts.text.Search}</span>
        </div>

        <div className="explore" onClick={activeTab}>
          <ExploreSVG isActive={activateTab.explore} />
          <span>{texts.text.Explore}</span>
        </div>

        <div className="reels" onClick={activeTab}>
          <ReelsSVG isActive={activateTab.reels} />
          <span>{texts.text.Reels}</span>
        </div>

        <div className="messenger" onClick={activeTab}>
          <MessengerSVG isActive={activateTab.messenger} />
          <span>{texts.text.Messages}</span>
        </div>

        <div className="notifications" onClick={activeTab}>
          <NotificationsSVG isActive={activateTab.notifications} />
          <span>{texts.text.Notifications}</span>
        </div>

        <div className="newPost" onClick={activeTab}>
          <NewPostSVG isActive={activateTab.newPost} />
          <span>{texts.text.Create}</span>
        </div>

        <div className="profile">
          <img src={donikghoul} alt="profile" className="donikghoul" />
          <span>{texts.text.Profile}</span>
        </div>
      </div>

      <div className="moreSection">
        <div className="more">
          <MoreSVG />
          <span>{texts.text.More}</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
