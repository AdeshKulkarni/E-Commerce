import { initializeApp } from 'firebase/app';

import {getAuth , signInWithRedirect , signInWithPopup ,  GoogleAuthProvider} from 'firebase/auth';

import {
getFirestore,
doc,
setDoc,
getDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBguZGXGDFc0gEUtPjVsdjgwFf0D8IjUdU",
    authDomain: "e-com-ffda9.firebaseapp.com",
    projectId: "e-com-ffda9",
    storageBucket: "e-com-ffda9.appspot.com",
    messagingSenderId: "692078819918",
    appId: "1:692078819918:web:f7aeeaeaed3b03a83be11f"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  const db = getFirestore();

  const createUserDocument = async (userAuth) => {

    const userDocref = doc(db, `users/${userAuth.uid}`);
      
    
  }