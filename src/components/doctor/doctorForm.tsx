import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { FormBuilder } from "../form";

import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

import { CREATE_DOCTOR } from "./graphql";

import { form } from "./doctorFormInputs";

const DoctorForm: React.FC = () => {
	const history = useHistory();
	const [createDoctor, { data }] = useMutation(CREATE_DOCTOR, {
		onCompleted: ({ doctor }) => {
			console.log(data);
			console.log(doctor);
			history.replace("/dashboard/doctor-list");
		}
	});
	//new Date().toISOString()

	const onsubmit = data => {
		console.log(data);
		data.services = [];
		data.specialties = [];
		console.log(data);

		createDoctor({
			variables: {
				name: data.name
			}
		});
	};

	const cancelForm = () => {
		history.replace("/dashboard/doctor-list");
	};

	return (
		<FormBuilder id={"abc"} onSubmit={onsubmit} form={form} title='Cadastrar novo Profissional'>
			<Grid container direction='row' justify='flex-end' alignItems='baseline'>
				<Button type='submit' variant='contained' color='primary'>
					Cadastrar
				</Button>
				<Button onClick={cancelForm} variant='contained' color='secondary'>
					Cancelar
				</Button>
			</Grid>
		</FormBuilder>
	);
};

export default DoctorForm;
