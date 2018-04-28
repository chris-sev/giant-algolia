import React from 'react';
import './CardImage.css';
import LazyLoad from 'react-lazyload';

/**
 * The main card image for all our course/post cards
 */
const CardImage = ({ article, showPremium }) => {
  const link        = article.published_url || article.link;
  const isPremium   = !article.is_free;
  const imageStyles = {
    backgroundImage: `url('${article.image_thumbnail || article.image}')`
  };

  return (
    <LazyLoad height={200} offset={200}>
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
      </a>
    </LazyLoad>
  )
};

export default CardImage;