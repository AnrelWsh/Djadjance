<template>
  <Header />
  <HomePrez />
</template>

<script>
import Header from './components/Header.vue'
import HomePrez from './components/HomePrez.vue'

export default {
  name: 'AccueilVue',
  components: {
    Header,
    HomePrez
  }
}
</script>
