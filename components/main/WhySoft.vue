<template lang="">
<div class="mb-[90px]">
    <TextTitle class="flex">De ce<span class="text-deepgreen ml-3"> SOFTisticate</span>?</TextTitle>
    <div class="why_soft swiper flex justify-between my-10 max-h-[230px] h-full">
        <div class="swiper-wrapper">
                <div class="w-1/7 text-center swiper-slide">
                    <fa :icon="['fa','mobile-screen-button']" class="fa-3x text-deepgreen" />
                    <div class="mt-5 text-xs font-bold">
                        Crearea unui sait adaptiv pe toate dispozitivile Mobile Desktop Tablet
                    </div>
                </div>
                <div class="w-1/7 text-center swiper-slide">
                    <fa :icon="['fa','gear']" class="fa-3x text-deepgreen" />
                    <div class="mt-5 text-xs font-bold">
                        Crearea unui sait adaptiv pe toate dispozitivile Mobile Desktop Tablet
                    </div>
                </div>
                <div class="w-1/7 text-center swiper-slide">
                    <fa :icon="['fa','book-open']" class="fa-3x text-deepgreen" />
                    <div class="mt-5 text-xs font-bold">
                        Crearea unui sait adaptiv pe toate dispozitivile Mobile Desktop Tablet
                    </div>
                </div>
                <div class="w-1/7 text-center swiper-slide">
                    <fa :icon="['fa','boxes-stacked']" class="fa-3x text-deepgreen" />
                    <div class="mt-5 text-xs font-bold">
                        Crearea unui sait adaptiv pe toate dispozitivile Mobile Desktop Tablet
                    </div>
                </div>
                <div class="w-1/7 text-center swiper-slide">
                    <fa :icon="['fa','rocket']" class="fa-3x text-deepgreen" />
                    <div class="mt-5 text-xs font-bold">
                        Crearea unui sait adaptiv pe toate dispozitivile Mobile Desktop Tablet
                    </div>
                </div>
                <div class="w-1/7 text-center swiper-slide">
                    <fa :icon="['fa','user-secret']" class="fa-3x text-deepgreen" />
                    <div class="mt-5 text-xs font-bold">
                        Crearea unui sait adaptiv pe toate dispozitivile Mobile Desktop Tablet
                    </div>
                </div>
                <div class="w-1/7 text-center swiper-slide">
                    <fa :icon="['fa','money-bill-wave']" class="fa-3x text-deepgreen" />
                    <div class="mt-5 text-xs font-bold">
                        Crearea unui sait adaptiv pe toate dispozitivile Mobile Desktop Tablet
                    </div>
                </div>
                
        </div>
        <div class="swiper-button-prev after: text-dark"></div>
        <div class="swiper-button-next after: text-dark"></div>
    </div>
</div>
</template>
<script>
import Swiper from 'swiper';
import { Navigation } from 'swiper/core';
import TextTitle from '../global/TextTitle.vue';
Swiper.use([Navigation]);
export default {
    name:"WhySoft",
    components:{
        TextTitle,
    },
    mounted() {
      const swiper = new Swiper('.why_soft', {
        speed: 400,
        slidesPerView: 7,
        spaceBetween: 100,
        // createElements:true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1473: {
            slidesPerView: 7,
            spaceBetween: 40
            },
            900: {
            slidesPerView: 5,
            spaceBetween: 40
            },
            400: {
            slidesPerView: 3,
            spaceBetween: 40
            },
            300: {
            slidesPerView: 2,
            spaceBetween: 40
            }
        }
      });
      console.log(swiper);
    },
}
</script>
<style lang="css">
    .why_soft-wrapper{
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        transition-property: transform;
        box-sizing: content-box;
    }
</style>