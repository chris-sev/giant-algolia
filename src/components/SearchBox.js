import React from 'react';
import debounce from 'lodash/debounce';
import { connectSearchBox } from 'react-instantsearch/connectors';

export default connectSearchBox(({ refine }) => {
  const debouncedSearch = debounce(e => refine(e.target.value), 200);

  const getParameterByName = name => {
      const url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  };

  const onChange = e => {
    e.persist();
    debouncedSearch(e, e.eventTarget);
  };

  // was the search box already typed into?
  const currentSearch = getParameterByName('q');

  return <input 
    placeholder="Search here..." 
    type="search"
    autoComplete="off" 
    autoCorrect="off" 
    autoCapitalize="off" 
    spellCheck="false" 
    required="" 
    maxLength="512" 
    className="ais-SearchBox-input"
    onChange={onChange}
    value={currentSearch} />
});