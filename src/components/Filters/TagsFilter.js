import React from 'react';
import { RefinementList } from 'react-instantsearch/dom';


const TagsFilter = () => (
  <React.Fragment>
    <RefinementList attribute="category" />

    hello
  </React.Fragment>
);

export default TagsFilter;