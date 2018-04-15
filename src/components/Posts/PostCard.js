import React from 'react';
import CardImage from '../Cards/CardImage';
import PostCardFooter from './PostCardFooter';
import './PostCard.css';

const PostCard = ({ post }) => {
  const { title } = post;
  const link      = post.published_url;

  return (
    <div className="card is-scotch is-post">    
      {/* image -------------------------------------- */}
      <CardImage article={post} />

      {/* content -------------------------------------- */}
      <div className="card-content">
        {/* title */}
        <h2 className="title is-4"><a href={link}>{title}</a></h2>
      </div>

      {/* footer -------------------------------------- */}
      <PostCardFooter post={post} />
      
    </div>
  )
};

export default PostCard;