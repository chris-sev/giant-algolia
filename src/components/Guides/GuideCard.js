import React from 'react';

const GuideCard = ({ hit }) => {
  const url   = '';
  const title = hit.title;

  return (
    <div className="card scotch-card">

      {/* content */}
      <div className="card-content">

        {/* title */}
        <h2 className="title is-4"><a href={url}>{title}</a></h2>

      </div>
    </div>
  )
};

export default GuideCard;