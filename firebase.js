// import firebase 
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDOabRxWojqKuxqZUwgG7HeN0b5UNsKlVc",
    authDomain: "insta-2-yt-6542a.firebaseapp.com",
    projectId: "insta-2-yt-6542a",
    storageBucket: "insta-2-yt-6542a.appspot.com",  
    messagingSenderId: "637742908484",
    appId: "1:637742908484:web:5f532af6cc3b9a9b39a811",
    measurementId: "G-VDJXD2M9Q9"
  };

//   initialize firebase 
const app = !getApps().length ? initializeApp(firebaseConfig) :
getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }; 