import React from 'react';
import './CardImage.css';
import playButton from '../../icons/play-button.svg';

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
const CardImage = ({ article, showPlayButton, showPremium }) => {
  const link        = article.published_url;
  const hasVideo    = article.video_id || article.duration;
  const isPremium   = !article.is_free;
  const imageStyles = {
    backgroundImage: `url('${article.image_thumbnail || article.image}')`
  };

  return (
    <a className="card-image" href={link}>
      <div className="image is-2by1" style={imageStyles}></div>

      {/* premium */}
      {(showPremium && isPremium) && (
        <span className="free-or-premium tag is-premium is-danger">Premium</span>
      )}

      {/* free */}
      {(showPremium && !isPremium) && (
        <span className="free-or-premium tag is-free is-success">Free</span>
      )}

      {/* the play button */}
      {(showPlayButton && hasVideo) && (
        <div className="play">
          <img src={playButton} alt="Play Icon" /> 
          <span>{convertToMinutes(article.duration)}</span>
        </div>
      )}
    </a>
  )
};

export default CardImage;