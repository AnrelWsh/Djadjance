<template>
  <div class="bg-mauveClair relative !h-[54.5dvh]">
    <h1 class="select-none text-blanc text-7xl w-full text-center absolute top-[38.5%]">{{ title }}</h1>
    <h3 class="select-none text-blanc text-5xl w-2/4 absolute bottom-0 left-[5vw] leading-[0.25]">{{ category }}</h3>
  </div>
</template>

<script>
export default {
  name: 'BigTitle',
  props: {
    title: String,
    category: String
  }
}
</script>
