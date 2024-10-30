import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ThreeDimension from '@/views/ThreeDimension.vue'
import FourDimensional from '@/views/FourDimensional.vue'
import Modeling from '@/views/Modeling.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/three-dimensional",
      name: "Расчёт 3-х мерной матрицы",
      component: ThreeDimension,
    },
    {
      path: "/four-dimensional",
      name: "Расчёт 4-х мерной матрицы",
      component: FourDimensional,
    },
    {
      path: "/modeling",
      name: "modeling",
      component: Modeling,
    },
  ],
});

export default router
