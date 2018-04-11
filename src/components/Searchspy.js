import React from 'react';
import Scrollspy from 'react-scrollspy';

const Searchspy = () => (
  <Scrollspy 
    items={['guide-section', 'course-section', 'essential-section', 'posts-section']} 
    currentClassName="is-current"
    offset={-150}>
      <li><a href="#guide-section">Code, eat, sleep, loop</a></li>
      <li><a href="#course-section">Courses</a></li>
      <li><a href="#essential-section">Essential Reading</a></li>
      <li><a href="#posts-section">Latest Posts</a></li>
  </Scrollspy>
);

export default Searchspy;