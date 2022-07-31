import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAq3Zd3jmGVWXfjXx0Ixa-QHGTBfPXZTC0",
    authDomain: "devto-10f5d.firebaseapp.com",
    projectId: "devto-10f5d",
    storageBucket: "devto-10f5d.appspot.com",
    messagingSenderId: "928884559162",
    appId: "1:928884559162:web:f76e75420a62a5dca21403",
    measurementId: "G-ZG46VYZB94"
};

firebase.initializeApp(firebaseConfig)

export default firebase