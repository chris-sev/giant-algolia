import React from 'react';
import SearchBox from 'react-instantsearch/dom';
import Searchspy from './Searchspy';

const SearchSection = () => (
  <div className="section search-section search-box">
    <div className="container">
      <SearchBox />

      <div className="search-box-extras">
        {/* <Searchspy /> */}
      </div>
    </div>
  </div>
);

export default SearchSection;