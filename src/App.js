import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import NavSearchBox from './components/NavSearchBox';

import Home from './containers/Home';
import Guides from './containers/Guides';
import Courses from './containers/Courses';
import Posts from './containers/Posts';
import Learn from './containers/Learn';
import Authors from './containers/Authors';

import logo from './logo.svg';

import 'bulma/css/bulma.css';
import './App.css';
import './Header.css';
import './components/Cards/Card.css';

const App = () => (
  <Router>
    <React.Fragment>
      <nav id="scotch-nav" className="navbar is-dark">
      <div className="container is-fluid">
        
        {/* logo */}
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img className="scotch-logo" src={logo} width="80" />
            <span class="logo-text">Scotch</span>
          </Link>
        </div>

        {/* menu */}
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/learn">Learn</Link>
            <Link className="navbar-item" to="/guides">Guides</Link>
            <Link className="navbar-item" to="/courses">Courses</Link>
            <Link className="navbar-item" to="/posts">Posts</Link>
          </div>
          <div className="navbar-end">
            <NavSearchBox />
            <Link className="navbar-item" to="/authors">Authors</Link>
          </div>
        </div>

      </div>
      </nav>

      {/* define our routes */}
      <Route exact path="/" component={Home} />
      <Route path="/guides" component={Guides} />
      <Route path="/courses" component={Courses} />
      <Route path="/posts" component={Posts} />
      <Route path="/learn" component={Learn} />
      <Route path="/search" component={Learn} />
      <Route path="/authors" component={Authors} />
    </React.Fragment>
  </Router>
)

export default App;
