import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
	const [currentUser, setCurrentUser] = useState(null);

	const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
		if (userAuth) {
			const userRef = await createUserProfileDocument(userAuth);

			userRef.onSnapshot((snapShot) => {
				setCurrentUser({
					id: snapShot.id,
					...snapShot.data(),
				});
			});
		} else {
			setCurrentUser(null);
		}
	});

	useEffect(() => {
		unsubscribeFromAuth();

		return () => unsubscribeFromAuth();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Header currentUser={currentUser} />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/signin" element={<SignInAndSignUpPage />} />
			</Routes>
		</>
	);
}

export default App;
