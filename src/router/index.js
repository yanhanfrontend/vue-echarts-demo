import { createRouter, createWebHistory } from 'vue-router'
import caiZhengZiJinChengJieFenXi from '../views/01caiZhengZiJinChengJieFenXi/index.vue'
import caiZhengYeWuKeHuYingXiaoFenXi from '../views/02caiZhengYeWuKeHuYingXiaoFenXi/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/index1'
    },
    {
      path: '/index1',
      name: 'caiZhengZiJinChengJieFenXi',
      component: caiZhengZiJinChengJieFenXi
    },
    {
      path: '/index2',
      name: 'caiZhengYeWuKeHuYingXiaoFenXi',
      component: caiZhengYeWuKeHuYingXiaoFenXi
    }
  ]
})

export default router