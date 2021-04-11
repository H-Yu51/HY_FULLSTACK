import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'home',
    component: Home
  },
  {
    path:"/login",
    name:"login",
    component:() => import ("@/views/Login.vue") // 按需引入
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
