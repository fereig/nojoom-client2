/* firebase-config.js — نجوم */

import { initializeApp }     from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore,
         collection, getDocs,
         addDoc, query,
         where, orderBy,
         limit, doc,
         setDoc }             from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDerZITu2A9cjHIZixtEmpJl2wx47wECA8",
  authDomain: "nojoom-client2.firebaseapp.com",
  projectId: "nojoom-client2",
  storageBucket: "nojoom-client2.firebasestorage.app",
  messagingSenderId: "869165440605",
  appId: "1:869165440605:web:e00271f3308c867be537b4"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

export { db, collection, getDocs, addDoc, query, where, orderBy, limit, doc, setDoc };
