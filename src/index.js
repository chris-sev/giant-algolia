import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const reactSearch = document.getElementById('react-search');
ReactDOM.render(
  <App {...reactSearch.dataset} />, 
  reactSearch
);

registerServiceWorker();