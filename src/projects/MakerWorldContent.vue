<template>
  <div class="w-[80vw] m-auto flex flex-col items-center">
    <div class=" flex flex-col items-center">
      <div>
        <h4>DESSIN</h4>
        <img class="projImg" src="../assets/BLOSSOM/DessinBlossom.jpeg" alt="projet makerworld">
      </div>
      <div class="w-[80vw] flex justify-between">
        <div>     
          <h4>LOGO</h4>
          <img class="projImg bg-gris" src="../assets/BLOSSOM/LogoBlossom.png" alt="projet makerworld">
        </div>
        <div class="flex flex-col items-end">
          <h4>MOCKUP</h4>
          <img class="projImg" src="../assets/BLOSSOM/BlossomMockup.png" alt="projet makerworld"></div>
      </div>
    </div>

    <p>
      Blossom est une marque de vêtements fictive que j'ai créé pour un projet scolaire. Le logo incarne la symbolique des trois pétales de cerisier rose : la beauté, la créativité et la confiance, créant ainsi une image de style raffiné et de sophistication pour ma marque de vêtements.
    </p>
  </div>
</template>

<script>
export default {
  name: 'MakerWorldContent'
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
</style>