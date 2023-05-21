<template>
  <BigTitle title="PROJETS" />
  <ProjetsNav />

  <div>
    <div class="projVid projLink">
      <img class="video-minia" src="../assets/HOMEPAGE/ShowReel.png" alt="projet vidéo showreel">
      <div class="modal" id="modal1"> 
        <div id="modal-content">
          <iframe src="https://player.vimeo.com/video/827615317?h=a8ad9f60cc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen;" allowfullscreen style="width:66vw;height:80vh;" title="ShowReel"></iframe>
        </div>
      </div>
      <p class="projTextCat">AFTER EFFECT & ILLUSTRATOR</p>
      <p class="projTextTitre">SHOWREEL</p>
    </div>

    <div class="projImgDiv">
      <router-link class="projLink" to="/prisma">
        <img class="projImg" src="../assets/PRISMA/Prisma2Mockup.png" alt="projet prisma">
        <p class="projTextCat">ILLUSTRATOR</p>
        <p class="projTextTitre">PRISMA</p>
      </router-link>

      <router-link class="projLink" to="/magazine-kenzo">
        <img class="projImg" src="../assets/Kenzo/PrintMockup.png" alt="projet kenzo">
        <p class="projTextCat">INDESIGN & PHOTOSHOP</p>
        <p class="projTextTitre">MAGAZINE KENZO</p>
      </router-link>
    </div>

    <div class="projVid projLink">
      <img class="video-minia !object-center" src="../assets/HOMEPAGE/ShortAnim-(2).png" alt="projet vidéo short anim 2">
      <div class="modal" id="modal2"> 
        <div id="modal-content">
          <iframe src="https://player.vimeo.com/video/827723781?h=18245a6560&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen" allowfullscreen style="width:21vw;height:80vh;" title="Short Animation 2"></iframe>
        </div>
      </div>
      <p class="projTextCat">AFTER EFFECT & ILLUSTRATOR</p>
      <p class="projTextTitre">SHORT ANIMATION 2</p>
    </div>

    <div class="projImgDiv">
      <router-link class="projLink" to="/la-rueilloise">
        <img class="projImg" src="../assets/LA-RUEILLOISE/MockupLarueilloise.png" alt="projet la rueilloise">
        <p class="projTextCat">INDESIGN & PHOTOSHOP</p>
        <p class="projTextTitre">LA RUEILLOISE</p>
      </router-link>
      
      <router-link class="projLink" to="/blossom">
        <img class="projImg" src="../assets/BLOSSOM/BlossomMockup.png" alt="projet blossom">
        <p class="projTextCat">ILLUSTRATOR</p>
        <p class="projTextTitre">BLOSSOM</p>
      </router-link>
    </div>    
    
    <div class="projVid projLink">
      <img class="video-minia" src="../assets/HOMEPAGE/CLIPDEDY1.png" alt="projet vidéo clip habituer">
      <div class="modal" id="modal3"> 
        <div id="modal-content">
          <iframe src="https://player.vimeo.com/video/827617605?h=3f67b3097b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen" allowfullscreen style="width:66vw;height:80vh;" title="DEDY - HABITUER"></iframe>
        </div>
      </div>
      <p class="projTextCat">AFTER EFFECT & PREMI</p>
      <p class="projTextTitre">CLIP - HABITUER</p>
    </div>

    <div class="projImgDiv">
      <router-link class="projLink" to="/maker-world">
        <img class="projImg" src="../assets/MAKERWORD/minia.png" alt="projet maker world">
        <p class="projTextCat">INDESIGN & PHOTOSHOP</p>
        <p class="projTextTitre">MAKER WORLD</p>
      </router-link>
      
      <router-link class="projLink" to="/water-polo">
        <img class="projImg" src="../assets/WATER-POLO/WaterpoloMockup.png" alt="projet water-polo">
        <p class="projTextCat">INDESIGN & PHOTOSHOP</p>
        <p class="projTextTitre">LOGO WATER-POLO</p>
      </router-link>
    </div>

    <div class="projVid projLink">
      <img class="video-minia !object-center" src="../assets/HOMEPAGE/ShortAnim.png" alt="projet vidéo short animation">
      <div class="modal" id="modal4"> 
        <div id="modal-content">
          <iframe src="https://player.vimeo.com/video/827722526?h=244e883e19&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen" allowfullscreen style="width:21vw;height:80vh;" title="Short Animation"></iframe>
        </div>
      </div>
      <p class="projTextCat">AFTER EFFECT & ILLUSTRATOR</p>
      <p class="projTextTitre">SHORT ANIMATION</p>
    </div>

    <div class="projVid projLink">
      <img class="video-minia !object-[20%_21.8%]" src="../assets/HOMEPAGE/ShortAnim-(3).png" alt="projet vidéo short anim 3">
      <div class="modal" id="modal4"> 
        <div id="modal-content">
          <iframe src="https://player.vimeo.com/video/827725953?h=9e636edb9c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen" allowfullscreen style="width:21vw;height:80vh;" title="Short Animation 3"></iframe>
        </div>
      </div>
      <p class="projTextCat">AFTER EFFECT & ILLUSTRATOR</p>
      <p class="projTextTitre">SHORT ANIMATION 3</p>
    </div>
  </div>
</template>

<script>
import BigTitle from '../components/BigTitle.vue'
import ProjetsNav from '../components/ProjetsNav.vue'

export default {
  name: 'ProjetsAll',
  components: {
    BigTitle,
    ProjetsNav
  },
  mounted() {
    var modals = document.querySelectorAll(".modal");
    var vid = document.querySelectorAll(".projVid");

    vid.forEach(function(element, index) {
      element.addEventListener("click", function(event) {
        modals[index].style.display = "block";
      });
    });

    window.addEventListener("click", function(event) {
      modals.forEach(function(modal) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      });
    });
  }
}
</script>
