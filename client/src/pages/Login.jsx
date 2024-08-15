import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import './Login.css';

function Login() {
  const [showSignup, setShowSignup] = useState(false);

  const [login] = useMutation(LOGIN_USER);
  const [signup] = useMutation(ADD_USER);

  const [loginForm, setLoginForm] = useState({ userName: '', password: '' });
  const [signupForm, setSignupForm] = useState({ userName: '',  password: '' });


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
    console.log('mark1')
    try {
      console.log('2')
      const { data } = await login({
        variables: { ...loginForm, },
      });
      console.log('3')
      // const { token } = data.addUser;
      // Auth.login(token);
      
      Auth.login(data.login.token);
      console.log('sucess')
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
      const { token } = data.addUser;
      Auth.login(token);
      console.log('sucess')
      // Auth.login(data.signup.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="login-userName">Username</label>
          <input
            type="text"
            id="login-userName"
            name="userName"
            value={loginForm.userName}
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
            <label htmlFor="signup-userName">Username</label>
            <input
              type="text"
              id="signup-userName"
              name="userName"
              value={signupForm.userName}
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