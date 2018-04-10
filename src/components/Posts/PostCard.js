import React from 'react';
import CardImage from './CardImage';
import CardFooter from './CardFooter';

const PostCard = ({ hit }) => {
  const url = '';

  return (
    <div className="card scotch-card">    
      {/* image */}
      <CardImage />

      {/* content */}
      <div className="card-content">

        {/* title */}
        <h2 className="title is-4"><a href={url}>{hit.title}</a></h2>

      </div>

      {/* footer */}
      <CardFooter />
    </div>
  )
};

export default PostCard;