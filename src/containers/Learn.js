import React from 'react';
import { InstantSearch, Configure } from 'react-instantsearch/dom';
import 'instantsearch.css/themes/reset.css';

import SearchSection from '../components/SearchSection';
import GuideSection from '../components/Guides/GuideSection';
import CourseHits from '../components/Courses/CourseHits';
import EssentialHits from '../components/Posts/EssentialHits';
import PostHits from '../components/Posts/PostHits';
import TagsFilter from '../components/Filters/TagsFilter';

const Ad = () => (
  <div className="is-flex-centered" style={{ marginTop: '30px', marginBottom: '50px' }}>
    <img alt="Ad" src="https://placeimg.com/728/90/any" className="ad" />
  </div>
);

const Learn = (props) => {
  const environment = props.environment || 'local';

  return (
    <InstantSearch
      appId="4KRGXPTF7K"
      apiKey="4594f3b07157188f25b3f5a8a7eba04e"
      indexName="users_production">

      <Configure distinct={1} hitsPerPage={12} />

      {/* search box */}
      <SearchSection />

      {/* search hits */}
      <section className="search-hits is-large">
        
        {/* <TagsFilter /> */}

        <div className="container">
          {/* guide section is a single guide + ad */}
          <GuideSection environment={environment} />
          <CourseHits environment={environment} showHeader={true} />
          <EssentialHits environment={environment} />
          <Ad />
          <PostHits environment={environment} />
        </div>
      </section>

    </InstantSearch>
  )
}

export default Learn;