import React from "react";
import { Router } from "react-router-dom";

import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./config/apolloServer";

import Routes from './routes'
import history from './utils/history';

import { SnackbarProvider } from 'notistack';
import { SnackbarUtilsConfigurator } from './utils/snack';
import CssBaseline from '@material-ui/core/CssBaseline';

const App: React.FC = () => {
	return (

		<ApolloProvider client={client}>
			<SnackbarProvider maxSnack={8} autoHideDuration={2000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
				<SnackbarUtilsConfigurator />
				<CssBaseline />
				<Router history={history}>
					<Routes />
				</Router>
			</SnackbarProvider>
		</ApolloProvider>
	);
};

export default App;
