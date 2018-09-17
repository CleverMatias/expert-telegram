import Vue from 'vue';
import Router from 'vue-router';
import Header from '@/components/templates/Header';

Vue.use(Router);

import routes from '@/routes';

export default new Router({
  routes,
});
