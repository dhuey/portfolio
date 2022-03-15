import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Routes, Route, Outlet } from 'react-router-dom';
import { Video } from './video';
import { Nav } from './nav';
import { VideoForm} from './VideoForm';

const App = () => {
  return (
    <div>
      <Nav />
      <div id="container">
        <Outlet />
      </div>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="video" element={<Video />} />
        <Route path="video/new" element={<VideoForm />} />
        <Route path="*" element={<p>404 Not Found</p>} />
      </Route>
    </Routes>
  </BrowserRouter>, document.getElementById("app"));