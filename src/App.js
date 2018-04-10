import React, { Component } from 'react';
import { InstantSearch, Configure, SearchBox } from 'react-instantsearch/dom';
import 'instantsearch.css/themes/reset.css';
import 'bulma/css/bulma.css';
import './App.css';
import './components/Card.css';

import GuideHits from './components/Guides/GuideHits';
import CourseHits from './components/Courses/CourseHits';

class App extends Component {
  render() {
    const { environment } = this.props;

    return (
      <InstantSearch
        appId="4KRGXPTF7K"
        apiKey="4594f3b07157188f25b3f5a8a7eba04e"
        indexName="content_local">

        <Configure distinct={1} />

        {/* search hits */}
        <section className="section search-hits">
          <div className="container">

            {/* search box */}
            <div className="search-section search-box">
              <SearchBox />
            </div>

            {/* guide and ad row */}
            <div className="columns">
              <div className="column">

                {/* guides */}
                <GuideHits environment={environment} />
                
              </div>
              <div className="column is-narrow">

                {/* ad */}
                <img alt="Ad" src="https://placeimg.com/300/250/any" className="ad" />

              </div>
            </div>

            {/* courses */}
            <CourseHits environment={environment} />

            {/* essential */}
            {/* <EssentialHits environment={environment} /> */}

            {/* posts */}
            {/* <div className="search-section search-posts">
              <div className="tag is-info">latest posts</div>

              <Configure hitsPerPage={8} />
              <CardGrid columnClass={'is-3'} />
            </div> */}
            
          </div>
        </section>

      </InstantSearch>
    );
  }
}

export default App;
