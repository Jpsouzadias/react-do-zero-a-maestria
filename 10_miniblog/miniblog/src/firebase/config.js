import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBbrhfuFLLsWyncjrSnGYa6qaI-WKaFV3s",
  authDomain: "miniblog-10fce.firebaseapp.com",
  projectId: "miniblog-10fce",
  storageBucket: "miniblog-10fce.appspot.com",
  messagingSenderId: "1048136921622",
  appId: "1:1048136921622:web:83825a86b611329e18fb37"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };