import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import Script from 'react-load-script'

import './Login/vendor/bootstrap/css/bootstrap.min.css';
import './Login/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './Login/fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import './Login/vendor/animate/animate.css';
import './Login/vendor/css-hamburgers/hamburgers.min.css';
import './Login/vendor/animsition/css/animsition.min.css';
import './Login/vendor/select2/select2.min.css';
import './Login/vendor/daterangepicker/daterangepicker.css';
import './Login/css/util.css';
import './Login/css/main.css';
let imgurl='https://thumbs.dreamstime.com/b/healthy-diet-sources-vitamin-c-vertical-copy-space-29566860.jpg';
let bckimg=
{
    backgroundImage: 'url(' + imgurl + ')'  
};
const SignInPage = ({ history }) =>
  <div>
    <SignInForm history={history} />
    
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.PROFILE);
        //localStorage.setItem("VEmail",email);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }
  handleScriptCreate() {
    this.setState({ scriptLoaded: false })
  }
   
  handleScriptError() {
    this.setState({ scriptError: true })
  }
   
  handleScriptLoad() {
    this.setState({ scriptLoaded: true })
  }
  render() {
    const {
      email,
      password,
      error,
    } = this.state;
<Script
      url="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}/>
    

    
    const isInvalid =
      password === '' ||
      email === '';

    return (
        <div className="limiter">
        <div className="container-login100">
        <div className="wrap-login100">
     <form className="login100-form validate-form" onSubmit={this.onSubmit}>
     <span className="login100-form-title p-b-34">
						Account Login
					</span>
        <div className="wrap-input100 rs1-wrap-input100 validate-input m-b-20" data-validate="Type user name">
        <input id="first-name"
        className="input100"
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <span className="focus-input100"></span>
        </div>
        <div className="wrap-input100 rs2-wrap-input100 validate-input m-b-20" data-validate="Type password">				
        <input 
        className="input100"
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <span className="focus-input100"></span>
        </div>
        <div className="container-login100-form-btn">
        <button className="login100-form-btns" disabled={isInvalid} type="submit">
          Sign In
        </button>
</div>

        { error && <p>{error.message}</p> }
        <div className="w-full text-center p-t-27 p-b-239">
						<span className="txt1">
							Forgot 
						</span>

						<a href="#" className="txt2">
							 User name / password?
						</a>
					</div>
                    <div className="w-full text-center">
						<a href={routes.SIGN_UP} className="txt3">
							Sign Up
						</a>
					</div>
      </form>
      <div className="login100-more" style={bckimg}></div>
			
      </div>
      </div>
      </div>
      
    );
  }
  
}


    
export default withRouter(SignInPage);

export {
  SignInForm,
}