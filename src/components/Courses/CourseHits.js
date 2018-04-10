import React from 'react';
import { Index, Configure } from "react-instantsearch/dom";
import { connectHits } from 'react-instantsearch/connectors';
import CourseCard from './CourseCard';

/**
 * Create the hits loop so we can add our own column and grid classes
 */
const Hits = connectHits(({ hits }) => (
  <div className="columns is-multiline">
    {hits.map(hit =>
      <div key={hit.id} className="column is-4">
        <CourseCard hit={hit} />
      </div>
    )}
  </div>
));

/**
 * The course hits will search the courses index
 */
const CourseHits = ({ environment }) => (
  <div className="search-section search-courses">
    <div className="tag is-danger">courses</div>

    {/* show the courses index */}
    <Index indexName={`courses_${environment}`}>
      <Configure hitsPerPage={3} />

      {/* loop over the hits */}
      <Hits />
    </Index>
  </div>
);

export default CourseHits;