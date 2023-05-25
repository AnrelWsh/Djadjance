<template>
  <div class="flex 900:flex-row flex-col">
    <div class="flex 900:flex-col flex-row lg:w-[150vw] w-[100vw] 900:w-[200vw]">
      <img class="bg-mauveClair 900:h-[130dvh] w-[55vw] object-cover" src="../assets/A-PROPOS/DjadjaPics.jpg" alt="une très jolie photo de moi">
  
      <div class="h-[4px] bg-gris hidden 900:block"></div>
      <div class="h-auto w-[4px] bg-gris block 900:hidden"></div>
      
      <div class=" flex items-center justify-center 900:h-[70dvh] h-auto w-[40vw] m-auto">
        <img class="900:w-[55%]" src="../assets/A-PROPOS/djadjillus.svg" alt="une très jolie illustration de moi">
      </div>
    </div>
    
    <div class="w-[24px] bg-gris hidden 900:block"></div>
    <div class="h-[4px] bg-gris block 900:hidden"></div>
  
    <div class="flex flex-col">
      <div class="lg:p-32 p-16 h-auto 900:h-[130dvh]">
        <h2 class="text-[32px]">QUI SUIS-JE ?</h2>
        <p class="grotesk-reg text-[24px]">Je me présente, Yanis Djadja, étudiant en 2ème année à l'Institut de l'Internet et du Multimédia pour obtenir un Mastère en Direction Artistique.</p> 
        <p class="grotesk-reg text-[24px]">Passionné par l'univers créatif depuis plusieurs années maintenant, j'aspire à faire de ma passion mon métier. Je suis très curieux et ouvert d'esprit vis-à-vis du monde qui m'entoure. Pour moi, l'apprentissage quotidien est primordial, car cela nourrit mon inspiration et me permet de concevoir des projets originaux tout en transmettant efficacement les messages que je souhaite véhiculer à travers mes créations.</p>
        <p class="grotesk-reg text-[24px]">En dehors de mon parcours artistique, je consacre également une partie de mon temps au sport, qui me permet de me ressourcer et de renforcer mon mental.</p>
      </div>
  
      <div class="h-[4px] bg-gris hidden 900:block"></div>
  
      <div class="lg:p-32 p-16 pt-0 900:pt-16 h-auto 900:h-[70dvh]">
        <h2 class="text-[32px]">QU'EST-CE QUE JE FAIS ?</h2>
        <p class="grotesk-reg text-[24px]">J'ai des compétences dans l'utilisation d'applications telles que : After Effects, Premiere Pro, Illustrator, Figma, Cinema 4D, Photoshop et InDesign.</p> 
        <p class="grotesk-reg text-[24px]">Cependant, ce qui me passionne le plus, c'est le motion design et le montage vidéo.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AproposContent'
}
</script>
