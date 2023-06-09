import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxWn_8WUkXXTexDMrgUH_Q0i1u63bQQmw",
  authDomain: "test-carv-postapp.firebaseapp.com",
  projectId: "test-carv-postapp",
  storageBucket: "test-carv-postapp.appspot.com",
  messagingSenderId: "241079676211",
  appId: "1:241079676211:web:f5412962ea53f56d59a246"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const fireStore = getFirestore(firebaseApp);
export { firebaseApp, firebaseAuth, fireStore };