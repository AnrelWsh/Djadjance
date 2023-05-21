<template>
  <BigTitle title="PROJETS - LOGOS" />
  <ProjetsNav />

  <div>
    <div class="projImgDiv">   
      <router-link class="projLink" to="/prisma">
        <img class="projImg" src="../assets/PRISMA/Prisma2Mockup.png" alt="projet prisma">
        <p class="projTextCat">ILLUSTRATOR</p>
        <p class="projTextTitre">PRISMA</p>
      </router-link>

      <router-link class="projLink" to="/la-rueilloise">
        <img class="projImg" src="../assets/LA-RUEILLOISE/MockupLarueilloise.png" alt="projet la rueilloise">
        <p class="projTextCat">INDESIGN & PHOTOSHOP</p>
        <p class="projTextTitre">LA RUEILLOISE</p>
      </router-link>
    </div>


    <div class="projImgDiv">     
      <router-link class="projLink" to="/blossom">
        <img class="projImg" src="../assets/BLOSSOM/BlossomMockup.png" alt="projet blossom">
        <p class="projTextCat">ILLUSTRATOR</p>
        <p class="projTextTitre">BLOSSOM</p>
      </router-link>
      
      <router-link class="projLink" to="/water-polo">
        <img class="projImg" src="../assets/WATER-POLO/WaterpoloMockup.png" alt="projet water-polo">
        <p class="projTextCat">INDESIGN & PHOTOSHOP</p>
        <p class="projTextTitre">LOGO WATER-POLO</p>
      </router-link>
    </div>    
  </div>
</template>

<script>
import BigTitle from '../components/BigTitle.vue'
import ProjetsNav from '../components/ProjetsNav.vue'

export default {
  name: 'ProjetsLogos',
  components: {
    BigTitle,
    ProjetsNav
  }
}
</script>
