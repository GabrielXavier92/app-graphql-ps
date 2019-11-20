import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./config/apolloServer";

import Routes from './routes'

import { SnackbarProvider } from 'notistack';
import { SnackbarUtilsConfigurator } from './utils/snack';
import { Container } from "@material-ui/core";

import CssBaseline from '@material-ui/core/CssBaseline';

const App: React.FC = () => {
	return (

		<ApolloProvider client={client}>
			<SnackbarProvider maxSnack={8} autoHideDuration={2000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
				<SnackbarUtilsConfigurator />
				<Container component="main" maxWidth="xs">
					<CssBaseline />
					<Router>
						<Routes />
					</Router>
				</Container>
			</SnackbarProvider>
		</ApolloProvider>
	);
};

export default App;
