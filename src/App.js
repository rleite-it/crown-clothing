import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/shop" element={<ShopPage />} />
			</Routes>
		</>
	);
}

export default App;
