import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCD6WbAbg4tFUctVlUpSngPPmnTtETsc-A",
  authDomain: "lendsqr-489de.firebaseapp.com",
  projectId: "lendsqr-489de",
  storageBucket: "lendsqr-489de.appspot.com",
  messagingSenderId: "501002907945",
  appId: "1:501002907945:web:53c6682ba63a5104a6c738"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;