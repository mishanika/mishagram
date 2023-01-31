import React from 'react';
import './Direct.css';
import { useAppSelector } from '../../hooks/hooks';
import { selectName } from '../../redux/reducers/app.slice';
import ChevronDownSVG from '../../assets/svg/ChevronDownSVG';
import NewDirectMessageSVG from '../../assets/svg/NewDirectMessageSVG';
const Direct = () => {
  const name = useAppSelector(selectName);

  return (
    <div className="main-container">
      <div className="direct-container">
        <div className="users-panel">
          <div className="user-panel">
            <div className="user-name">
              <button>
                <span>{name}</span>
                <span>
                  <ChevronDownSVG />
                </span>
              </button>
            </div>
            <div className="new-message">
              <button>
                <NewDirectMessageSVG />
              </button>
            </div>
          </div>
          <div className="other-users-panel scroll-container"></div>
        </div>
        <div className="message-panel"></div>
      </div>
    </div>
  );
};

export default Direct;
