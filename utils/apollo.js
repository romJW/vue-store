import fetch from 'cross-fetch';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

export default new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    // You should use an absolute URL here
    uri: `${process.env.VITE_DIRECTUS_URL}/graphql`,
    fetch,
  }),
  cache: new InMemoryCache(),
})
