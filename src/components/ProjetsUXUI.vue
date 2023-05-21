<template>
  <BigTitle title="PROJETS - UX/UI" />
  <ProjetsNav />

  <div class="projImgDiv">
    <router-link class="projLink" to="/maker-world">
      <img class="projImg" src="../assets/MAKERWORD/minia.png" alt="projet maker world">
      <p class="projTextCat">INDESIGN & PHOTOSHOP</p>
      <p class="projTextTitre">MAKER WORLD</p>
    </router-link>
  </div>
</template>

<script>
import BigTitle from '../components/BigTitle.vue'
import ProjetsNav from '../components/ProjetsNav.vue'

export default {
  name: 'ProjetsUXUI',
  components: {
    BigTitle,
    ProjetsNav
  }
}
</script>
