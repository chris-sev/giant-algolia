import React, { Component } from 'react';
import { 
  InstantSearch, 
  Configure, 
  Pagination
} from 'react-instantsearch/dom';

import 'instantsearch.css/themes/reset.css';
import 'bulma/css/bulma.css';
import './App.css';
import './components/Cards/Card.css';

import SearchSection from './components/SearchSection';
import GuideSection from './components/Guides/GuideSection';
import CourseHits from './components/Courses/CourseHits';
import EssentialHits from './components/Posts/EssentialHits';
import PostHits from './components/Posts/PostHits';

class App extends Component {
  render() {
    const { environment } = this.props;

    return (
      <InstantSearch
        appId="4KRGXPTF7K"
        apiKey="4594f3b07157188f25b3f5a8a7eba04e"
        indexName="content_local">

        <Configure distinct={1} hitsPerPage={6} />

        {/* search box */}
        <SearchSection />

        {/* search hits */}
        <section className="section search-hits">
          <div className="container">

            {/* guide and ad row */}
            <div id="guide-section">
              <GuideSection environment={environment} />
            </div>

            {/* courses with lessons inside of them */}
            <div id="course-section">
              <CourseHits environment={environment} />
            </div>

            {/* essential */}
            <div id="essential-section">
              <EssentialHits environment={environment} />
            </div>

            {/* posts */}
            <div id="posts-section">
              <PostHits environment={environment} />
            </div>

            <Pagination />
            
          </div>
        </section>

      </InstantSearch>
    );
  }
}

export default App;
