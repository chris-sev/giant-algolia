import React from 'react';
import { Index, Configure } from "react-instantsearch/dom";
import { connectHits } from 'react-instantsearch/connectors';
import GuideCard from './GuideCard';

/**
 * Create the hits loop so we can add our own column and grid classes
 */
const Hits = connectHits(({ hits }) => (
  <React.Fragment>  
    {hits.map(hit => <GuideCard hit={hit} />)}
  </React.Fragment>
));

const GuideHits = () => (
  <div className="search-section search-guides">
    <Index indexName="guides_local">
      <Configure hitsPerPage={1} />
      <Hits />
    </Index>
  </div>
);

export default GuideHits;