import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import { client } from "./config/apolloServer";

import List from "./components/list";
import Login from "./components/login";

const App: React.FC = () => {
	return (
		<ApolloProvider client={client}>
			<div>Hello world!</div>
			<Login></Login>
			<List></List>
		</ApolloProvider>
	);
};

export default App;
