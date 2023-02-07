import React from 'react';
import { texts } from '../../../../constants/textsMenu';
import './SearchPanel.css';

const SearchPanel = () => {
  return (
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
  );
};
export default SearchPanel;
