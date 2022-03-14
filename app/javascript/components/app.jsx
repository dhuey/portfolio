import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Routes, Route, Outlet } from 'react-router-dom';
import { Video } from './video';

const App = () => {
  return (
    <div>
      <nav>
        <Link className="nav-link" to="/music">music</Link>
        <Link className="nav-link" to="/tech">tech</Link>
        <Link className="nav-link" to="/video">video</Link>
        <Link className="nav-link" to="/contact">contact</Link>
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