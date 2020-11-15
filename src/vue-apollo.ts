import Vue from "vue";
import VueApollo from "vue-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

Vue.use(VueApollo);

const uri =
  process.env.NODE_ENV === "production"
    ? process.env.VUE_APP_PRODUCTION_URI
    : process.env.VUE_APP_LOCAL_URI;

const httpLink = createHttpLink({
  uri: uri
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

export default apolloProvider;
