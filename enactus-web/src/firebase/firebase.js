import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCWE-2CCvZlztYT8tRtyh3wHwgXq2a0iXs",
    authDomain: "enactustimer.firebaseapp.com",
    databaseURL: "https://enactustimer.firebaseio.com",
    projectId: "enactustimer",
    storageBucket: "enactustimer.appspot.com",
    messagingSenderId: "1026487983944"
  };

if (!firebase.apps.length){
    firebase.initializeApp(config);
}
const db = firebase.database();
const auth = firebase.auth();
var currentUser = ' ';

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    currentUser = user.email;
  } else {
    // No user is signed in.
  }
});

export {
    db,
    auth,
    currentUser as user
};