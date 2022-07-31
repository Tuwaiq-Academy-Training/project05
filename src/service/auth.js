
import firebase from "../config/firebase-config";


const scoialMediAuth =(Provider) => {
    return firebase
    .auth()
    .signInWithPopup(Provider)
    .then((res) =>{
        return res.user;
    })
    .catch((er) =>{
        return er;
    });
};

export default scoialMediAuth;