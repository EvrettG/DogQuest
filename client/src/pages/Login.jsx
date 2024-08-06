import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import './Login.css';

function Login() {
  const [showSignup, setShowSignup] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [signupForm, setSignupForm] = useState({ username: '', email: '', password: '' });

  const [login, { error: loginError }] = useMutation(LOGIN_USER);
  const [signup, { error: signupError }] = useMutation(ADD_USER);

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSignupChange = (event) => {
    const { name, value } = event.target;
    setSignupForm({ ...signupForm, [name]: value });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...loginForm },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await signup({
        variables: { ...signupForm },
      });
      Auth.login(data.signup.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="login-username">Username</label>
          <input
            type="text"
            id="login-username"
            name="username"
            value={loginForm.username}
            onChange={handleLoginChange}
          />
        </div>
        <div>
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            name="password"
            value={loginForm.password}
            onChange={handleLoginChange}
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <button className="signup-toggle" onClick={() => setShowSignup(!showSignup)}>Signup</button>
      {showSignup && (
        <form onSubmit={handleSignupSubmit} className="signup-form">
          <div>
            <label htmlFor="signup-username">Username</label>
            <input
              type="text"
              id="signup-username"
              name="username"
              value={signupForm.username}
              onChange={handleSignupChange}
            />
          </div>
          <div>
            <label htmlFor="signup-email">Email (optional)</label>
            <input
              type="email"
              id="signup-email"
              name="email"
              value={signupForm.email}
              onChange={handleSignupChange}
            />
          </div>
          <div>
            <label htmlFor="signup-password">Password</label>
            <input
              type="password"
              id="signup-password"
              name="password"
              value={signupForm.password}
              onChange={handleSignupChange}
            />
          </div>
          <button type="submit" className="signup-button">Create Account</button>
        </form>
      )}
    </div>
  );
}

export default Login;