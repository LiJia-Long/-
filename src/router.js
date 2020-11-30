import Vue from 'vue'
import Router from 'vue-router'
import Di from './components/Di.vue'
import Deng from './views/Deng.vue'
import Shou from './views/Shou.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shou',
      component: Shou
    },
  ]
})
