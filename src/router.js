import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('./components/Home/Home.vue')
  },
  {
    path: '/user',
    component: () => import('./components/User/User.vue'),
    meta: {
      requireAuth: true,
    }
  },
  {
    path: '/login',
    component: () => import('./components/Login/Login.vue')
  }
]
const router = new Router({
  base: process.env.BASE_URL,
  routes
})



router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next();
    }
    else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  else {
    next();
  }
})

export default router
