<template>
  <BigTitle title="PROJETS" />
  <ProjetsNav />
  <ProjetsAll />
</template>

<script>
import BigTitle from '../components/BigTitle.vue'
import ProjetsNav from '../components/ProjetsNav.vue'
import ProjetsAll from '../components/ProjetsAll.vue'

export default {
  name: 'ProjetsView',
  components: {
    BigTitle,
    ProjetsNav,
    ProjetsAll
  }
}
</script>
