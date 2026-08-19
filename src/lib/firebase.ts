import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  projectId: "billiekia-concept",
  appId: "1:595469764274:web:ce5835b913377b3498abab",
  storageBucket: "billiekia-concept.firebasestorage.app",
  apiKey: "AIzaSyCfiUYW70hdMbR3uGrNP6LqjINoOOO20hg",
  authDomain: "billiekia-concept.firebaseapp.com",
  messagingSenderId: "595469764274",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Restreindre la connexion Google au compte du client
googleProvider.setCustomParameters({
  login_hint: "billiekia.concept@gmail.com",
  hd: "gmail.com",
});

// Email autorisé à accéder à l'admin
export const ADMIN_EMAIL = "billiekia.concept@gmail.com";
