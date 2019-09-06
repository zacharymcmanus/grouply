import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: 'AIzaSyBmj-IjMPJPXByrRF9DdJzvdkbUQqqO8Ik',
    authDomain: 'slack-d70c3.firebaseapp.com',
    databaseURL: 'https://slack-d70c3.firebaseio.com',
    projectId: 'slack-d70c3',
    storageBucket: 'slack-d70c3.appspot.com',
    messagingSenderId: '396468858307',
    appId: '1:396468858307:web:724a3b56a43217b0'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
