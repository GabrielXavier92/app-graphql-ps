import { gql } from "apollo-boost";

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

export const FETCH_DOCTOR = gql`
	query fetchDoctor($id: ID!) {
		fetchDoctor(id: $id) {
			id
			name
			cro
			status
			gender
		}
	}
`;

export const CREATE_DOCTOR = gql`
	mutation CreateDoctor($doctor: DoctorInput!) {
		createDoctor(doctor: $doctor) {
			id
		}
	}
`;
