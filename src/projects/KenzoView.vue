<template>
  <BigTitle title="MAGAZINE KENZO" category="PRINT"/>
  <KenzoContent />
</template>

<script>
import BigTitle from '../components/BigTitle.vue'
import KenzoContent from '../projects/KenzoContent.vue'

export default {
  name: 'KenzoView',
  components: {
    BigTitle,
    KenzoContent
  }
}
</script>