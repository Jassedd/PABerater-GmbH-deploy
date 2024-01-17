import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_APIKEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTHDOMAIN,
  databaseURL: import.meta.env.VITE_REACT_APP_DATABASEURL,
  projectId: import.meta.env.VITE_REACT_APP_PROJECTID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_REACT_APP_APPID,
  measurementId: import.meta.env.VITE_REACT_APP_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
export default app;
