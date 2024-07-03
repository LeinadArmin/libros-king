import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store'; // Asegúrate de importar tu store
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue'; // Asegúrate de importar LoginView

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { requiresAuth: true } // Añadir esta línea
  },
  {
    path: '/libros',
    name: 'libros',
    component: () => import(/* webpackChunkName: "libros" */ '../views/LibrosView.vue'),
    meta: { requiresAuth: true } // Añadir esta línea
  },
  {
    path: '/libros/:id',
    name: 'libroDetalle',
    component: () => import(/* webpackChunkName: "libroDetalle" */ '../views/LibroDetalleView.vue'),
    props: true,
    meta: { requiresAuth: true } // Añadir esta línea
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      next({ name: 'login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
