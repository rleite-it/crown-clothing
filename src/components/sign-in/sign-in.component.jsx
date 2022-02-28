import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

const SignIn = (props) => {
	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = (event) => {
		event.preventDefault();

		setData({ email: "", password: "" });
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

				<CustomButton type="submit">Sign In</CustomButton>
			</form>
		</div>
	);
};

export default SignIn;
