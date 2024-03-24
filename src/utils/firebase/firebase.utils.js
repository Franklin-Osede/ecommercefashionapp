import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc

} from 'firebase/firestore'

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

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = ()=> signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = ()=> signInWithRedirect (auth, googleProvider);
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc (db, 'user', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date ();

        try { 
            await setDoc (userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
  }