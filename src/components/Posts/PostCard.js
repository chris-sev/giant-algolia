import React from 'react';
import CardImage from '../CardImage';

const PostCard = ({ post }) => {
  const url = '';
  const title = post.title || '';

  return (
    <div className="card is-scotch">    
      {/* image */}
      <CardImage article={post} />

      {/* content */}
      <div className="card-content">

        {/* title */}
        <h2 className="title is-4"><a href={url}>{title}</a></h2>

      </div>

      {/* footer */}
    </div>
  )
};

export default PostCard;