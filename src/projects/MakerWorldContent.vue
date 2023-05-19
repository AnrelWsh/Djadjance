<template>
  <div class="w-[80vw] m-auto flex flex-col items-center">     
    <div class="w-[80vw] flex justify-between">
      <div>     
        <h4>DESSIN</h4>
        <img class="projImg bg-gris" src="../assets/MAKERWORD/iPhone-12-Pro-Max-Mockup-1.png" alt="projet makerworld">
      </div>
      <div class="flex flex-col items-end">
        <h4>VECTORISATION</h4>
        <img class="projImg" src="../assets/MAKERWORD/iPhone-12-Pro-Max-Mockup-4.png" alt="projet makerworld">
      </div>
    </div>

    <p>
      Dans le cadre de mon projet scolaire fictif, j'ai créé une application pour les créateurs de contenu tels que les éditeurs et les graphistes spécialisés dans l'univers japonais. Pour concevoir l'interface de cette application, je me suis inspiré de l'interface de "TikTok" pour plusieurs raisons.
    </p>
    <p>
      Tout d'abord, l'interface de TikTok est connue pour sa simplicité et son accessibilité, ce qui permet aux utilisateurs de naviguer facilement à travers le contenu. J'ai voulu offrir une expérience similaire aux utilisateurs de mon application, en mettant l'accent sur une interface intuitive.
    </p>
    <p>
      Ensuite, TikTok propose une mise en page centrée sur le contenu, mettant en avant les vidéos de manière visuellement attrayante. J'ai trouvé cette approche efficace pour mettre en valeur le travail des créateurs, c'est pourquoi j'ai adopté une mise en page similaire dans mon application, en mettant en avant les créations graphiques et les éditions des utilisateurs.
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