import * as React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";

import FormControlLabel from '@material-ui/core/FormControlLabel';

import DataTable from '../dataTable';

export const FETCH_DOCTORS = gql`
	{
		fetchDoctors {
			id
			name
			cro
			status
		}
	}
`;

const DoctorList: React.FC = () => {
	const history = useHistory()

	const { loading, error, data, refetch } = useQuery(FETCH_DOCTORS);

	const logout = async () => {
		await localStorage.clear()
		history.replace('/login')
	}

	if (loading) return <p>Loading...</p>;
	if (error)
		return (
			<div>
				<button onClick={() => refetch()}>Refetch</button>
				<p>Error aaa:(</p>
			</div>
		);

	const changePage = () => {
		history.replace('/dashboard/teste')
	}

	const onRowClick = (data: any) => {
		console.log(data)
	}

	const columns = [
		{
			name: "id", options: {
				display: 'false'
			}
		},
		"Nome",
		"CRO",
		{
			name: "Status", options: {
				customBodyRender: (value: any) => (
					<>
						<span>{value && 'Ativo'}</span>
						<span>{!value && 'Inativo'}</span>
					</>
				),
			}
		}
	];

	return (
		<Grid xs={12} md={8} lg={9} item={true}>
			<button onClick={() => logout()}>Logout</button>
			<button onClick={() => refetch()}>Refetch</button>
			<button onClick={() => changePage()}>TESTE</button>
			<DataTable columns={columns} items={data.fetchDoctors} onRowClick={onRowClick} />

		</Grid>
	);
};

export default DoctorList
