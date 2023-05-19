<template>
  <BigTitle title="LA RUEILLOISE" category="LOGO"/>
  <RueilloiseContent />
</template>

<script>
import BigTitle from '../components/BigTitle.vue'
import RueilloiseContent from '../projects/RueilloiseContent.vue'

export default {
  name: 'RueilloiseView',
  components: {
    BigTitle,
    RueilloiseContent
  }
}
</script>