import React from 'react';
import SearchBox from './SearchBox';
import Searchspy from './Searchspy';
import './SearchSection.css';

export default () => (
  <div className="search-section search-box">
    <div className="container">
      <SearchBox />

      {/* <div className="search-box-extras">
        <Searchspy />
      </div> */}
    </div>
  </div>
);