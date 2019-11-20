
import ApolloClient from "apollo-client";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from 'apollo-link-error';

import SnackbarUtils from '../utils/snack';

const httpLink = createHttpLink({
	uri: "http://localhost:4000/"
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem("token");
	return {
		headers: {
			...headers,
			token: token ? `${token}` : ""
		}
	};
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
	graphQLErrors!.map((error: any) => {
		if (error.code === "BAD_USER_INPUT") {
			error.errors.map((er: any) => {
				SnackbarUtils.error(er.message)
			})
		} else if (error.code === "NAO AUTORIZADO CORRIGIR") {

		} else {
			SnackbarUtils.error(error.message)
		}
	})
	networkError && console.log(networkError)
})

export const client = new ApolloClient({
	link: errorLink.concat(authLink.concat(httpLink)),
	cache: new InMemoryCache(),
	defaultOptions: {
		watchQuery: {
			fetchPolicy: "cache-and-network"
		}
	}
});
