import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './containers/Home';
import Guides from './containers/Guides';
import Courses from './containers/Courses';
import Posts from './containers/Posts';
import Learn from './containers/Learn';
import Authors from './containers/Authors';

import 'bulma/css/bulma.css';
import './App.css';
import './components/Cards/Card.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <nav className="navbar is-dark is-fixed-top">
          <div className="container is-fluid">
            
            {/* logo */}
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">Scotch</Link>
            </div>

            {/* menu */}
            <div className="navbar-menu">
              <div className="navbar-start">
                <Link className="navbar-item" to="/">Home</Link>
                <Link className="navbar-item" to="/guides">Guides</Link>
                <Link className="navbar-item" to="/courses">Courses</Link>
                <Link className="navbar-item" to="/posts">Posts</Link>
              </div>
              <div className="navbar-end">
                <Link className="navbar-item" to="/learn">Learn</Link>
                <Link className="navbar-item" to="/search">Search</Link>
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
    );
  }
}

export default App;
