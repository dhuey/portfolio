import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import { Video } from './video';
import { Nav } from './nav';
import { VideoForm } from './VideoForm';
import { EditVideo } from './EditVideo';
import { NewVideo } from './NewVideo';
import { Footer } from './Footer';
import { Login } from './Login';
import ax from '../modules/csrfToken';

const App = () => {
  const navigate = useNavigate();
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");
  const [user, setUser] = useState({});

  const handleLogin = data => {
    setLoggedInStatus("LOGGED_IN");
    setUser(data.user);
  }

  const handleLogout = async () => {
    const response = await ax.delete("http://localhost:3000/api/v1/logout");
    if (response.data.logged_out) {
      setLoggedInStatus("NOT_LOGGED_IN");
      setUser({});
      navigate('/video');
    }
  }

  const checkLoginStatus = async () => {
    const response = await ax.get("http://localhost:3000/api/v1/logged_in");
    if (response.data.logged_in === true && loggedInStatus === "NOT_LOGGED_IN") {
      setLoggedInStatus("LOGGED_IN");
      setUser(response.data.user);
    } else if (!response.data.logged_in && loggedInStatus === "LOGGED_IN") {
      setLoggedInStatus("NOT_LOGGED_IN");
      setUser({});
    }
  }

  useEffect(() => {
    checkLoginStatus();
  })

  return (
    <div>
      <Nav />
      <div id="wrapper">
        <Outlet context={[loggedInStatus, user, handleLogin, handleLogout]}/>
        <Footer />
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
        <Route path="login" element={<Login />} />
        <Route path="*" element={<p>404 Not Found</p>} />
      </Route>
    </Routes>
  </BrowserRouter>, document.getElementById("app"));