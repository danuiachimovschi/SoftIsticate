<template lang="">
<div class="flex justify-start my-10 xl:flex-wrap">
        <div class="w-[300px] xl:w-1/3 sm:w-1/2 sm:m-0 sm:pr-3 sm:mt-2">
            <Logo />
            <div class="text-sm ">
                Servicii de outstaffing specialiștilor IT. Automatizarea contabilității și proceselor de afaceri ale companiei. Elaborare
            </div>
        </div>
        <div class="w-[200px] xl:w-1/4 ml-5 sm:w-1/2 sm:ml-0 sm:mt-2">
            <div class="font-medium text-lg mt-3">Social Media :</div>
            <div class="pt-2">
                <ul class="flex flex-col">
                    <li class=" flex items-center">
                        <nuxt-link to="#"><fa :icon="['fab','telegram']" class="fa-2x text-deepgreen" /></nuxt-link>
                        <span class="text-sm font-bold ml-3">Telegram</span>
                    </li>
                    <li class="mt-2 flex items-center">
                        <nuxt-link to="#"><fa :icon="['fab','instagram']" class="fa-2x text-deepgreen" /></nuxt-link>
                        <span class="text-sm font-bold ml-3">Telegram</span>
                    </li>
                    <li class="mt-2 flex items-center">
                        <nuxt-link to="#"><fa :icon="['fab','facebook']" class="fa-2x text-deepgreen" /></nuxt-link>
                        <span class="text-sm font-bold ml-3">Telegram</span>
                    </li>
                    <li class="mt-2 flex items-center">
                        <nuxt-link to="#"><fa :icon="['fab','viber']" class="fa-2x text-deepgreen" /></nuxt-link>
                        <span class="text-sm font-bold ml-3">Telegram</span>
                    </li>
                    <li class="mt-2 flex items-center">
                        <nuxt-link to="#"><fa :icon="['fab','skype']" class="fa-2x text-deepgreen" /></nuxt-link>
                        <span class="text-sm font-bold ml-3">Telegram</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="w-[200px] mr-11 xl:w-1/3 sm:w-1/2 sm:mr-0 sm:pr-3 sm:mt-2">
            <div class="font-medium text-lg mt-3">Adresa :</div>
            <div class="font-bold text-lg mt-5">
                CHIȘINĂU, MOLDOVA
            </div>
            <div class="text-sm">
                str. Puskin, 44 (clădirea Makler)
            </div>
        </div>
        <div class="w-[300px] mr-12 xl:w-1/3 sm:w-1/2 sm:mr-0 sm:mt-2">
            <div class="font-medium text-lg mt-3">Freelance :</div>
            <div class="text-sm font-bold mt-5">
                Deasemenea suntem pe freelance !
            </div>
            <div class="my-3 text-sm ">
                Lucram si pe piata din Russia Kazakstan Ukraina.
                Puteti sa ne contactati si pe kwork.ru . 
            </div>
            <div class="text-sm">
                <div class="mt-2 flex items-center">
                        <nuxt-link to="#"><fa :icon="['fab','korvue']" class="fa-2x text-deepgreen" /></nuxt-link>
                        <span class="text-sm font-bold ml-3">Telegram</span>
                </div>
            </div>
        </div>
        <div class="w-[200px] mr-11 xl:w-1/3 sm:w-1/2 sm:mr-0 sm:pr-3 sm:mt-2" >
            <div class="font-medium text-lg mt-3">Contacte :</div>
                <div class="font-bold text-lg mt-5">
                    Email : 
                </div>
                <div class="text-sm">
                    iachimovschid@mail.ru
                </div>
                <div class="font-bold text-lg mt-5">
                    Telefon : 
                </div>
                <div class="text-sm">
                    +373 68975258
                </div>
        </div>
</div>
</div>
</template>
<script>
import Logo from '../header/Logo.vue'
export default {
    name:"Contact",
    components:{
        Logo
    }
}
</script>
<style lang="">
    
</style>