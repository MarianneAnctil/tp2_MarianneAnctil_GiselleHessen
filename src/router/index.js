import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: HomeView,
      meta: {
        title: 'TP2 - Accueil',
      },
    },
    {
      path: '/movie/:id',
      name: 'movie-details',
      component: () => import('../views/MovieDetailsView.vue'),
      meta: {
        title: 'TP2 - Détails du film',
      },
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
