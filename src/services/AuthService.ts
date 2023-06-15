import {
  UserCredential,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Credentials, RegisterData, User } from "../models/auth";
import { fireStore, firebaseApp, firebaseAuth } from "../packages/firebase";
import "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  query,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxWn_8WUkXXTexDMrgUH_Q0i1u63bQQmw",
  authDomain: "test-carv-postapp.firebaseapp.com",
  projectId: "test-carv-postapp",
  storageBucket: "test-carv-postapp.appspot.com",
  messagingSenderId: "241079676211",
  appId: "1:241079676211:web:f5412962ea53f56d59a246",
};

export default class AuthService {
  //  fb =  firebase.initializeApp(firebaseConfig);
  //  auth = getAuth(firebase)
  constructor() {}

  async AUTHENTICATE(credential: Credentials) {
    try {
      const resp = await signInWithEmailAndPassword(
        firebaseAuth,
        credential.email,
        credential.pass
      );
      return resp;
    } catch (err) {
      console.log({ err });
      return null;
    }
  }
}

export const REGISTER = async (info: RegisterData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      info.email,
      info.pass
    );

    if (userCredential.user) {
      const user: User = {
        id: userCredential.user.uid,
        name: info.name,
        email: info.email,
        createAt: new Date(),
      };

      const userRef = collection(fireStore, "users");
      var result = await addDoc(userRef, user);
      console.log("El post se ha guardado correctamente");
      return user;
      // query(collection(fireStore, "/users"), setDoc(userCredential.user.uid).firestore())
    }

    console.log({ userCredential });

    return userCredential;
  } catch (err) {
    console.log({ err });
    return null;
  }
};
