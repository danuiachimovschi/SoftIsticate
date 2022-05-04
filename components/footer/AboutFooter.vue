<template lang="">
<div class="w-[450px]">
    <Logo class="pb-3 pl-2 m-0"/>
    <p class="text-gray w-full py-2">Servicii de outstaffing specialiștilor IT. Automatizarea contabilității și proceselor de afaceri ale companiei. Elaborare proiecte individualizate.</p>
    <div class="my-3">
        <fa :icon="['fa','location-dot']" class="fa-1x text-neon" />
        <span>Mun. Chisinau  Moldova</span>
    </div>
    <div class="pt-2">
        <ul class="flex ">
            <li>
                <nuxt-link to="#"><fa :icon="['fab','telegram']" class="fa-1x text-neon" /></nuxt-link>
            </li>
            <li class="ml-2">
                <nuxt-link to="#"><fa :icon="['fab','instagram']" class="fa-1x text-neon" /></nuxt-link>
            </li>
            <li class="ml-2">
                <nuxt-link to="#"><fa :icon="['fab','facebook']" class="fa-1x text-neon" /></nuxt-link>
            </li>
            <li class="ml-2">
                <nuxt-link to="#"><fa :icon="['fab','viber']" class="fa-1x text-neon" /></nuxt-link>
            </li>
            <li class="ml-2">
                <nuxt-link to="#"><fa :icon="['fab','skype']" class="fa-1x text-neon" /></nuxt-link>
            </li>
            <li class="ml-2">
                <nuxt-link to="#"><fa :icon="['fab','korvue']" class="fa-1x text-neon" /></nuxt-link>
            </li>
        </ul>
    </div>
    <div class="py-4 font-jet">
        © 2021—2022 SOFTisticate
    </div>
</div>
</template>
<script>
import Logo from '../header/Logo.vue'
export default {
    name:"AboutFooter",
    components:{
        Logo
    }
}
</script>
<style lang="">
    
</style>