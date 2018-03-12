import React, { Component } from 'react';
import { InstantSearch, Hits } from 'react-instantsearch/dom';
import 'instantsearch.css/themes/algolia.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <InstantSearch
          appId="latency"
          apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
          indexName="bestbuy">

        hello333

      </InstantSearch>
    );
  }
}

export default App;
