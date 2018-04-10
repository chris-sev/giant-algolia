/**
 * We will be searching the lessons index
 * Once we get our results, we'll group them by their course id
 * We'll display a course card with a lesson list inside of it
 */

import React from 'react';
import { Index, Configure } from "react-instantsearch/dom";
import { connectHits } from 'react-instantsearch/connectors';
import CourseCard from '../Courses/CourseCard';

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
    const isCourseInArray = (index == -1) ? false : true;

    // if already in the array, push into the objects lesson array
    if (isCourseInArray) {
      newGroupedArray[index].lessons.push(hit);
    } else {
      newGroupedArray.push({ ...hit.course, lessons: [hit] }); 
    }

    return newGroupedArray;
  }, []);
}

/**
 * Create the hits loop so we can add our own column and grid classes
 * We're going to group our lessons by their course
 * We'll show a course card and lessons within that card as a list
 */
const Hits = connectHits(({ hits }) => {
  const courses = groupByCourse(hits);

  return (
    <div className="columns is-multiline">
      {courses.map(course =>
        <div key={course.id} className="column is-4">
          <CourseCard course={course} />
        </div>
      )}
    </div>
  )
});

/**
 * The course hits will search the courses index
 */
const LessonHits = ({ environment }) => (
  <div className="search-section search-courses">
    <div className="tag is-danger">courses</div>

    {/* show the courses index */}
    <Index indexName={`lessons_${environment}`}>
      <Configure hitsPerPage={3} distinct={3} />

      {/* loop over the hits */}
      <Hits />
    </Index>
  </div>
);

export default LessonHits;