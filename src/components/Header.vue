<template>
  <nav class="flex flex-row items-center text-[24px] border-b-4 border-gris">
    <div class="flex flex-row items-center w-[70vw] py-4">
      <a href="">
        <img class="w-[5vw] mx-32" src="../assets/Logo/Logo.png" alt="logo">  
      </a>
      <div class="flex flex-row gap-16 px-16">
        <a href="">
          <p class="navTitle">Accueil</p>
        </a>
        <a href="">
          <p class="navTitle">Projets</p>
        </a>
        <a href="">
          <p class="navTitle">À propos</p>
        </a>
      </div>
    </div>

    <div class="w-[4px] h-[16vh] bg-gris"></div>
   
    <div class="m-auto py-4">
      <a href="">
        <p class="contactTitle">Me contacter</p>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>
