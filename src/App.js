import React, { Component } from 'react';
import { InstantSearch, Hits, SearchBox } from 'react-instantsearch/dom';
import 'instantsearch.css/themes/algolia.css';
import './App.css';

import { connectMenu, connectHits } from 'react-instantsearch/connectors';

const VirtualMenu = connectMenu(() => null);
const Tutorials = () => <VirtualMenu attribute="category" defaultRefinement="Tutorials" />;
const BarTalk = () => <VirtualMenu attribute="category" defaultRefinement="Bar Talk" />;

const CustomHits = connectHits(({ hits }) => {
  return (
    <div>
      <Tutorials />

      {hits.map(hit =>
        <p key={hit.objectID}>
          <Highlight attribute="description" hit={hit} />
        </p>
      )}
    </div>
  );
}


class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="4KRGXPTF7K"
        apiKey="4594f3b07157188f25b3f5a8a7eba04e"
        indexName="content_latest">

        {/* search bar */}
        <div className="search-bar">
          <SearchBox />
        </div>

        {/* search hits */}
        <div className="search-hits">
          <div className="container">
            <Tutorials />
            <BarTalk />


            {/* TODO: maybe use multiple <Index> with refinements */}
            <Hits />
          </div>
        </div>

      </InstantSearch>
    );
  }
}

export default App;
