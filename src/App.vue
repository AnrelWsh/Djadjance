<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Header msg="header" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <h1 class="text-3xl font-bold underline font-2xl">
    Hello world!
  </h1>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header
  }
}
</script>
