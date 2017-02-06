/**
 * Created by MUSSAT on 27/01/2017.
 */
import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDntoWNNLUwUQwNlXuscMaulDyq1QbJlg0",
    authDomain: "test1-14888.firebaseapp.com",
    databaseURL: "https://test1-14888.firebaseio.com",
    storageBucket: "test1-14888.appspot.com",
    messagingSenderId: "1023762200821"
};
//firebase.initializeApp(config);
const fb = firebase
    .initializeApp(config)
    .database()
    .ref();
export {
    fb
}
