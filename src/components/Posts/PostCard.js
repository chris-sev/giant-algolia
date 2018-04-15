import React from 'react';
import CardImage from '../Cards/CardImage';
import './PostCard.css';
import eyeIcon from '../../icons/eye.svg';
import commentIcon from '../../icons/comment.svg';

const PostCard = ({ post }) => {
  const { title, author, pageviews } = post;
  const link         = post.published_url;
  const commentCount = post.comment_count;

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
      <div className="card-footer">
        {/* author */}
        <div>
          <a href={`/@$[author.username}`}>{author.name}</a>
        </div>

        {/* pageviews + comments */}
        <div>
          <span>
            <img src={eyeIcon} alt="Icon" width="20" height="10" />
            {pageviews.toLocaleString()}
          </span>
          <span>
            <img src={commentIcon} alt="Icon" width="20" height="10" />
            {commentCount.toLocaleString()}
          </span>
        </div> 
      </div>
      
    </div>
  )
};

export default PostCard;