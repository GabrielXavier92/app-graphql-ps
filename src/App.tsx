import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./config/apolloServer";

import Routes from './routes'
import { Container } from "@material-ui/core";

import CssBaseline from '@material-ui/core/CssBaseline';



const App: React.FC = () => {
	return (

		<ApolloProvider client={client}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Router>
					<Routes />
				</Router>
			</Container>
		</ApolloProvider>
	);
};

export default App;
