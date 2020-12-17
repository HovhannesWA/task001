import Vue from "vue";
import VueRouter from "vue-router";

import FormContainer from "./form_components/FormContainer.vue";
import Currency from './currency_components/Currency.vue'

Vue.use(VueRouter);

const routes = [
  { path: "/", component: FormContainer },
  { path: "/currency", component: Currency }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
