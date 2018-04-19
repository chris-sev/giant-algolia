import React from 'react';
import { Index, RefinementList } from 'react-instantsearch/dom';
import { connectMenu, connectInfiniteHits } from 'react-instantsearch/connectors';
import PostCard from './PostCard';

// const VirtualMenu = connectMenu(() => null);
// const ScotchSite = () => <VirtualMenu attribute="site" defaultRefinement="scotch"/>;

/**
 * Quick component to render an ad
 */
const Ad = () => (
  <div className="is-flex-centered" style={{ height: '100%' }}>
    <img alt="Ad" src="https://placeimg.com/300/250/any" className="ad" />
  </div>
);

/**
 * Create the hits loop so we can add our own column and grid classes
 * We're going to group our lessons by their course
 * We'll show a course card and lessons within that card as a list
 */
const InfiniteHits = connectInfiniteHits(({ hits, refine }) => (
  <React.Fragment>
    {/* article grid */}
    <div className="columns is-multiline">    
      {/* show an ad if the index is divisible by 9 (and not the first hit) */}
      {/* otherwise, show the card */}
      {hits.map((hit, index) => (
        <div key={hit.id} className="column is-3">
        
          {(index !== 0 && index % 6 === 0) ? (
            <Ad />
          ):( 
            <PostCard post={hit} />
          )}
          
        </div>
      ))}      
    </div>

    {/* read more button */}
    <div className="read-more has-text-centered">
      <a onClick={refine} className="button is-large is-link is-outlined is-rounded">
        MOARE POSTS
      </a>
    </div>
  </React.Fragment>
));

/**
 * The course hits will search the courses index
 */
const PostHits = ({ environment }) => (
  <Index indexName={`content_${environment}`}>
    <div id="posts-section" className="search-section search-posts">
      <div className="section-header">
        <h3 className="title section-title">Latest Posts</h3>
        <RefinementList attribute="difficulty" /> 
      </div>

      {/* <ScotchSite /> */}
      {/* <VirtualMenu attribute="site" defaultRefinement="scotch" /> */}
      <InfiniteHits />
    </div>
  </Index>
);

export default PostHits;