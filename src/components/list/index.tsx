import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

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

const List: React.FC = () => {
	const { loading, error, data, refetch } = useQuery(FETCH_DOCTORS);

	if (loading) return <p>Loading...</p>;
	if (error)
		return (
			<div>
				<button onClick={() => refetch()}>Refetch</button>
				<p>Error :(</p>
			</div>
		);

	return (
		<div>
			<button onClick={() => refetch()}>Refetch</button>
			{data.fetchDoctors.map((doc: any) => {
				return (
					<div key={doc}>
						<span>id: {doc.id}</span>
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
		</div>
	);
};

export default List;
