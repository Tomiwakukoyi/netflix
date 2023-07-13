// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4FCzKWpojwk19dbXvJs0Mie2ks0sfS_M",
  authDomain: "netflix-929c1.firebaseapp.com",
  projectId: "netflix-929c1",
  storageBucket: "netflix-929c1.appspot.com",
  messagingSenderId: "129845214381",
  appId: "1:129845214381:web:7db847646a8161c9181a24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

export { auth };
export default db;
