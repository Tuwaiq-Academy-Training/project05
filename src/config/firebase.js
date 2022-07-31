import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC1-VLUyL-Iuz1Y5ySpEMDEFlM2H-IralM",
    authDomain: "dev5-2022.firebaseapp.com",
    projectId: "dev5-2022",
    storageBucket: "dev5-2022.appspot.com",
    messagingSenderId: "337866152630",
    appId: "1:337866152630:web:a77e466f95dc6451cda417",
    measurementId: "G-R8042SGKGW"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();

  export default firebase;