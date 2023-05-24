<template>
  <div class="w-[80vw] m-auto flex flex-col items-center">
    <div class=" flex md:flex-col flex-col-reverse items-center">
      <div>
        <h4>DESSIN</h4>
        <img class="projImg" src="../assets/LA-RUEILLOISE/DessinRueilloise.jpg" alt="projet la rueilloise">
      </div>
      <div class="w-[80vw] flex justify-between">
        <div>     
          <h4>LOGO</h4>
          <img class="projImg bg-blanc" src="../assets/LA-RUEILLOISE/LogoRueilloise.png" alt="projet la rueilloise">
        </div>
        <div class="flex flex-col items-end">
          <h4>MOCKUP</h4>
          <img class="projImg" src="../assets/LA-RUEILLOISE/MockupLarueilloise.png" alt="projet la rueilloise"></div>
      </div>
    </div>

    <p>
      Ce logo, je l'ai conçu dans le cadre d'une B.A.P (Bourse aux Projets) où nous étions un groupe de 8 personnes travaillant pour le Curious Lab' et ayant pour problématique : "Comment maintenir la piétonisation du centre-ville de Rueil-Malmaison tout en garantissant son attractivité ?". Pour répondre à cette problématique, nous avons créé une marque exclusive à Rueil-Malmaison, La Rueilloise, chargée de créer et de gérer des événements tout en communiquant de manière unique.
    </p>
    <p>
      Pour ce logo j’ai décidé d’utiliser la colombe qui est un animal qui représente la liberté et la paix combiné avec un passage piéton. Ici le passage piéton représente la sécurité et la protection des piétons, mon logo a pour but de symboliser la création d’un environnement paisible et sûr pour les piétons.
    </p>
  </div>
</template>

<script>
export default {
  name: 'RueilloiseContent'
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