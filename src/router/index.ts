/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

// const routes = [
//   {
//     path: "/squad",
//     name: "Squad",
//     component: () => import("@/pages/analyse.vue"),
//   },
// ]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes,
  extendRoutes: setupLayouts,
})

export default router
