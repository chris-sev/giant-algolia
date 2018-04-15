import React from 'react';
import { Index, Configure } from "react-instantsearch/dom";
import { connectHits } from 'react-instantsearch/connectors';
import PostCard from './PostCard';

/**
 * Create the hits loop so we can add our own column and grid classes
 * We're going to group our lessons by their course
 * We'll show a course card and lessons within that card as a list
 */
const Hits = connectHits(({ hits }) => (
  <div className="columns is-multiline">
    {hits.map(hit =>
      <div key={hit.id} className="column is-4">
        <PostCard post={hit} />
      </div>
    )}
  </div>
));

/**
 * The course hits will search the courses index
 */
const PostHits = ({ environment }) => (
  <div id="essential-section" className="search-section search-essential">
    <h3 className="title section-title">Essential Reading</h3>
    
    <Index indexName={`essential_${environment}`}>
      <Configure hitsPerPage={6} />
      <Hits />
    </Index>
  </div>
);

export default PostHits;