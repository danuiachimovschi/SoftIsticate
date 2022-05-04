<template lang="">
<div class="content relative overflow-x-hidden">
    <ContactModal :class="hidden ? '' : 'hidden'" @closeModal="openModal()" />
    <Window  :class="hiddenWindow ? 'hidden' : ''" @openWindow="openWindow()" @openModal="openModalandWindow()" />
    <Banner/>
    <Header @openModal="openModal()" @openWindow="openWindow()" />
    <nuxt/>
    <FooterApp/>
</div>
</template>
<script>
import FooterApp from '../components/footer/FooterApp.vue'
import Header from '../components/header/Header.vue'
import Banner from '../components/main/Banner.vue'
import Window from '../components/mobile/Window.vue'
import ContactModal from '../components/modal/ContactModal.vue'
export default {
    components:{
        Banner,Header,FooterApp,ContactModal,Window
    },
    data() {
        return {
            hidden:false,
            hiddenWindow:true
        }
    },
    methods:{
        openModal(){
            this.hidden = !this.hidden;
        },
        openWindow(){
            this.hiddenWindow = !this.hiddenWindow;
        },
        openModalandWindow(){
            this.openModal();
            this.openWindow();
        }
    }
}
</script>
<style lang="">
    
</style>