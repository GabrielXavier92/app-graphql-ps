import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";

import Grid from "@material-ui/core/Grid";

import DataTable from "../dataTable";
import { Typography } from "@material-ui/core";

import { FETCH_DOCTORS } from "./graphql";

const DoctorList: React.FC = () => {
	const history = useHistory();

	const { loading, data } = useQuery(FETCH_DOCTORS);

	// const logout = async () => {
	// 	await localStorage.clear()
	// 	history.replace('/login')
	// }

	const changePage = () => {
		history.replace("/dashboard/doctor-form");
	};

	const onRowClick = (data: any) => {
		console.log(data);
	};

	const columns = [
		{
			name: "id",
			options: {
				display: false,
				viewColumns: false,
				filter: false
			}
		},
		"Nome",
		"CRO",
		{
			name: "Status",
			options: {
				customBodyRender: (value: any) => (
					<>
						<Typography variant='subtitle2'>{value && "Ativo"}</Typography>
						<Typography variant='subtitle2'>{!value && "Inativo"}</Typography>
					</>
				)
			}
		},
		"Sexo"
	];

	return (
		<Grid>
			{/* <button onClick={() => logout()}>Logout</button>
			<button onClick={() => refetch()}>Refetch</button>
			<button onClick={() => changePage()}>TESTE</button> */}
			<DataTable
				title={"Profissionais"}
				columns={columns}
				items={data ? data.fetchDoctors : []}
				loading={loading}
				onRowClick={onRowClick}
				onAdd={changePage}
			/>
		</Grid>
	);
};

export default DoctorList;
