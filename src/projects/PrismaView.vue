<template>
  <BigTitle title="PRISMA" category="LOGO"/>
  <ContactContent />
</template>

<script>
import BigTitle from '../components/BigTitle.vue'
import ContactContent from '../components/ContactContent.vue'

export default {
  name: 'PrismaView',
  components: {
    BigTitle,
    ContactContent
  }
}
</script>