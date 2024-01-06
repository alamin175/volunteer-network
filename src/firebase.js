// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const provider = new GoogleAuthProvider();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP5yNlyXyt0l38y0JmRZSGEKLkKWMImA0",
  authDomain: "volunteer-network-ead80.firebaseapp.com",
  projectId: "volunteer-network-ead80",
  storageBucket: "volunteer-network-ead80.appspot.com",
  messagingSenderId: "754284297637",
  appId: "1:754284297637:web:f9ba485922be6f00c8bc4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
