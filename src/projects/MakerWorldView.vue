<template>
  <BigTitle title="MAKER WORLD" category="UX/UI"/>
  <MakerWorldContent />
</template>

<script>
import BigTitle from '../components/BigTitle.vue'
import MakerWorldContent from '../projects/MakerWorldContent.vue'

export default {
  name: 'MakerWorldView',
  components: {
    BigTitle,
    MakerWorldContent
  }
}
</script>