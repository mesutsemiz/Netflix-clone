import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBT15_tsTCQ_-yksyUH4JkNeBTWlKoviqY",
    authDomain: "netflix-c7bcf.firebaseapp.com",
    projectId: "netflix-c7bcf",
    storageBucket: "netflix-c7bcf.appspot.com",
    messagingSenderId: "782820364468",
    appId: "1:782820364468:web:b15cdb4f5e33a832acc7e1",
    measurementId: "G-E8W25X33H9"
  };
  

  
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
 
  export default storage;