<template>
  <nav class="flex gap-8 m-[8vw]">
    <router-link class="projLink" to="/all">
      <p class="text-2xl">All</p>
    </router-link>

    <router-link class="projLink" to="/motion-design">
      <p class="text-2xl">Motion Design</p>
    </router-link>

    <router-link class="projLink" to="/prints">
      <p class="text-2xl">Prints</p>
    </router-link>

    <router-link class="projLink" to="/ux-ui">
      <p class="text-2xl">UX/UI</p>
    </router-link>

    <router-link class="projLink" to="/logos">
      <p class="text-2xl">Logos</p>
    </router-link>

    <router-link class="projLink" to="/montages">
      <p class="text-2xl">Montages</p>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'ProjetsNav'
}
</script>
