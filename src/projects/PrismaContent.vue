<template>
  <div class="w-[80vw] m-auto flex flex-col items-center">
    <div class=" flex flex-col items-center">
      <div class="w-[80vw] flex justify-between">
        <div>     
          <h4>DESSIN</h4>
          <img class="projImg bg-gris" src="../assets/PRISMA/DessinPrisma.jpeg" alt="projet prisma">
        </div>
        <div class="flex flex-col items-end">
          <h4>ÉLÉMENTS GRAPHIQUES</h4>
          <img class="projImg" src="../assets/PRISMA/PosterMockupPrisma.png" alt="projet prisma"></div>
      </div>
      
      <div class="w-[80vw] flex justify-between">
        <div>     
          <h4>LOGO</h4>
          <img class="projImg bg-gris" src="../assets/PRISMA/LogoPrisma.png" alt="projet prisma">
        </div>
        <div class="flex flex-col items-end">
          <h4>MOCKUP</h4>
          <img class="projImg" src="../assets/PRISMA/Prisma2Mockup.png" alt="projet prisma"></div>
      </div>
    </div>

    <p>
      J'ai personnellement conçu ce logo dans le cadre d'un projet personnel fictif pour une marque spécialisée dans les affiches de design. Mon objectif était de créer un logo à la fois simple et distinctif, capable d'être facilement reconnu et mémorable. J'ai choisi une typographie moderne et épurée, caractérisée par des lignes nettes et des lettres bien définies.
    </p>
  </div>
</template>

<script>
export default {
  name: 'PrismaContent'
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