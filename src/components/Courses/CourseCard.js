import React from 'react';
import CardImage from '../Cards/CardImage';
import CourseCardLessons from './CourseCardLessons';
import './CourseCard.css';

/**
 * Quick way to convert seconds to minutes
 */
const convertToHours = (seconds) => {
  return `${(seconds / 3600).toFixed(2)} hours`;
};

const CourseCard = ({ course }) => {
  const { title, link, lessons } = course;
  const lessonCount = course.lesson_count;
  const hasVideo    = course.video_id || (course.duration > 0);

  return (
    <div className="card is-scotch is-course">
      {/* image */}
      <CardImage article={course} showPlayButton={true} showPremium={true} />

      {/* content */}
      <div className="card-content">
        {/* title */}
        <h2 className="title"><a href={link}>{title}</a></h2>
        <p>
          <span>{lessonCount} {(lessonCount === 1) ? 'Lesson' : 'Lessons'}</span>
          <span>{hasVideo && convertToHours(course.duration)}</span>
        </p>
      </div>

      {/* lesson list */}
      {lessons && <CourseCardLessons lessons={lessons} /> }

      {/* footer */}
      <div className="card-footer">
        <p>{lessonCount - 3} more lessons...</p>
        <a className="button is-outlined is-info is-rounded" href={link}>Start Course</a>
      </div>
    </div>
  )
};

export default CourseCard;