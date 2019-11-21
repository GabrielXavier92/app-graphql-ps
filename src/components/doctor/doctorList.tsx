import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Grid } from "@material-ui/core";

export const FETCH_DOCTORS = gql`
	{
		fetchDoctors {
			id
			name
			services {
				id
				name
			}
		}
	}
`;

const DoctorList: React.FC<RouteComponentProps> = ({ history }) => {
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
	return (
		<Grid xs={12} md={8} lg={9}>
			<div>
				<button onClick={() => logout()}>Logout</button>
				<button onClick={() => refetch()}>Refetch</button>
				<button onClick={() => changePage()}>TESTE</button>
				{data.fetchDoctors.map((doc: any) => {
					return (
						<div key={doc}>
							<span>idaa: {doc.id}</span>
							<span>name: {doc.name}</span>
							{doc.services.map((service: any) => {
								return (
									<div key={service.id}>
										<span>service name: {service.id}</span>
										<span>service name: {service.name}</span>
									</div>
								);
							})}
						</div>
					);
				})}
				{data.fetchDoctors.length === 0 && <div>Nenhum registroo</div>}
			</div>
		</Grid>
	);
};

export default withRouter(DoctorList);
