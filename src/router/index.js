import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SoftTech from '@/components/SoftTech'
import SoftTechHome from '@/components/SoftTechHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/softtech',
    	name:'SoftTech',
    	component: SoftTech
    },
    {
      path:'/home',
      name:'SoftTechHome',
      component: SoftTechHome
    }
  ]
})
