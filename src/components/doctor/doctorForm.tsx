import React from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Loading from "../loading";

import { FormBuilder } from "../form";

import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";

import SnackbarUtils from "../../utils/snack";

import { CREATE_DOCTOR } from "./graphql";

import { form } from "./doctorFormInputs";

const DoctorForm: React.FC = () => {
	const history = useHistory();
	const [createDoctor, { loading }] = useMutation(CREATE_DOCTOR, {
		onCompleted: () => {
			SnackbarUtils.success("Profissional criado com sucesso.");
			history.replace("/dashboard/doctor-list");
		}
	});
	//new Date().toISOString()

	const onsubmit = data => {
		data.status = JSON.parse(data.status);
		data.cro = Number(data.cro);
		data.services = [];
		data.specialties = [];

		const variables = {
			doctor: data
		};
		createDoctor({ variables });
	};

	const cancelForm = () => {
		history.replace("/dashboard/doctor-list");
	};

	return (
		<FormBuilder id={"abc"} onSubmit={onsubmit} form={form} title='Cadastrar novo Profissional'>
			{loading && <Loading />}
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
