<template>
  <BigTitle title="PROJETS - MOTION DESIGN" />
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
      <img class="video-minia !object-center" src="../assets/HOMEPAGE/ShortAnim (2).png" alt="projet vidéo short anim 2">
      <div class="modal" id="modal2"> 
        <div id="modal-content">
          <iframe src="https://player.vimeo.com/video/827723781?h=18245a6560&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen" allowfullscreen style="width:21vw;height:80vh;" title="Short Animation 2"></iframe>
        </div>
      </div>
      <p class="projTextCat">AFTER EFFECT & ILLUSTRATOR</p>
      <p class="projTextTitre">SHORT ANIMATION 2</p>
    </div>

    <div class="projVid projLink">
      <img class="video-minia !object-center" src="../assets/HOMEPAGE/ShortAnim.png" alt="projet vidéo short animation">
      <div class="modal" id="modal3"> 
        <div id="modal-content">
          <iframe src="https://player.vimeo.com/video/827722526?h=244e883e19&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen" allowfullscreen style="width:21vw;height:80vh;" title="Short Animation"></iframe>
        </div>
      </div>
      <p class="projTextCat">AFTER EFFECT & ILLUSTRATOR</p>
      <p class="projTextTitre">SHORT ANIMATION</p>
    </div>

    <div class="projVid projLink">
      <img class="video-minia !object-[20%_21.8%]" src="../assets/HOMEPAGE/ShortAnim (3).png" alt="projet vidéo short anim 3">
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
  name: 'ProjetsMotion',
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
