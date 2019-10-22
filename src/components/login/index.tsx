import React from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { FETCH_DOCTORS } from "../list";

const LOGIN = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
		}
	}
`;

const Login: React.FC = () => {
	const [login, { data }] = useMutation(LOGIN, {
		onCompleted: async ({ login }) => {
			await localStorage.setItem("token", login.token);
			console.log(login.token);
		}
	});

	const handleLogin = () => {
		login({
			variables: {
				email: "gabriel@gmail.com",
				password: "123456"
			}
		});
	};

	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<div>{JSON.stringify(data)}</div>
		</div>
	);
};

export default Login;
