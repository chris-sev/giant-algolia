import React from 'react';
import { Index, Configure, ScrollTo } from "react-instantsearch/dom";
import { connectHits } from 'react-instantsearch/connectors';
import GuideCard from './GuideCard';

/**
 * Create the hits loop so we can add our own column and grid classes
 */
const Hits = connectHits(({ hits }) => (
  <React.Fragment>  
    {hits.map(hit => <GuideCard key={hit.id} guide={hit} />)}
  </React.Fragment>
));

/**
 * Render the guides search from the guides Algolia index
 */
const GuideHits = ({ environment }) => {
  const index = `guides_${environment}`;
  
  return (
    <div className="search-section search-guides">
      <ScrollTo scrollOn="page">
        <Index indexName={index}>
          <Configure hitsPerPage={1} />
          
            <Hits />
          
        </Index>
      </ScrollTo>
    </div>
  );
};

export default GuideHits;