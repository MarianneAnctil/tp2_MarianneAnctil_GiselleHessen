import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: HomeView
    },
    // {
    //   path: '/movies',
    //   name: 'movies',
    //   component: () => import('../views/ProductsView.vue')
    // }
    {
      path: '/movie/:id',
      name: 'movie',
      component: () => import('../views/MovieDetailsView.vue'),
      props: castRouteParams
    },
  ],
});

function castRouteParams(route) {
  return {
    id: Number(route.params.id),
  };
}

export default router;
