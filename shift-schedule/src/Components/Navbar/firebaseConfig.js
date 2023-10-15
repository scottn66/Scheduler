import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4vlcNSG2xfJY9FQA8vWmdqtDLRiNJDrg",
  authDomain: "shiftschedule-d590d.firebaseapp.com",
  projectId: "shiftschedule-d590d",
  storageBucket: "shiftschedule-d590d.appspot.com",
  messagingSenderId: "719028217504",
  appId: "1:719028217504:web:dd25028a8ca1ed81f70bc5",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
