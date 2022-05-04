<template lang="">
<div class="mb-[80px]">
    <TextTitle class="my-6">Despre <span class="text-neon">SOFTisticate</span></TextTitle>
    <div class="flex justify-center md:flex-col-reverse">
        <div class="w-1/2 flex justify-center items-center md:w-full">
            <div class="w-[400px] md:w-3/4">
                <Logo/>
                <p class="mb-8">
                     Dezvoltarea infrastructurii IT este una din cele mai importante ramuri de dezvoltare strategică a afacerilor online și care duce spre o creștere și extindere contunuă.
                </p>
                <p class="mb-8">
                    Domeniul IT condiţionează din ce în ce mai mult
                    formarea relaţiilor sociale constituind un domeniu de cercetare și dezvoltare amplu.
                </p>
                <p>
                    ITSYSTEM este WebStudio-ul care te ajută să digitalizezi creativitatea și toată afacerea ta la cel mai înalt nivel.
                </p>
            </div>
        </div>
        <div class="w-1/2 md:flex justify-center md:w-full">
            <img class="md:w-1/2" src="~/assets/main/work.jpg" alt="">
        </div>
    </div>
</div>
</template>
<script>
import Logo from '../header/Logo.vue'
export default {
    name:"AboutUs",
    components:{
        Logo
    }
}
</script>
<style lang="">
    
</style>