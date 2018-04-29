import React from 'react';
import debounce from 'lodash/debounce';
import { connectSearchBox } from 'react-instantsearch/connectors';

export default connectSearchBox(({ currentRefinement, refine }) => {
  const debouncedSearch = debounce(e => refine(e.target.value), 200);

  const onChange = e => {
    e.persist();
    debouncedSearch(e, e.eventTarget);
  };

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
    onChange={onChange} />
});