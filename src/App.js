import React, { Component } from 'react';
import { InstantSearch, Index, Hits, SearchBox } from 'react-instantsearch/dom';
import 'instantsearch.css/themes/algolia.css';
import 'bulma/css/bulma.css';
import './App.css';

import { connectMenu, connectHits } from 'react-instantsearch/connectors';

const VirtualMenu = connectMenu(() => null);
const Tutorials = () => <VirtualMenu attribute="category" defaultRefinement="Tutorials" />;
const BarTalk   = () => <VirtualMenu attribute="category" defaultRefinement="Bar Talk" />;

class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="4KRGXPTF7K"
        apiKey="4594f3b07157188f25b3f5a8a7eba04e"
        indexName="content_local">

        {/* search bar */}
        <div className="search-bar">
          <SearchBox />
        </div>

        {/* search hits */}
        <div className="search-hits">
          <div className="container">

            tutorials
            <Index indexName="content_local">
              <Tutorials />
              <Hits />
            </Index>

            bar talk
            <Index indexName="content_local">
              <BarTalk />
              <Hits />
            </Index>


            {/* TODO: maybe use multiple <Index> with refinements */}
            {/* <Hits /> */}
          </div>
        </div>

      </InstantSearch>
    );
  }
}

export default App;
