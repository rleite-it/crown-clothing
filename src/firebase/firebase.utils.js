import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
	apiKey: "AIzaSyDSdoXTB4Uj9wKGgsKvMedKMVYe0hUWvx0",
	authDomain: "crown-clothing-5717f.firebaseapp.com",
	projectId: "crown-clothing-5717f",
	storageBucket: "crown-clothing-5717f.appspot.com",
	messagingSenderId: "679856637409",
	appId: "1:679856637409:web:02a04ad2c27cca0464bea0",
	measurementId: "G-PLFQEKMH7T",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
