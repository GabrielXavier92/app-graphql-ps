import React, { useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Loading from "../loading";

import { FormBuilder } from "../form";

import { useHistory } from "react-router-dom";
import { useParams } from "react-router";

import { useMutation } from "@apollo/react-hooks";
import { useLazyQuery } from "@apollo/react-hooks";

import SnackbarUtils from "../../utils/snack";

import { CREATE_DOCTOR, FETCH_DOCTOR } from "./graphql";

import { form } from "./doctorFormInputs";

const DoctorForm: React.FC = () => {
	const history = useHistory();
	let { id } = useParams();

	const [createDoctor, { loading }] = useMutation(CREATE_DOCTOR, {
		onCompleted: () => {
			SnackbarUtils.success("Profissional criado com sucesso.");
			history.replace("/dashboard/doctor-list");
		}
	});

	const [fetchDoctor, { data, loading: fetchLoading }] = useLazyQuery(FETCH_DOCTOR);

	useEffect(() => {
		if (id) {
			fetchDoctor({ variables: { id } });
		}
	}, [id, fetchDoctor]);

	const onsubmit = data => {
		//new Date().toISOString()
		// data.status = JSON.parse(data.status);
		// data.cro = Number(data.cro);
		// data.services = [];
		// data.specialties = [];

		console.log(data);
		createDoctor();
		// { variables: { doctor: data } }
	};

	const cancelForm = () => {
		history.replace("/dashboard/doctor-list");
	};

	return (
		<FormBuilder
			id={"abc"}
			onSubmit={onsubmit}
			form={form}
			data={data ? data.fetchDoctor! : {}}
			title='Cadastrar novo Profissional'
		>
			{(loading || fetchLoading) && <Loading />}
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
