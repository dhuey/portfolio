import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Routes, Route, Outlet } from 'react-router-dom';
import { Video } from './video';

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <img src="/dalton-huey-logo.svg" className="nav-logo" />
        </Link>

        <div>
          <Link className="nav-link" to="/music">music</Link>
          <Link className="nav-link" to="/tech">tech</Link>
          <Link className="nav-link" to="/video">video</Link>
          <Link className="nav-link" to="/contact">contact</Link>
        </div>

        <div>
          <a href="https://instagram.com/daltonhuey" target="_blank"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://youtube.com/daltonhuey" target="_blank"><i className="fa-brands fa-youtube"></i></a>
          <a href="https://github.com/dhuey" target="_blank"><i className="fa-brands fa-github"></i></a>
          <a href="https://spotify.com/daltonhuey" target="_blank"><i className="fa-brands fa-spotify"></i></a>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="video" element={<Video />} />
        <Route path="*" element={<p>404 Not Found</p>} />
      </Route>
    </Routes>
  </BrowserRouter>, document.getElementById("app"));