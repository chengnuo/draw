import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import theme from '@/pages/theme'
import about from '@/pages/about'
import team from '@/pages/team'
import teachingConcept from '@/pages/teachingConcept'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
