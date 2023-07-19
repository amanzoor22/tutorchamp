// Import the functions you need from the SDKs you need
/*import { initializeApp } from "firebase/app";*/
import {getFirestore} from 'firebase/firestore'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import {getStorage,ref} from 'firebase/storage'
import { getDatabase } from "firebase/database";

import {getAuth, GoogleAuthProvider } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsWH3Ne7Qf3klOQEXZun8CGB2pDe95IeU",
  authDomain: "tutorchamp-c6232.firebaseapp.com",
  projectId: "tutorchamp-c6232",
  storageBucket: "tutorchamp-c6232.appspot.com",
  messagingSenderId: "370573762199",
  appId: "1:370573762199:web:c8f51186fae50b6e6153d2"
};

//let auth;
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//export const db=firebase.database();
//export const db = getDatabase(app);

firebase.firestore().settings({timestampInSnapshots:true, merge:true})
export const storage=getStorage(app)
export const storageRef = ref(storage,'userimages');
export const db=new getFirestore(app)
// //export const auth = firebase.auth()
//  export const auth=getAuth(app);
 export default firebase;

