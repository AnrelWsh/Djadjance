<template>
  <BigTitle title="BLOSSOM" category="LOGO"/>
  <BlossomContent />
</template>

<script>
import BigTitle from '../components/BigTitle.vue'
import BlossomContent from './BlossomContent.vue'

export default {
  name: 'BlossomView',
  components: {
    BigTitle,
    BlossomContent
  }
}
</script>