import React, { Component } from 'react';
import { InstantSearch, Configure } from 'react-instantsearch/dom';

import 'instantsearch.css/themes/reset.css';
import 'bulma/css/bulma.css';
import './App.css';
import './components/Cards/Card.css';

import SearchSection from './components/SearchSection';
import GuideSection from './components/Guides/GuideSection';
import CourseHits from './components/Courses/CourseHits';
import EssentialHits from './components/Posts/EssentialHits';
import PostHits from './components/Posts/PostHits';

const Ad = () => (
  <div className="is-flex-centered" style={{ marginTop: '60px' }}>
    <img alt="Ad" src="https://placeimg.com/728/90/any" className="ad" />
  </div>
);

class App extends Component {
  render() {
    const { environment } = this.props;

    return (
      <InstantSearch
        appId="4KRGXPTF7K"
        apiKey="4594f3b07157188f25b3f5a8a7eba04e"
        indexName="content_local">

        <Configure distinct={1} hitsPerPage={12} />

        {/* search box */}
        <SearchSection />

        {/* search hits */}
        <section className="section search-hits">
          <div className="container">

            {/* guide section is a single guide + ad */}
            <GuideSection environment={environment} />
            <CourseHits environment={environment} />
            <EssentialHits environment={environment} />
            <Ad />
            <PostHits environment={environment} />
            
          </div>
        </section>

      </InstantSearch>
    );
  }
}

export default App;
