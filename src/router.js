import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from './views/Dashboard.vue';
import Roles from './views/Roles.vue';
import Equipos from './views/Equipos.vue';
import Historial from './views/Historial.vue';
import Endpoints from './views/Endpoints.vue';
import Usuarios from './views/Usuarios.vue';
import Validaciones from './views/Validaciones.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/roles',
      name: 'roles',
      component: Roles,
    },
    {
      path: '/equipos',
      name: 'equipos',
      component: Equipos,
    },
    {
      path: '/historial',
      name: 'historial',
      component: Historial,
    },
    {
      path: '/endpoints',
      name: 'endpoints',
      component: Endpoints,
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: Usuarios,
    },
    {
      path: '/validaciones',
      name: 'validaciones',
      component: Validaciones,
    }, {
      path: '*',
      redirect: '/errors',
    },
  ],
});
