import { createRouter, createWebHashHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProjetsView from '../views/ProjetsView.vue'
import AproposView from '../views/AproposView.vue'
import ContactView from '../views/ContactView.vue'

import ProjetsAll from '../components/ProjetsAll.vue'
import ProjetsMotion from '../components/ProjetsMotion.vue'
import ProjetsPrints from '../components/ProjetsPrints.vue'
import ProjetsUXUI from '../components/ProjetsUXUI.vue'
import ProjetsLogos from '../components/ProjetsLogos.vue'
import ProjetsMontages from '../components/ProjetsMontages.vue'

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
    path: '/all',
    name: 'all',
    component: ProjetsAll,
  },
  {
    path: '/motion-design',
    name: 'motion-design',
    component: ProjetsMotion,
  },
  {
    path: '/prints',
    name: 'prints',
    component: ProjetsPrints,
  },
  {
    path: '/ux-ui',
    name: 'ux-ui',
    component: ProjetsUXUI,
  },
  {
    path: '/logos',
    name: 'logos',
    component: ProjetsLogos,
  },
  {
    path: '/montages',
    name: 'montages',
    component: ProjetsMontages,
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
