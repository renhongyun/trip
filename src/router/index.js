/*
 * @Author: renhongyun
 * @Date: 2024-03-21 15:32:19
 */
import { createRouter, createWebHashHistory } from "vue-router";

 const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("../views/home/index.vue")
    },
    {
      path: "/favor",
      component: () => import("../views/favor/index.vue")
    },
    {
      path: "/order",
      component: () => import("../views/order/index.vue")
    },
    {
      path: "/message",
      component: () => import("../views/message/index.vue")
    },
    {
      path: "/city",
      component: () => import("../views/city/index.vue"),
      meta: {
        notShowTabbar: true
      }
    },
    {
      path: "/detail/:id",
      component: () => import("../views/detail/index.vue"),
      meta: {
        notShowTabbar: true
      }
    }
  ]
})
export default router