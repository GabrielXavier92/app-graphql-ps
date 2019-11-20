import { gql } from "apollo-boost";

export const LOGIN = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
		}
	}
`;

export const FORGOT = gql`
	mutation FORGOT($email: String!){
	  forgotPassword(email: $email)
	}
`
