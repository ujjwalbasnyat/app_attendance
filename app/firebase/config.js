// Import the functions you need from the SDKs you need
import firebase, { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID ,
  appId: process.env.NEXT_PUBLIC_FIREBASE_API_ID
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth(app)

const db = getFirestore(app)
export {app, auth, db}