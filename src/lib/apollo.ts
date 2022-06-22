import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oh5rau089s01xl8fjvc1gv/master',
  cache: new InMemoryCache(),
});
