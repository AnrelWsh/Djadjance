<template>
  <div class="flex flex-row border-b-4 border-gris h-[54.5vh]">
    <div class=" text flex flex-col justify-center lg:w-[50vw] w-[70vw] md:p-24 p-12">
      <h2>BIENVENUE SUR MON SITE,</h2>
      <p class="grotesk-reg">Bonjour, je m'appelle Yanis Djadja, je suis étudiant à l'IIM en direction artistique, Interactivité et UX/UI !</p>
    </div>

    <div class="w-[4px] bg-gris"></div>

    <div class="lg:w-[50vw] w-[30vw] bg-mauveClair"></div>
  </div>
</template>

<script>
export default {
  name: 'HomePrez'
}
</script>

<style scoped>
 .text{
  font-size: 32px;
 }

 @media screen and (max-width: 900px) {
  .text{
    font-size: 24px;
   }
 }

 @media screen and (max-width: 400px) {
  .text{
    font-size: 20px;
   }
 }
</style>
