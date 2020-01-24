import { gql } from "apollo-boost";

// import { DoctorInput } from '../../generated/graphql'

export const FETCH_DOCTORS = gql`
	{
		fetchDoctors {
			id
			name
			cro
			status
			gender
		}
	}
`;

export const CREATE_DOCTOR = gql`
	mutation CreateDoctor($name: String!) {
		createDoctor(doctor: { name: $name }) {
			id
		}
	}
`;
