import React from 'react';
import './App.css';
import { auth } from '../firebase';

import * as routes from '../constants/routes';
const SignOutButton = () =>
  <a
    
    className="signoutbtn"
    onClick={auth.doSignOut}
    href={routes.LANDING}
  >
    Sign Out
  </a>

export default SignOutButton;