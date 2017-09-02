import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Invoice from '@/components/Invoice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/invoices',
      name: 'Invoice',
      component: Invoice
    }
  ]
})
