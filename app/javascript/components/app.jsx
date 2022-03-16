import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Routes, Route, Outlet } from 'react-router-dom';
import { Video } from './video';
import { Nav } from './nav';
import { VideoForm } from './VideoForm';
import { EditVideo } from './EditVideo';
import { NewVideo } from './NewVideo';

const App = () => {
  return (
    <div>
      <Nav />
      <div id="wrapper">
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
        <Route path="video/new" element={<NewVideo />} />
        <Route path="video/edit/:id" element={<EditVideo />} />
        <Route path="*" element={<p>404 Not Found</p>} />
      </Route>
    </Routes>
  </BrowserRouter>, document.getElementById("app"));