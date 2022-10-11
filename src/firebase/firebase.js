import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBr-bcsv1UHBsaTNq_cjtft41wpLhWgidY",
  authDomain: "animal-house-89441.firebaseapp.com",
  projectId: "animal-house-89441",
  storageBucket: "animal-house-89441.appspot.com",
  messagingSenderId: "554198289638",
  appId: "1:554198289638:web:13c6bc76d6796341d8ff27",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);