<template>
  <nav id="projetsNav" class="flex gap-8 m-[8vw] text-2xl">
    <router-link to="/projets">
      All
    </router-link>

    <router-link to="/motion-design">
      Motion Design
    </router-link>

    <router-link to="/prints">
      Prints
    </router-link>

    <router-link to="/ux-ui">
      UX/UI
    </router-link>

    <router-link to="/logos">
      Logos
    </router-link>

    <router-link to="/montages">
      Montages
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'ProjetsNav'
}
</script>
