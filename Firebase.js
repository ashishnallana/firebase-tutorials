import firebase from "firebase";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDns4jwGpotLNlnZ0UvjVsRkDwCoseM_yc",
    authDomain: "fir-tut-ted.firebaseapp.com",
    projectId: "fir-tut-ted",
    storageBucket: "fir-tut-ted.appspot.com",
    messagingSenderId: "1065092830210",
    appId: "1:1065092830210:web:e4fd2fa35fe80e139d031b"
  };

firebase.initializeApp(firebaseConfig)

export default firebase