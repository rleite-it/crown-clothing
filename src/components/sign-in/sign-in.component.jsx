import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = (props) => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = async (event) => {
		event.preventDefault();

		const { email, password } = data;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			setData({ email: "", password: "" });
		} catch (error) {
			console.log(error);
		}
	};

	const handleChage = (event) => {
		const { value, name } = event.target;

		setData({ ...data, [name]: value });
	};

	return (
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					value={data.email}
					handleChange={handleChage}
					required
					label="Email"
				/>
				<FormInput
					name="password"
					type="password"
					value={data.password}
					handleChange={handleChage}
					required
					label="Password"
				/>
				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
