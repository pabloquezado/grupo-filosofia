import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDAM9zBCx4CP5H5FRLtBHQAvNiyhzd5YyE",
  authDomain: "grefec.firebaseapp.com",
  projectId: "grefec",
  storageBucket: "grefec.firebasestorage.app",
  messagingSenderId: "677010192405",
  appId: "1:677010192405:web:919a5b90d3b4a05b79761c"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
