import Vue from 'vue'
import Router from 'vue-router'
import theme from '@/pages/theme' // 主题
import about from '@/pages/about' // 关于
import home from '@/pages/home' // 主页
import team from '@/pages/team' // 团队
import teachingConcept from '@/pages/teachingConcept' // 教学理念

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/theme',
      name: 'theme',
      component: theme
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/team',
      name: 'team',
      component: team
    },
    {
      path: '/teachingConcept',
      name: 'teachingConcept',
      component: teachingConcept
    },
  ]
})
