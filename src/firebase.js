import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBGmUu0qUM4n776WEWyr_W_l7V57KlG74I",
  authDomain: "comp-box.firebaseapp.com",
  databaseURL: "https://comp-box-default-rtdb.firebaseio.com",
  projectId: "comp-box",
  storageBucket: "comp-box.appspot.com",
  messagingSenderId: "222491315933",
  appId: "1:222491315933:web:b52b3deecce7756d2f1534",
  measurementId: "G-8CBTF6CZ68",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const auth = getAuth(app);
