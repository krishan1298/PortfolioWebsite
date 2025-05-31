import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Mission from '../views/Mission.vue'
import CoreValues from '../views/CoreValues.vue'
import Clients from '../views/Clients.vue'
import Founder from '../views/Founder.vue'
import Careers from '../views/Careers.vue'
const routes = [
  { path: '/PortfolioWebsite/about-us', component: About },
  { path: '/PortfolioWebsite/services', component: Services },
{ path: '/PortfolioWebsite/mission', component: Mission },
{ path:'/PortfolioWebsite/values', component: CoreValues},
{ path:'/PortfolioWebsite/clients', component: Clients},
{ path:'/PortfolioWebsite/founder', component: Founder},
{ path:'/PortfolioWebsite/careers', component: Careers}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
