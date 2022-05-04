<template lang="">
    <div class="fixed top-0 left-0 bottom-0 w-[45%] bg-neon z-50 p-5 window_left">
        <Logo @closeModal="openWindow()"/>
        <NavBar @closeModal="openWindow()"/>
        <Phone />
        <CallBack 
                class="mt-8" 
                @openModal="openModal()" 
        />
    </div>
</template>
<script>
import CallBack from '../header/CallBack.vue'
import Logo from '../header/Logo.vue'
import NavBar from '../header/NavBar.vue'
import Phone from './Phone.vue'
export default {
    name:"Window",
    components:{
        Logo,NavBar,Phone,CallBack
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