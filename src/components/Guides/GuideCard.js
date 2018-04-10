import React from 'react';
import './GuideCard.css';
import angularLogo from '../../angular.png';

const GuideCard = ({ guide }) => {
  const url   = '';
  const title = guide.title;
  const cardStyles = { backgroundImage: `url(${angularLogo})` };

  return (
    <div className="card is-scotch is-guide" style={cardStyles}>

      {/* content */}
      <div className="card-content">

        {/* title */}
        <div>
          <h3 className="subtitle">The ultimate noob guide to learn</h3>
          <h2 className="title"><a href={url}>{title}</a></h2>
        </div>

        {/* call to action */}
        <div>
          <a className="button is-large is-danger is-rounded" url={url}>
            Learn Angular
            <span>The Scotch Way</span>
          </a>
        </div>

      </div>
    </div>
  )
};

export default GuideCard;