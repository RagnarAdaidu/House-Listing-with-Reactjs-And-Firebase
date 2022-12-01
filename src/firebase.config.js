import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1iZeiyRmH4jBZ9924u4YtjxtrIgRzuKU",
  authDomain: "house-marketplace-app2-85abe.firebaseapp.com",
  projectId: "house-marketplace-app2-85abe",
  storageBucket: "house-marketplace-app2-85abe.appspot.com",
  messagingSenderId: "702827661954",
  appId: "1:702827661954:web:cbf3d36cf68d252020429b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()