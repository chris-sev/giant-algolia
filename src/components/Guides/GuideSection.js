import React from 'react';
import GuideHits from './GuideHits';

const GuideSection = ({ environment }) => (
  <div id="guide-section" className="search-section search-guides columns">
    <div className="column">
      {/* guides */}
      <GuideHits environment={environment} />
    </div>
    <div className="column is-narrow">
      {/* ad */}
      <img alt="Ad" src="https://placeimg.com/300/250/any" className="ad" />
    </div>
  </div>
);

export default GuideSection;