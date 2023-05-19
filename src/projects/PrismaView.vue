<template>
  <BigTitle title="PRISMA" category="LOGO"/>
  <PrismaContent />
</template>

<script>
import BigTitle from '../components/BigTitle.vue'
import PrismaContent from '../projects/PrismaContent.vue'

export default {
  name: 'PrismaView',
  components: {
    BigTitle,
    PrismaContent
  }
}
</script>