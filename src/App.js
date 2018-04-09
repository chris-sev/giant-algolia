import React, { Component } from 'react';
import { InstantSearch, Index, Configure, Hits, SearchBox } from 'react-instantsearch/dom';
import 'instantsearch.css/themes/reset.css';
import 'bulma/css/bulma.css';
import './App.css';

import { connectMenu } from 'react-instantsearch/connectors';

const VirtualMenu = connectMenu(() => null);
const BarTalk     = () => <VirtualMenu attribute="category" defaultRefinement="Bar Talk" />;

class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="4KRGXPTF7K"
        apiKey="4594f3b07157188f25b3f5a8a7eba04e"
        indexName="content_local">

        {/* search hits */}
        <section className="section search-hits">
          <div className="container">

            {/* search box */}
            <div className="search-box">
              <SearchBox />
            </div>

            <div className="tag is-danger">courses</div>
            <Index indexName="courses_local">
              <Configure hitsPerPage={4} />
              <Hits />
            </Index>

            <div className="tag is-warning">essential reading</div>
            <Index indexName="essential_local">
              <Configure hitsPerPage={4} />
              <Hits />
            </Index>

            <div className="tag is-info">latest posts</div>
            <Configure hitsPerPage={8} />
            <Hits />
            
          </div>
        </section>

      </InstantSearch>
    );
  }
}

export default App;
