<template>
  <BigTitle title="MAGAZINE KENZO" category="PRINT"/>
  <ContactContent />
</template>

<script>
import BigTitle from '../components/BigTitle.vue'
import ContactContent from '../components/ContactContent.vue'

export default {
  name: 'KenzoView',
  components: {
    BigTitle,
    ContactContent
  }
}
</script>