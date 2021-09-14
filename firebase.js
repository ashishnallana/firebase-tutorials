import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAPh0FowBIJqDDU58N-fnUy9LE_9nPgWNs",
    authDomain: "fir-tutorial-f0341.firebaseapp.com",
    projectId: "fir-tutorial-f0341",
    storageBucket: "fir-tutorial-f0341.appspot.com",
    messagingSenderId: "20398431978",
    appId: "1:20398431978:web:c929642c56010c66dd0193"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;