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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({ displayName, email, createdAt, ...additionalData });
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
