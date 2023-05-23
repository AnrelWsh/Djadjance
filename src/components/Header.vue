<template>
  <nav class="flex flex-row items-stretch text-[24px] border-b-4 border-gris select-none">
    <div class="flex flex-row items-center w-[70vw] py-4">
      <a href="">
        <img class="w-[7vw] lg:mx-32 mx-8" src="../assets/Logo/Logo.png" alt="logo">  
      </a>
      <div class="flex flex-row sm:gap-16 gap-4 lg:px-16 px-8">
        <router-link class="navTitle" to="/accueil">Accueil</router-link>
        <router-link class="navTitle" to="/projets">Projets</router-link>
        <router-link class="navTitle" to="/apropos">A propos</router-link>
      </div>
    </div>

    <div class="w-[4px] bg-gris"></div>
   
    <div class="m-auto py-4">
      <router-link class="contactTitle" to="/contact">Me contacter</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: 'Header'
}
</script>
