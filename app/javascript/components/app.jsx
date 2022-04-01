import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import { Home } from './Home';
import { Video } from './video';
import { Nav } from './nav';
import { EditVideo } from './EditVideo';
import { NewVideo } from './NewVideo';
import { Tech } from './Tech';
import { NewTech } from './NewTech';
import { EditTech } from './EditTech';
import { Footer } from './Footer';
import { Login } from './Login';
import { Contact } from './Contact';
import { NotFound } from './NotFound';
import { ScrollToTop } from './ScrollToTop';
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
    document.title = "dalton huey—creative"
    checkLoginStatus();
  }, []) // This only needs to run when <App /> is mounted. Changes will be caught by handleLogin and handleLogout and will remain in the session.

  return (
    <div id="body-container">
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
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="video" element={<Video />} />
        <Route path="video/new" element={<NewVideo />} />
        <Route path="video/edit/:id" element={<EditVideo />} />
        <Route path="tech" element={<Tech />} />
        <Route path="tech/new" element={<NewTech />} />
        <Route path="tech/edit/:id" element={<EditTech />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>, document.getElementById("app"));