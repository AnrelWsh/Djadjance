<template>
  <BigTitle title="PROJETS - MONTAGES" />
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
    
    <div class="projVid projLink">
      <img class="video-minia" src="../assets/HOMEPAGE/CLIPDEDY1.png" alt="projet vidéo clip habituer">
      <div class="modal" id="modal2"> 
        <div id="modal-content">
          <iframe src="https://player.vimeo.com/video/827617605?h=3f67b3097b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen" allowfullscreen style="width:66vw;height:80vh;" title="DEDY - HABITUER"></iframe>
        </div>
      </div>
      <p class="projTextCat">AFTER EFFECT & PREMI</p>
      <p class="projTextTitre">CLIP - HABITUER</p>
    </div>
  </div>
</template>

<script>
import BigTitle from '../components/BigTitle.vue'
import ProjetsNav from '../components/ProjetsNav.vue'

export default {
  name: 'ProjetsMontages',
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
