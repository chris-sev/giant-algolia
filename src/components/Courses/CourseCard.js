import React from 'react';
import CardImage from '../CardImage';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  const { title, link, lessons } = course;

  return (
    <div className="card is-scotch">
      {/* image */}
      <CardImage article={course} showPlayButton={true} />

      {/* content */}
      <div className="card-content">

        {/* title */}
        <h2 className="title"><a href={link}>{title}</a></h2>

      </div>

      {/* footer */}
      <CourseCardLessons lessons={lessons} />
      {/* <CardFooter /> */}
    </div>
  )
};

export default CourseCard;