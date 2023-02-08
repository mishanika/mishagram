import React from 'react';
import { texts } from '../../../../constants/textsMenu';
import donikghoul from '../../../../assets/png/donikghoul.png';
import './SearchPanel.css';

const SearchPanel = () => {
  return (
    <div className="search-block">
      <div className="search-upper-part">
        <span>{texts.search}</span>
        <div className="search-input">
          <input type="text" className="nickname-search" id="nickname-search" placeholder="Search" />
          <div className="xmark-input"></div>
        </div>
      </div>

      <div className="search-lower-part">
        <div className="recent-clearAll">
          <span>{texts.recent}</span>
          <span>{texts.clearAll}</span>
        </div>
        <div className="found-people">
          <div className="person-search">
            <img src={donikghoul} alt="profile" className="search-photo" />
            <div className="search-nickname-description">
              <div className="search-nickname">mishanika2</div>
              <div className="search-description">description</div>
            </div>
            <div className="xmark-people"></div>
          </div>
          <div className="person-search">
            <img src={donikghoul} alt="profile" className="search-photo" />
            <div className="search-nickname-description">
              <div className="search-nickname">mishanika2</div>
              <div className="search-description">description</div>
            </div>
            <div className="xmark-people"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchPanel;
