import React from 'react';
import eyeIcon from '../../icons/eye.svg';
import commentIcon from '../../icons/comment.svg';
import bookmarkIcon from '../../icons/bookmark.svg';

export default ({ post }) => {
  const { author, pageviews } = post;
  const commentCount = post.comment_count;

  return (
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
        <span>
          <a><img src={bookmarkIcon} alt="Icon" width="20" height="10" /></a>
        </span>
      </div>
    </div>
  )
}