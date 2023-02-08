import React from 'react';
import { texts } from '../../../../constants/textsMenu';
import donikghoul from '../../../../assets/png/donikghoul.png';
import './NotificationPanel.css';

const NotificationPanel = () => {
  return (
    <div className="notifications-block">
      <span>{texts.notifications}</span>
      <div className="this-week notifications-part">
        <span>{texts.thisWeek}</span>
        <div className="person-notifications">
          <img src={donikghoul} alt="profile" className="notification-photo" />

          <div className="notifications-nickname">
            <span>mishanika2</span> &nbsp;
            <span>{texts.startedFollowingYou}</span>
          </div>

          <div className="notifications-following">{texts.following}</div>
        </div>
      </div>
      <div className="this-month notifications-part">
        <span>{texts.thisMonth}</span>
        <div className="person-notifications">
          <img src={donikghoul} alt="profile" className="notification-photo" />

          <div className="notifications-nickname">
            <span>mishanika2</span> &nbsp;
            <span>{texts.startedFollowingYou}</span>
          </div>

          <div className="notifications-following">{texts.following}</div>
        </div>
      </div>
      <div className="earlier notifications-part">
        <span>{texts.earlier}</span>
        <div className="person-notifications">
          <img src={donikghoul} alt="profile" className="notification-photo" />

          <div className="notifications-nickname">
            <span>mishanika2</span> &nbsp;
            <span>{texts.startedFollowingYou}</span>
          </div>

          <div className="notifications-following">{texts.following}</div>
        </div>
      </div>
    </div>
  );
};
export default NotificationPanel;
