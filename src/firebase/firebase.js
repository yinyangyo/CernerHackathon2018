import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDpLElDHrhJynXPGFL3R1XpZCtMIleU5gg",
    authDomain: "orion-fd659.firebaseapp.com",
    databaseURL: "https://orion-fd659.firebaseio.com",
    projectId: "orion-fd659",
    storageBucket: "orion-fd659.appspot.com",
    messagingSenderId: "388524645294"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  const auth = firebase.auth();
  
  export {
    auth,
  };