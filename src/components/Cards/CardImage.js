import React from 'react';
import './CardImage.css';

const CardImage = ({ article, showPlayButton }) => {
  const url         = article.published_url;
  const imageStyles = {
    backgroundImage: `url('${article.image_thumbnail || article.image}')`
  };

  return (
    <a className="card-image" href={url}>
      <div className="image is-2by1" style={imageStyles}></div>

      {/* the play button */}
      {showPlayButton && (
        <div className="play">play button</div>
      )}
    </a>
  )
};

export default CardImage;