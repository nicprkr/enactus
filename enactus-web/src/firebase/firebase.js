import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCWE-2CCvZlztYT8tRtyh3wHwgXq2a0iXs",
    authDomain: "enactustimer.firebaseapp.com",
    databaseURL: "https://enactustimer.firebaseio.com",
    projectId: "enactustimer",
    storageBucket: "enactustimer.appspot.com",
    messagingSenderId: "1026487983944"
};

if(!firebase.apps.length){
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};

//firebase.initializeApp(config);
//export default fire;