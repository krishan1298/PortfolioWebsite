import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Mission from '../views/Mission.vue'
import CoreValues from '../views/CoreValues.vue'
import Clients from '../views/Clients.vue'
import Founder from '../views/Founder.vue'
import Careers from '../views/Careers.vue'

const routes = [
  { path: '/', component: About },
  { path: '/services', component: Services },
  { path: '/mission', component: Mission },
  { path: '/values', component: CoreValues },
  { path: '/clients', component: Clients },
  { path: '/founder', component: Founder },
  { path: '/careers', component: Careers }
]

const router = createRouter({
  // Tell Vue Router your app is hosted under /PortfolioWebsite
  history: createWebHistory(''),
  routes
})

export default router
