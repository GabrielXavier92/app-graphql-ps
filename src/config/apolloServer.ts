
import ApolloClient from "apollo-client";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from 'apollo-link-error';

import SnackbarUtils from '../utils/snack';

import history from '../utils/history';

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

	if (graphQLErrors) {
		for (let err of graphQLErrors) {
			console.log(err)
			if (err.extensions!.code === 'UNAUTHENTICATED') {
				SnackbarUtils.error(err.message)
				localStorage.clear()
				history.replace('/login')
			} else if (err.extensions!.code === 'BAD_USER_INPUT') {
				err.extensions!.errors.map((er: any) => {
					SnackbarUtils.error(er.message)
					return er
				})
			}
		}
	}
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
