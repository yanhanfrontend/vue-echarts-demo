import { createRouter, createWebHistory } from 'vue-router'
import caiZhengZiJinChengJieFenXi from '../views/01caiZhengZiJinChengJieFenXi/index.vue'
import caiZhengYeWuKeHuYingXiaoFenXi from '../views/02caiZhengYeWuKeHuYingXiaoFenXi/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/caiZhengZiJinChengJieFenXi'
    },
    {
      path: '/caiZhengZiJinChengJieFenXi',
      name: 'caiZhengZiJinChengJieFenXi',
      component: caiZhengZiJinChengJieFenXi
    },
    {
      path: '/caiZhengYeWuKeHuYingXiaoFenXi',
      name: 'caiZhengYeWuKeHuYingXiaoFenXi',
      component: caiZhengYeWuKeHuYingXiaoFenXi
    }
  ]
})

export default router