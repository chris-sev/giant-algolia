import React from 'react';
import { Index, Configure } from "react-instantsearch/dom";
import { connectInfiniteHits } from 'react-instantsearch/connectors';
import CourseCard from './CourseCard';
import SearchHeader from '../SearchHeader';

/**
 * We want to group lessons by course
 * ex [
 *  {
 *    course: { id: 1, title: 'Angular', image: '' },
 *    lessons: [...groupedLessonsGoHere]
 *  }
 *  {...}
 * ]
 */
const groupByCourse = (hits) => {
  return hits.reduce((newGroupedArray, hit) => {
    // check if the course is already in the new grouped array
    const index = newGroupedArray.findIndex(group => group.id === hit.course.id);
    const isCourseInArray = (index === -1) ? false : true;

    // if already in the array, push into the objects lesson array
    if (isCourseInArray) newGroupedArray[index].lessons.push(hit);
    else                 newGroupedArray.push({ ...hit.course, lessons: [hit] }); 

    return newGroupedArray;
  }, []);
}

/**
 * Create the hits loop so we can add our own column and grid classes
 * We're going to group our lessons by their course
 * We'll show a course card and lessons within that card as a list
 */
const Hits = connectInfiniteHits(({ hits, refine }) => {
  const courses = groupByCourse(hits);

  return (
    <React.Fragment>
      <div className="columns is-multiline">
        {courses.map(course =>
          <div key={course.id} className="column is-4">
            <CourseCard course={course} />
          </div>
        )}
      </div>

      {/* read more button */}
      <div className="read-more has-text-centered">
        <a onClick={refine} className="button is-large is-link is-outlined is-rounded">
          MOARE COURSES
        </a>
      </div>
    </React.Fragment>
  )
});

/**
 * The course hits will search the courses index
 */
const CourseHits = (props) => {
  const { environment, showHeader } = props;
  const hitsPerPage = props.hitsPerPage || 3;

  return (
    <div id="course-section" className="search-section search-courses">
      {showHeader && <SearchHeader text={'Courses'} />}

      {/* show the courses index */}
      <Index indexName={`lessons_${environment}`}>
        <Configure hitsPerPage={hitsPerPage} distinct={3} />

        {/* loop over the hits */}
        <Hits />
      </Index>
    </div>
  )
};

export default CourseHits;