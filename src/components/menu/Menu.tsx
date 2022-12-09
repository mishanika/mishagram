import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    const profilePicture = document.querySelector(
      ".profilePicture"
    ) as HTMLBaseElement;
    if (activateTab.profile) {
      profilePicture.style.border = "2px solid white";
      profilePicture.style.width = "22px";
      profilePicture.style.height = "22px";
    } else {
      profilePicture.style.border = "none";
    }
  }, [activateTab]);

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

        <div className="profile" onClick={activeTab}>
          <img src={donikghoul} alt="profile" className="profilePicture" />
          <span>{texts.text.Profile}</span>
        </div>
      </div>

      <div className="moreSection">
        <div className="more" onClick={activeTab}>
          <MoreSVG isActive={activateTab.more} />
          <span>{texts.text.More}</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
