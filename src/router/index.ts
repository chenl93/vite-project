import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'
import Home from '@/views/home.vue'
import Vuex from '@/views/vuex.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios.vue') // 懒加载组件
  },
  {
    path: '/lifecycleHooks',
    name: 'lifecycleHooks',
    component: () => import('@/views/lifecycleHooks.vue') // 懒加载组件
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import('@/views/watch.vue') // 懒加载组件
  },
  {
    path: '/watchEffect',
    name: 'watchEffect',
    component: () => import('@/views/watchEffect.vue') // 懒加载组件
  },
  {
    path: '/module',
    name: 'module',
    component: () => import('@/views/module.vue') // 懒加载组件
  },
  {
    path: '/teleport',
    name: 'teleport',
    component: () => import('@/views/teleport.vue') // 懒加载组件
  },
  {
    path: '/suspense',
    name: 'suspense',
    component: () => import('@/views/suspense.vue') // 懒加载组件
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
