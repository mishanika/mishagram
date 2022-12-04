import React from "react";
import useState from "react";
import "./Menu.css";
import donikghoul from "../../components/imgs/donikghoul.png";
import MishagramSVG from "../../assets/images/MishagramSVG";
import HomeSVG from "../../assets/images/HomeSVG";
import SearchSVG from "../../assets/images/SearchSVG";
import ExploreSVG from "../../assets/images/ExploreSVG";
import ReelsSVG from "../../assets/images/ReelsSVG";
import MessengerSVG from "../../assets/images/MessengerSVG";
import NotificationsSVG from "../../assets/images/NotificationsSVG";
import NewPostSVG from "../../assets/images/NewPostSVG";
import MoreSVG from "../../assets/images/MoreSVG";

const Menu = () => {
  const [active, setActive] = React.useState<string | null>(null);
  const activeTab = (e: any) => {
    let elementTemp: HTMLElement | null;

    if (active && active != "Notifications") {
      elementTemp = document.querySelector(`.${active}`)?.firstChild
        ?.firstChild as HTMLElement;
      elementTemp.style.fill = "#000000";
      elementTemp.style.color = "#ffffff";
    }
    let target = e.target.parentNode.closest("div");
    if (target.classList[0] == "navigation") {
      target = target.firstChild;
    }
    target.firstChild.firstChild.style.fill = "#ffffff";

    setActive((prev) => target.classList[0]);
  };

  return (
    <div className="menu disableSelection">
      <div className="logo">
        {" "}
        <MishagramSVG />{" "}
      </div>
      <div className="navigation">
        <div className="Home" onClick={activeTab}>
          <HomeSVG />
          <span>Home</span>
        </div>

        <div className="Search" onClick={activeTab}>
          <SearchSVG />
          <span>Search</span>
        </div>

        <div className="Explore" onClick={activeTab}>
          <ExploreSVG />
          <span>Explore</span>
        </div>

        <div className="Reels" onClick={activeTab}>
          <ReelsSVG />
          <span>Reels</span>
        </div>

        <div className="Messenger" onClick={activeTab}>
          <MessengerSVG />
          <span>Messages</span>
        </div>

        <div className="Notifications" onClick={activeTab}>
          <NotificationsSVG />
          <span>Notifications</span>
        </div>

        <div className="NewPost" onClick={activeTab}>
          <NewPostSVG />
          <span>Create</span>
        </div>

        <div className="profile">
          <img src={donikghoul} alt="profile" className="donikghoul" />
          <span>Profile</span>
        </div>
      </div>

      <div className="moreSection">
        <div className="moreSvg">
          <MoreSVG />
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
