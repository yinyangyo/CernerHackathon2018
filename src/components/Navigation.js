import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import './header/demo.css';
import './header/header-basic.css';
import { auth } from '../firebase';

const Navigation = (props, { authUser }) =>
  <div>
      {console.log(authUser)}
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

Navigation.contextTypes = {
  authUser: PropTypes.object,
};

const NavigationAuth = () =>
  
  <header className="header-basic">
  
              <div className="header-limiter">
  
                  <h1><a href="#">Diet<span>Chart</span></a></h1>
  
                  <nav>
                      <a href={routes.LANDING}>Home</a>
                      <a href={routes.PROFILE}>Profile</a>
                      <SignOutButton />
                  </nav>
              </div>
  
          </header>

const NavigationNonAuth = () =>

<header className="header-basic">

			<div className="header-limiter">

				<h1><a href="#">Diet<span>Chart</span></a></h1>

				<nav>
                <a href={routes.LANDING}>Home</a>
                <a href={routes.SIGN_IN}>Sign In</a>
				</nav>
			</div>

		</header>

export default Navigation;