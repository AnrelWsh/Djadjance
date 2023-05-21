<template>
  <BigTitle title="PROJETS - PRINTS" />
  <ProjetsNav />

  <div class="projImgDiv">
    <router-link class="projLink" to="/magazine-kenzo">
      <img class="projImg" src="../assets/Kenzo/PrintMockup.png" alt="projet kenzo">
      <p class="projTextCat">INDESIGN & PHOTOSHOP</p>
      <p class="projTextTitre">MAGAZINE KENZO</p>
    </router-link>
  </div>
</template>

<script>
import BigTitle from '../components/BigTitle.vue'
import ProjetsNav from '../components/ProjetsNav.vue'

export default {
  name: 'ProjetsPrints',
  components: {
    BigTitle,
    ProjetsNav
  }
}
</script>
