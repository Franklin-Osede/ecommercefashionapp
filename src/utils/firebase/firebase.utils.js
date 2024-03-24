import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCK-ME-DyzeR7iK-x5vz61VG2xk5W-WDwM",
    authDomain: "crwn-clothing-db-ca4e3.firebaseapp.com",
    projectId: "crwn-clothing-db-ca4e3",
    storageBucket: "crwn-clothing-db-ca4e3.appspot.com",
    messagingSenderId: "844754914228",
    appId: "1:844754914228:web:720f62aef1e862628200e1"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider);