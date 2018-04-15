import React from 'react';
import { SearchBox } from 'react-instantsearch/dom';
import Searchspy from './Searchspy';
import './SearchSection.css';

const SearchSection = () => (
  <div className="search-section search-box">
    <div className="container">
      <SearchBox />

      <div className="search-box-extras">
        <Searchspy />
      </div>
    </div>
  </div>
);

export default SearchSection;