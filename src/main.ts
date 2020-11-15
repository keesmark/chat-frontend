import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import ApolloProvider from "@/vue-apollo";
import "@/assets/tailwind.css";
import VueApollo from "vue-apollo";
import '@/assets/tailwind.css';

Vue.config.productionTip = false;
Vue.use(VueApollo);

new Vue({
  router,
  store,
  apolloProvider: ApolloProvider,
  render: h => h(App)
}).$mount("#app");
