import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import theme from '@/pages/theme'
import about from '@/pages/about'

Vue.use(Router)

export default new Router({
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
  ]
})
