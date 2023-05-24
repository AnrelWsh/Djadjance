<template>
  <nav id="projetsNav" class="flex md:flex-row flex-col items-center gap-8 m-[8vw] text-2xl">
    <div class="flex gap-8">
      <router-link to="/projets">
        All
      </router-link>
  
      <router-link to="/motion-design">
        Motion Design
      </router-link>
  
      <router-link to="/prints">
        Prints
      </router-link>
    </div>

    <div class="flex gap-8">
      <router-link to="/ux-ui">
        UX/UI
      </router-link>
  
      <router-link to="/logos">
        Logos
      </router-link>
  
      <router-link to="/montages">
        Montages
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'ProjetsNav'
}
</script>
