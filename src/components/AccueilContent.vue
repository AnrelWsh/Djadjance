<template>
  <div>

    <h2 class="text-[32px] m-12 text-center">MON SHOWREEL</h2>

    <div class="projVid">
      <a class="projLink" href="https://www.youtube.com/watch?v=fcf5cBcmLyI" data-lity>
        <img class="video-minia" src="../assets/HOMEPAGE/ShowReel.png" alt="projet vidéo showreel">
        <p class="projTextCat">AFTER EFFECT & ILLUSTRATOR</p>
        <p class="projTextTitre">SHOWREEL</p>
      </a>
      <!-- <iframe width="885" height="498" src="https://www.youtube.com/embed/fcf5cBcmLyI" title="Create a Custom Mouse Cursor In Webflow" frameborder="0" allow="accelerometer; autoplay; clipboard-write; web-share" allowfullscreen>
        <img src="../assets/HOMEPAGE/ShowReel.png" alt="showreel">
      </iframe> -->
    </div>

    <h2 class="text-[32px] m-12 text-center">MES TRAVAUX</h2>

    <div class="projImgDiv">
      <router-link class="projLink" to="/magazine-kenzo">
        <img class="projImg" src="../assets/Kenzo/PrintMockup.png" alt="projet kenzo">
        <p class="projTextCat">INDESIGN & PHOTOSHOP</p>
        <p class="projTextTitre">MAGAZINE KENZO</p>
      </router-link>

      <router-link class="projLink" to="/la-rueilloise">
        <img class="projImg" src="../assets/LA RUEILLOISE/MockupLarueilloise.png" alt="projet la rueilloise">
        <p class="projTextCat">INDESIGN & PHOTOSHOP</p>
        <p class="projTextTitre">LA RUEILLOISE</p>
      </router-link>
    </div>

    <div class="projVid">
      <a class="projLink" href="https://www.youtube.com/watch?v=fcf5cBcmLyI" data-lity>
        <img class="video-minia" src="../assets/HOMEPAGE/CLIPDEDY1.png" alt="projet vidéo clip habituer">
        <p class="projTextCat">AFTER EFFECT & PREMI</p>
        <p class="projTextTitre">CLIP - HABITUER</p>
      </a>
    </div>

    <div class="projImgDiv">
      <router-link class="projLink" to="/water-polo">
        <img class="projImg" src="../assets/WATER-POLO/WaterpoloMockup.png" alt="projet water-polo">
        <p class="projTextCat">INDESIGN & PHOTOSHOP</p>
        <p class="projTextTitre">LOGO WATER-POLO</p>
      </router-link>

      <router-link class="projLink" to="/maker-world">
        <img class="projImg" src="../assets/MAKERWORD/minia.png" alt="projet makerworld">
        <p class="projTextCat">INDESIGN & PHOTOSHOP</p>
        <p class="projTextTitre">MAKER WORLD</p>
      </router-link>
    </div>

    <div class="projVid">
      <a class="projLink" href="https://www.youtube.com/watch?v=fcf5cBcmLyI" data-lity>
        <img class="video-minia !object-center" src="../assets/HOMEPAGE/ShortAnim.png" alt="projet vidéo short animation">
        <p class="projTextCat">AFTER EFFECT & ILLUSTRATOR</p>
        <p class="projTextTitre">SHORT ANIMATION</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccueilContent'
}
</script>
