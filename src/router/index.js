import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Mission from '../views/Mission.vue'
import CoreValues from '../views/CoreValues.vue'
import Clients from '../views/Clients.vue'
const routes = [
  { path: '/', component: About },
  { path: '/services', component: Services },
{ path: '/mission', component: Mission },
{ path:'/values', component: CoreValues},
{ path:'/clients', component: Clients}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
