import React from 'react';
import CardImage from '../Cards/CardImage';
import './PostCard.css';

const PostCard = ({ post }) => {
  const { title, author, pageviews } = post;
  const link         = post.published_url;
  const commentCount = post.comment_count;

  return (
    <div className="card is-scotch is-post">    
      {/* image */}
      <CardImage article={post} />

      {/* content */}
      <div className="card-content">

        {/* title */}
        <h2 className="title is-4"><a href={link}>{title}</a></h2>

      </div>

      {/* footer */}
      <div className="card-footer">
        {/* author */}
        <div>
          {author.name}
        </div>

        {/* pageviews + comments */}
        <div>
          <span>{pageviews}</span>
          <span>{commentCount}</span>
        </div> 
      </div>
    </div>
  )
};

export default PostCard;