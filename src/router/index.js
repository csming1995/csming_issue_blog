import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: () => import('@/views/home/index'),
          name: 'Home',
          meta: { title: 'Home', icon: 'home', affix: true }
        },
        {
          path: 'about',
          component: () => import('@/views/about/index'),
          name: 'About',
          meta: { title: 'About', icon: 'about', affix: true }
        }
      ]
    }
  ]
})
