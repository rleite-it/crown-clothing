import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/signin" element={<SignInAndSignUpPage />} />
			</Routes>
		</>
	);
}

export default App;
