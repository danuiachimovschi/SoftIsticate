<template lang="">
<header class="bg-dark text-white">
    <div class="container">
        <div class="header_inner text-white flex justify-between items-center">
            <Logo/>
            <NavBar class="sm:hidden"/>
            <div class="flex items-center md:hidden">
                <Translate/>
                <Phone/>
            </div>
            <CallBack 
                class="lg:hidden" 
                @openModal="openModal()" 
            />
            <Burger 
                class="hidden lg:block"
                @openWindow="openWindow()" 
            />
        </div>
    </div>
</header>
</template>
<script>
import Burger from './Burger.vue'
import CallBack from './CallBack.vue'
import Logo from './Logo.vue'
import NavBar from './NavBar.vue'
import Phone from './Phone.vue'
import Translate from './Translate.vue'
export default {
    name:"Header",
    components:{
        Logo,NavBar,Translate,Phone,CallBack,Burger
    },
    methods:{
        openModal(){
            this.$emit("openModal");
        },
        openWindow(){
           this.$emit("openWindow");
        },
    }
}
</script>
<style lang="">
    
</style>