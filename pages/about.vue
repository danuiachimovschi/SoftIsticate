<template lang="">
    <div class="container">
        <BreadCrumbs :crumbs="crumbs" />
        <WelcomeAbout/>
        <CompanyInfo/>
    </div>
</template>
<script>
import CompanyInfo from '../components/about/CompanyInfo.vue'
import WelcomeAbout from '../components/about/WelcomeAbout.vue'
export default {
    components:{
      WelcomeAbout,CompanyInfo
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
                    name:"About Us"
                }
            ]
        }
    },
}
</script>
<router>
  {
    path: '/about'
  }
</router>