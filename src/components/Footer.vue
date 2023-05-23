<template>
  <div :class="{
    'mt-[10vw]': shouldApplyMargin,
    'text-2xl bg-gris p-[5vw] flex flex-col': true}">
    <div class="flex items-center gap-[10vw]">
      <div class="bg-mauveClair rounded-full w-[15vw] h-[15vw]">
        <img class="rounded-full w-[15vw] h-[15vw] object-none object-[80%_28%]" src="../assets/FOOTER/PhotoFooter.jpg" alt="jolie photo de moi">
      </div>

      <div class="flex flex-col gap-4">
        <div>
          <p class="text-[32px]"><span class="text-mauveClair">DJADJA</span> YANIS</p>
          <p> Motion Design</p>
        </div>

        <div class="flex items-center gap-4">
          <svg class="bg-blanc rounded-full p-[3px]" width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50.025 38.45C46.95 38.45 43.975 37.95 41.2 37.05C40.7653 36.9026 40.2978 36.8808 39.8512 36.9869C39.4046 37.093 38.997 37.3228 38.675 37.65L34.75 42.575C27.675 39.2 21.05 32.825 17.525 25.5L22.4 21.35C23.075 20.65 23.275 19.675 23 18.8C22.075 16.025 21.6 13.05 21.6 9.975C21.6 8.625 20.475 7.5 19.125 7.5H10.475C9.125 7.5 7.5 8.1 7.5 9.975C7.5 33.2 26.825 52.5 50.025 52.5C51.8 52.5 52.5 50.925 52.5 49.55V40.925C52.5 39.575 51.375 38.45 50.025 38.45Z" fill="#ADB8DC"/>
          </svg>
          <p class="leading-[0.5]">07 83 61 04 97</p>
        </div>
        <div class="flex items-center gap-4">
          <svg class="bg-blanc rounded-full p-[3px]" width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10H10C7.25 10 5.025 12.25 5.025 15L5 45C5 47.75 7.25 50 10 50H50C52.75 50 55 47.75 55 45V15C55 12.25 52.75 10 50 10ZM50 20L30 32.5L10 20V15L30 27.5L50 15V20Z" fill="#ADB8DC"/>
          </svg>
          <a href ="mailto: yanis.djadjapro@gmail.com">yanis.djadjapro@gmail.com</a>
        </div>
      </div>
    </div>


    <img class="w-[7vw] self-end mt-[-100px]" src="../assets/Logo/logo.svg" alt="logo">
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    shouldApplyMargin() {
      return this.$route.name !== 'apropos';
    }
  }
}
</script>

<style scoped>
p, a{
  color: rgba(235, 235, 242, 1);
}
</style>