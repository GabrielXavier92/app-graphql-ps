import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { withRouter, RouteComponentProps } from "react-router-dom";

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

const List: React.FC<RouteComponentProps> = ({ history }) => {
	const { loading, error, data, refetch } = useQuery(FETCH_DOCTORS);

	const logout = async () => {
		await localStorage.clear()
		history.replace('/')
	}

	if (loading) return <p>Loading...</p>;
	if (error)
		return (
			<div>
				<button onClick={() => refetch()}>Refetch</button>
				<p>Error aaa:(</p>
			</div>
		);

	return (
		<div>
			<button onClick={() => logout()}>Logout</button>
			<button onClick={() => refetch()}>Refetch</button>
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
			{data.fetchDoctors.length === 0 && <div>Nenhum registro</div>}
		</div>
	);
};

export default withRouter(List);
