<template>
  <BigTitle title="FÉDÉRATION FRANÇAISE DE WATER-POLO" category="LOGO"/>
  <WaterPoloContent />
</template>

<script>
import BigTitle from '../components/BigTitle.vue'
import WaterPoloContent from '../projects/WaterPoloContent.vue'

export default {
  name: 'WaterPoloView',
  components: {
    BigTitle,
    WaterPoloContent
  }
}
</script>