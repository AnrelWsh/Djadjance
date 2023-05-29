<template>
  <nav class=" 900:flex hidden flex-row items-stretch text-[24px] border-b-4 border-gris select-none  ">
    <div class="flex flex-row items-center w-[70vw] py-4">
      <a href="">
        <img class="w-[7vw] lg:mx-32 mx-8" src="../assets/Logo/Logo.png" alt="logo">  
      </a>
      <div class="flex flex-row justify-evenly w-[50vw] sm:gap-16 gap-4 lg:px-16 px-8">
        <router-link class="navTitle" to="/accueil">Accueil</router-link>
        <router-link class="navTitle" to="/projets">Projets</router-link>
        <router-link class="navTitle" to="/apropos">A propos</router-link>
      </div>
    </div>

    <div class="w-[4px] bg-gris"></div>
   
    <div class="m-auto py-4">
      <router-link class="contactTitle" to="/contact">Me contacter</router-link>
    </div>
  </nav>



  <div class="flex items-center justify-between 900:hidden p-4 border-b-4 border-gris">
    <a href="">
      <img class="w-[70px] lg:mx-32 mx-8" src="../assets/Logo/Logo.png" alt="logo">  
    </a>

    <div id="sidemenu">
      <button class="sidemenu__btn" v-on:click="navOpen=!navOpen" v-bind:class="{active:navOpen}">
          <span class="top"></span>
          <span class="mid"></span>
          <span class="bottom"></span>
        </button>
      <transition name="translateX">
        <nav v-show="navOpen">
          <div class="sidemenu__wrapper">
            <ul class="sidemenu__list">
              <li class="sidemenu__item">
                <router-link class="navTitle" to="/accueil">Accueil</router-link>
              </li>
              <li class="sidemenu__item">
                <router-link class="navTitle" to="/projets">Projets</router-link>
              </li>
              <li class="sidemenu__item">
                <router-link class="navTitle" to="/apropos">A propos</router-link>
              </li>
              <li class="sidemenu__item">
                <router-link class="contactTitle" to="/contact">Me contacter</router-link>
              </li>
            </ul>
            
            <div class="w-[90%] h-[3px] m-auto bg-blanc"></div>
  
            <div class="flex">
              <a href="https://www.linkedin.com/in/yanis-djadja-006131276/" class="m-8">
                <img src="../assets/FOOTER/petitLinkedin.svg" alt="linkedin logo">
              </a>
              <a href="https://www.behance.net/yanisdjadja1" class="m-8">
                <img src="../assets/FOOTER/petitBehance.svg" alt="behance logo">
              </a>
            </div>
          </div>
        </nav>
      </transition>
    </div>
  </div>

  <router-view/>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      navOpen: false,
    };
  },
  // mounted(){
  //   if(this.navOpen == true){
  //     document.querySelector(".sidemenu__btn").style.position = "static"
  //   }else{
  //     document.querySelector(".sidemenu__btn").style.position = "relative"
  //   }
  // }
};
</script>



<style scoped>
#sidemenu nav {
  width: 300px;
  background: #373A40;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 99;
}

#sidemenu .sidemenu__btn {
  display: block;
  width: 50px;
  height: 50px;
  border: none;
  position: relative;
  top: 0;
  right: 0;
  z-index: 100;
  appearance: none;
  cursor: pointer;
  outline: none;
}

#sidemenu .sidemenu__btn span {
  display: block;
  width: 30px;
  height: 3px;
  border-radius: 25px;
  margin: auto;
  background: #373A40;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all .4s ease;
}

#sidemenu .sidemenu__btn.active span{
  background: rgba(235, 235, 242, 1);
}

#sidemenu .sidemenu__btn.active{
  position: fixed;
  top: 25px;
  right: 25px;
}

#sidemenu .sidemenu__btn span.top {
  transform: translateY(-8px);
}

#sidemenu .sidemenu__btn span.bottom {
  transform: translateY(8px);
}

#sidemenu .sidemenu__btn.active span.top {
  transform: rotate(-45deg);
}

#sidemenu .sidemenu__btn.active .mid {
  transform: translateX(-20px) rotate(360deg);
  opacity: 0;
}

#sidemenu .sidemenu__btn.active span.bottom {
  transform: rotate(45deg);
}

#sidemenu .sidemenu__wrapper {
  padding-top: 50px;
  height: 100dvh;
}

#sidemenu .sidemenu__list {
  padding-top: 50px;
  list-style: none;
  padding: 0;
  margin: 0;
}

#sidemenu .sidemenu__item a {
  text-decoration: none;
  line-height: 1.6em;
  font-size: 1.6em;
  padding: .5em;
  margin: 24px 0;
  display: block;
  color: rgba(235, 235, 242, 1);
  transition: .4s ease;
}


.translateX-enter {
  transform: translateX(200px);
  opacity: 0;
}

.translateX-enter-active,
.translateX-leave-active {
  transform-origin: top left 0;
  transition: .2s ease;
}

.translateX-leave-to {
  transform: translateX(200px);
  opacity: 0;
}

</style>