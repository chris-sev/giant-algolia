import React from 'react';
import { InstantSearch, Configure } from 'react-instantsearch/dom';
import 'instantsearch.css/themes/reset.css';

const Ad = () => (
  <div className="is-flex-centered" style={{ marginTop: '60px' }}>
    <img alt="Ad" src="https://placeimg.com/728/90/any" className="ad" />
  </div>
);

class Home extends React.Component {
  render() {
    const environment = this.props.environment || 'local';

    return (
      <InstantSearch
        appId="4KRGXPTF7K"
        apiKey="4594f3b07157188f25b3f5a8a7eba04e"
        indexName="users_production">

        {/* <Configure distinct={1} hitsPerPage={12} /> */}

        home page
      </InstantSearch>
    );
  }
}

export default Home;
