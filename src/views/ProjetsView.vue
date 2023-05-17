<template>
  <BigTitle title="PROJETS" />
  <ProjetsNav />
  <ProjetsContent />
</template>

<script>
import BigTitle from '../components/BigTitle.vue'
import ProjetsNav from '../components/ProjetsNav.vue'
import ProjetsContent from '../components/ProjetsContent.vue'

export default {
  name: 'ProjetsView',
  components: {
    BigTitle,
    ProjetsNav,
    ProjetsContent
  }
}
</script>
