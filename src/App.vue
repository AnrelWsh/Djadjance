<template>
  <Header />
  <AccueilVue />
</template>

<script>
import Header from './components/Header.vue'
import AccueilVue from './AccueilVue.vue'

export default {
  name: 'App',
  components: {
    Header,
    AccueilVue
  }
}
</script>
