import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
import Vue from 'vue';

export const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient({
    uri:
      process.env.VUE_APP_DOTY_GRAPHQL_ENDPOINT ||
      'http://localhost:8080/v1/graphql',
  }),
});

Vue.use(VueApollo);
