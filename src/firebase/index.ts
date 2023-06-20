import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);
