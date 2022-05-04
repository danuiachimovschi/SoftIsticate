<template lang="">
    <div class="container">
        <BreadCrumbs :crumbs="crumbs" />
        <div class="text-xl font-bold" >Cele mai frecvente <span class="text-deepgreen">intrebari</span> :</div>
        <Acordion/>
    </div>
</template>
<script>
import Acordion from '../components/global/Acordion.vue'
export default {
     components:{
        Acordion
    },
    layout:"main",
    data() {
        return {
            crumbs:[
                {
                    name:"Home",
                    href:"/"
                },
                {
                    name:"FAQ"
                }
            ]
        }
    }
}
</script>
<router>
  {
    path: '/faq'
  }
</router>