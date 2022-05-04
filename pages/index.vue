<template>
<div class="content">
  <div class="container">
    <Welcome/>
    <WhySoft/>
    <Package/>
    <HowWork/>
    <AboutUs/>
    <Tehnology/>
  </div>
</div>
</template>
<script>
import AboutUs from '../components/main/AboutUs.vue'
import HowWork from '../components/main/HowWork.vue'
import Package from '../components/main/Package.vue'
import Tehnology from '../components/main/Tehnology.vue'
import Welcome from '../components/main/Welcome.vue'
import WhySoft from '../components/main/WhySoft.vue'
export default {
  components:{
    Tehnology,Welcome,WhySoft,Package,HowWork,AboutUs
  },
  layout:'main',
}
</script>
