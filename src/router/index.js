import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

import auth from './middleware/auth'
import postExists from './middleware/postExists'
import middlewarePipeline from './middlewarePipeline'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('../views/Registration.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/blog/Blog.vue')
  },
  {
    path: '/blog/create',
    name: 'Add post',
    component: () => import('../views/blog/addPost.vue'),
    meta: {
      middleware: [auth],
    }
  },
  {
    path: '/blog/:postId',
    name: 'Post',
    component: () => import('../views/blog/Post.vue'),
    meta: {
      middleware: [auth, postExists]
    }
  },
  {
    path: '/blog/edit/:postId',
    name: 'Edit post',
    component: () => import('../views/blog/editPost.vue'),
    meta: {
      middleware: [auth, postExists]
    }
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/MyAccount.vue'),
    meta: {
      middleware: [auth],
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/NotFound.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
      return next()
  }
  
  const middleware = to.meta.middleware
  const context = {
      to,
      from,
      next,
      store
  }
  return middleware[0]({
      ...context,
      next: middlewarePipeline(context, middleware, 1)
  })
})

export default router
