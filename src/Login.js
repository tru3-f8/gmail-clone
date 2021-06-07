import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { auth, provider } from './firebase';
import { login } from './features/userSlice';
import './Login.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  const Login = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
        history.push('/');
    })
    .catch(error => alert(error.message))

  };

  return (
    <div className='login'>
      <div className='login_container'>
        <img
          src='https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg'
          alt=''
        />
        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button className='login_signInButton' variant='contained' color='grey' onClick={Login}>
            Sign In
          </Button>
        </form>
        <h3>OR</h3>
        <Button variant='contained' color='primary' onClick={signIn}>
          Login with Google Account
        </Button>
      </div>
    </div>
  );
};

export default Login;
