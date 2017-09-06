import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Home from '../../components/Home';
import VideoPlayer from '../../components/VideoPlayer';
import './index.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/"><div className="header-logo">{'VSS'}</div></Link>
          <div className="header-buttons">
            <Link to="/video-player"><i className="material-icons">videocam</i></Link>
            <Link to="/stream-player"><i className="material-icons">video_library</i></Link>
          </div>
        </header>

        <main className="App-content">
          <Route exact path="/" component={Home} />
          <Route exact path="/video-player" component={VideoPlayer} />
          <Route exact path="/stream-player" component={VideoPlayer} />
        </main>
      </div>
    );
  }
}

export default App;