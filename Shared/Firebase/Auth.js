import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxor2JBAF1qQWJ9pvdW93zyzFhzjWElpg",
  authDomain: "glue-gun-client-side.firebaseapp.com",
  projectId: "glue-gun-client-side",
  storageBucket: "glue-gun-client-side.appspot.com",
  messagingSenderId: "975859370876",
  appId: "1:975859370876:web:ceda0460d6c6a0c23932f9",
  measurementId: "G-FHEL50HRL2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
