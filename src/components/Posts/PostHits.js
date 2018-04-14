import React from 'react';
import { connectInfiniteHits } from 'react-instantsearch/connectors';
import PostCard from './PostCard';
import './PostHits.css';

/**
 * Create the hits loop so we can add our own column and grid classes
 * We're going to group our lessons by their course
 * We'll show a course card and lessons within that card as a list
 */
const InfiniteHits = connectInfiniteHits(({ hits, refine }) => (
  <React.Fragment>
    {/* article grid */}
    <div className="columns is-multiline">

      {/* show an ad if the index is divisible by 12 */}
      {/* otherwise, show the card */}
      {hits.map((hit, index) => (
        <div key={hit.id} className="column is-3">
          {(index !== 0 && index % 10 === 0) ? (
            <div className="is-flex-centered">
              <img alt="Ad" src="https://placeimg.com/300/250/any" className="ad" />
            </div>
          ):(
            <PostCard post={hit} />
          )}
        </div>
      ))}
    </div>

    {/* read more button */}
    <div className="read-more has-text-centered">
      <a onClick={refine} className="button is-large is-link is-outlined is-rounded">MOARE</a>
    </div>
  </React.Fragment>
));

/**
 * The course hits will search the courses index
 */
const PostHits = ({ environment }) => (
  <div className="search-section search-posts">
    <h3 className="title section-title">Latest Posts</h3>
    <InfiniteHits />
  </div>
);

export default PostHits;