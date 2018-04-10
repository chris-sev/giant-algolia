import React from 'react';
import './CourseCardLessons.css';

/**
 * Quick way to convert seconds to minutes
 */
const convertToMinutes = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = (time - minutes * 60).toString().padStart(2, '0');

  return `${minutes}:${seconds}`;
};

/**
 * The lesson that we'll loop over
 */
const Lesson = ({ lesson }) => {
  console.log(lesson);
  const { title } = lesson;
  const url       = lesson.published_url;
  const isFree    = lesson.is_free;
  const duration  = convertToMinutes(lesson.duration);

  return (
    <li>
      <a href={url} className="lesson-item">
        {/* lock icon */}
        <div className="lock">
          <span role="img">{isFree ? '😃' : '🔐'}</span>
        </div>

        {/* title */}
        <h3 className="title">{title}</h3>

        {/* duration and play button */}
        <div className="actions">
          <span>{duration}</span>
        </div>
      </a>
    </li>
  );
};

/**
 * 
 */
const CourseCardLessons = ({ lessons }) => (
  <ul className="lesson-list">
    {lessons.map(lesson => (
      <Lesson key={lesson.id} lesson={lesson} /> 
    ))}
  </ul>
);

export default CourseCardLessons;