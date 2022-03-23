import React, { useState } from 'react';
import { BackButton } from './BackButton';
import ax from '../modules/csrfToken';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { AuthComponent } from './AuthComponent';
import { LogoutButton } from './LogoutButton';

export const Login = props => {
  const navigate = useNavigate();
  const [loggedInStatus, user, handleLogin, handleLogout] = useOutletContext();
  const [session, setSession] = useState({
    user: {
      email: "",
      password: ""
    }
  })

  const handleEmailChange = e => {
    setSession({
      user: {
        email: e.target.value,
        password: session.user.password
      }
    })
  }

  const handlePasswordChange = e => {
    setSession({
      user: {
        email: session.user.email,
        password: e.target.value
      }
    })
  }

  const handleSuccessfulAuth = data => {
    handleLogin(data);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ax.post("http://localhost:3000/api/v1/sessions", session);
      if (response.data.logged_in) {
        handleSuccessfulAuth(response.data)
      }
      navigate('/video');
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="form-container">
      <div className="text-center">
        <h1>Login</h1>
          <form onSubmit={onSubmit}>
            <input name="email" type="email" id="email" placeholder="Email address" onChange={handleEmailChange} value={session.user.email} />
            <input name="password" type="password" id="password" placeholder="Password" onChange={handlePasswordChange} value={session.user.password} />
            <button type="submit" className="button accent-button form-submit">Login</button>
          </form>

          <AuthComponent component={<LogoutButton />} />
      </div>
    </div>
  )
}