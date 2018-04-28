import React from 'react';
import { RefinementList, InstantSearch, Configure } from 'react-instantsearch/dom';

import SearchSection from '../components/SearchSection';
import CourseHits from '../components/Courses/CourseHits';

const Ad = () => (
  <div className="is-flex-centered" style={{ marginTop: '60px' }}>
    <img alt="Ad" src="https://placeimg.com/728/90/any" className="ad" />
  </div>
);

export default (props) => {
  const environment = props.environment || 'local';

  return (
    <InstantSearch
      appId="4KRGXPTF7K"
      apiKey="4594f3b07157188f25b3f5a8a7eba04e"
      indexName="users_production_tmp">

      {/* search box */}
      <SearchSection />
      
      {/* hits */}
      <section className="search-hits">
        <div className="container">
        
          <CourseHits 
            hitsPerPage={6} 
            environment={environment} 
            showHeader={false} />
            
        </div>
      </section>

    </InstantSearch>
  )
}