import React from 'react';

const CourseCard = ({ hit }) => {
  const url   = '';
  const title = hit.title;

  return (
    <div className="card is-scotch">    
      {/* image */}
      {/* <CardImage /> */}

      {/* content */}
      <div className="card-content">

        {/* title */}
        <h2 className="title"><a href={url}>{title}</a></h2>

      </div>

      {/* footer */}
      {/* <CardFooter /> */}
    </div>
  )
};

export default CourseCard;