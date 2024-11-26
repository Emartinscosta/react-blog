import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAWjnCKXCo6PT4XrjqOthkLPKxkm--XpBo",
  authDomain: "react-blog-emc.firebaseapp.com",
  projectId: "react-blog-emc",
  storageBucket: "react-blog-emc.firebasestorage.app",
  messagingSenderId: "503253974285",
  appId: "1:503253974285:web:d6eb7425304eb1098b4444"
};


const app = initializeApp(firebaseConfig);
export default app;