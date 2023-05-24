<template>
  <div class="w-[80vw] m-auto flex flex-col items-center">
    <div class="w-[80vw] flex justify-between">
      <div>     
        <h4>LOGO</h4>
        <img class="projImg bg-blanc !object-contain" src="../assets/WATER-POLO/LogoWaterPolo.png" alt="projet water-polo">
      </div>
      <div class="flex flex-col items-end">
        <h4>MOCKUP</h4>
        <img class="projImg" src="../assets/WATER-POLO/WaterpoloMockup.png" alt="projet water-polo">
      </div>
    </div>

    <p>
      J'ai conçu ce logo, dans le cadre d'un projet scolaire, pour la branche "water-polo" de la Fédération Française de Natation. Il met en scène de manière simple et élégante deux mains prêtes à saisir une balle de water-polo. Les deux mains symbolisent l'esprit de collaboration et d'équipe, reflétant ainsi parfaitement l'essence de ce sport. Ce logo me tient particulièrement à cœur, étant un ancien poloïste (joueur de water-polo).
    </p>
  </div>
</template>

<script>
export default {
  name: 'WaterPoloContent'
}
</script>

<style scoped>

h4{
  font-size: 32px;
  line-height: 1;
  margin-top: 32px;
}

p{
  font-size: 32px;
  font-family: "Grotesk-Reg";
  margin-top: 64px;
  line-height: 1;
}

@media screen and (max-width: 900px) {
  h4{
    font-size: 26px;
  }
  p{
    font-size: 24px;
  }
}
</style>