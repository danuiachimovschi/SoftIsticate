<template lang="">
<footer class="footer bg-dark text-white py-3">
    <div class="container">
        <div class="footer_inner flex justify-between md: flex-wrap">
            <AboutFooter class="md:w-[250px] mt-6"/>
            <ServiceFooter class="md:mt-6 pl-0"/>
            <CompanyFooter class="md:mt-6 pl-0"/>
            <ProjectFooter  class="md:mt-6"/>
            <FalowFooter class="md:w-1/2 mt-6"/>
        </div>
    </div>
</footer>
</template>
<script>
import AboutFooter from './AboutFooter.vue'
import CompanyFooter from './CompanyFooter.vue'
import FalowFooter from './FalowFooter.vue'
import ProjectFooter from './ProjectFooter.vue'
import ServiceFooter from './ServiceFooter.vue'
export default {
    name:"FooterApp",
    components:{
        AboutFooter,ServiceFooter,CompanyFooter,ProjectFooter,FalowFooter
    }
}
</script>
<style lang="">
    
</style>