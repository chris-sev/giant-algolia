import React from 'react';
import './CardImage.css';

/**
 * Quick way to convert seconds to minutes
 */
const convertToMinutes = (time) => {
  var date = new Date(null);
  date.setSeconds(time);
  return date.toISOString().substr(11, 8);
};

/**
 * The main card image for all our course/post cards
 */
const CardImage = ({ article, showPlayButton }) => {
  console.log(article);
  const url         = article.published_url;
  const imageStyles = {
    backgroundImage: `url('${article.image_thumbnail || article.image}')`
  };

  return (
    <a className="card-image" href={url}>
      <div className="image is-2by1" style={imageStyles}></div>

      {/* the play button */}
      {showPlayButton && article.duration && (
        <div className="play">
          {convertToMinutes(article.duration)}
        </div>
      )}
    </a>
  )
};

export default CardImage;