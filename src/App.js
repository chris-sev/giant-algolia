import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Learn from './containers/Learn';
import Home from './containers/Home';
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
          <div className="container">
            
            {/* logo */}
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">Scotch</Link>
            </div>

            {/* menu */}
            <div className="navbar-menu">
              <div className="navbar-start">
                <Link className="navbar-item" to="/">Home</Link>
                <Link className="navbar-item" to="/learn">Learn</Link>
                <Link className="navbar-item" to="/learn">Guides</Link>
                <Link className="navbar-item" to="/learn">Courses</Link>
                <Link className="navbar-item" to="/learn">Posts</Link>
                <Link className="navbar-item" to="/authors">Authors</Link>
              </div>
            </div>

          </div>
          </nav>

          <Route exact path="/" component={Home}/>
          <Route path="/learn" component={Learn}/>
          <Route path="/authors" component={Authors}/>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
