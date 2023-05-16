<template>
  <HomePrez />
  <AccueilContent />
</template>

<script>
import HomePrez from '../components/HomePrez.vue'
import AccueilContent from '../components/AccueilContent.vue'

export default {
  name: 'AccueilVue',
  components: {
    HomePrez,
    AccueilContent
  }
}
</script>
