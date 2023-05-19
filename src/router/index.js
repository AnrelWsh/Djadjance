import { createRouter, createWebHashHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProjetsView from '../views/ProjetsView.vue'
import AproposView from '../views/AproposView.vue'
import ContactView from '../views/ContactView.vue'

import Footer from '../components/Footer.vue'

import BlossomView from '../projects/BlossomView.vue'
import KenzoView from '../projects/KenzoView.vue'
import MakerWorldView from '../projects/MakerWorldView.vue'
import PrismaView from '../projects/PrismaView.vue'
import WaterPoloView from '../projects/WaterPoloView.vue'
import RueilloiseView from '../projects/RueilloiseView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AccueilView
  },
  {
    path: '/accueil',
    name: 'accueil',
    component: AccueilView
  },
  {
    path: '/projets',
    name: 'projets',
    component: ProjetsView
  },
  {
    path: '/apropos',
    name: 'apropos',
    component: AproposView
  },  
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { hideFooter: true }
  },
   


  {
    path: '/blossom',
    name: 'blossom',
    component: BlossomView
  },
  {
    path: '/magazine-kenzo',
    name: 'magazine-kenzo',
    component: KenzoView
  },
  {
    path: '/maker-world',
    name: 'maker-world',
    component: MakerWorldView
  },
  {
    path: '/prisma',
    name: 'prisma',
    component: PrismaView
  },
  {
    path: '/water-polo',
    name: 'water-polo',
    component: WaterPoloView
  },
  {
    path: '/la-rueilloise',
    name: 'la-rueilloise',
    component: RueilloiseView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})


export default router
