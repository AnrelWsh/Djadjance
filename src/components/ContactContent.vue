<template>
  <div>
    <div class="flex flex-col 900:flex-row 900:items-stretch items-center justify-around">
      <div class="littleBoxes">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50.025 38.45C46.95 38.45 43.975 37.95 41.2 37.05C40.7653 36.9026 40.2978 36.8808 39.8512 36.9869C39.4046 37.093 38.997 37.3228 38.675 37.65L34.75 42.575C27.675 39.2 21.05 32.825 17.525 25.5L22.4 21.35C23.075 20.65 23.275 19.675 23 18.8C22.075 16.025 21.6 13.05 21.6 9.975C21.6 8.625 20.475 7.5 19.125 7.5H10.475C9.125 7.5 7.5 8.1 7.5 9.975C7.5 33.2 26.825 52.5 50.025 52.5C51.8 52.5 52.5 50.925 52.5 49.55V40.925C52.5 39.575 51.375 38.45 50.025 38.45Z" fill="black"/>
        </svg>
        <p>07 83 61 04 97</p>
      </div>

      <div class="w-[5px] bg-gris hidden 900:block"></div>
      <div class="h-[5px] w-full bg-gris block 900:hidden"></div>

      <div class="littleBoxes 900:py-[10%] !py-[5%]">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 5C20.325 5 12.5 12.825 12.5 22.5C12.5 35.625 30 55 30 55C30 55 47.5 35.625 47.5 22.5C47.5 12.825 39.675 5 30 5ZM30 28.75C28.3424 28.75 26.7527 28.0915 25.5806 26.9194C24.4085 25.7473 23.75 24.1576 23.75 22.5C23.75 20.8424 24.4085 19.2527 25.5806 18.0806C26.7527 16.9085 28.3424 16.25 30 16.25C31.6576 16.25 33.2473 16.9085 34.4194 18.0806C35.5915 19.2527 36.25 20.8424 36.25 22.5C36.25 24.1576 35.5915 25.7473 34.4194 26.9194C33.2473 28.0915 31.6576 28.75 30 28.75Z" fill="black"/>
        </svg>
        <div class="flex flex-col items-center">
          <p>Paris</p> 
          <p>Île-de-France</p>
        </div>
      </div>

      <div class="w-[5px] bg-gris hidden 900:block"></div>
      <div class="h-[5px] w-full bg-gris block 900:hidden"></div>

      <div class="littleBoxes">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10H10C7.25 10 5.025 12.25 5.025 15L5 45C5 47.75 7.25 50 10 50H50C52.75 50 55 47.75 55 45V15C55 12.25 52.75 10 50 10ZM50 20L30 32.5L10 20V15L30 27.5L50 15V20Z" fill="black"/>
        </svg>
        <a href = "mailto: yanis.djadjapro@gmail.com">yanis.djadjapro@gmail.com</a>
      </div>
    </div>


    <div class="flex border-t-[5px] border-gris">
      <a href="https://www.linkedin.com/in/yanis-djadja-006131276/" class="bigBoxes bg-mauveClair">
        <img src="../assets/FOOTER/linkedin.svg" alt="linkedin logo">
      </a>
      <a href="https://www.behance.net/yanisdjadja1" class="bigBoxes bg-gris">
        <img src="../assets/FOOTER/behance.svg" alt="behance logo">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AproposContent'
}
</script>

<style scoped>
.littleBoxes{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 32vw;
  height: 32dvw;

  font-size: 24px;

  padding: 10%;
}

.bigBoxes{
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50vw;
  height: 50dvw;

  cursor: pointer;
  user-select: none;
  transition: 0.5s ease-in-out;
}

.bigBoxes:hover img{
  transform: scale(1.5);
  transition: 0.5s ease-in-out;
}

p{
  width: 20vw;
  text-align: center;
}

@media screen and (max-width: 900px) {
  p{
    width: 80vw;
  }
}
</style>