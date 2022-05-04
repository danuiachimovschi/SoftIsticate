<template>
<div class="pb-[50px]">
  <TextTitle class="my-6"><span class="text-neon">Tehnologiile</span> pe care le folosim</TextTitle>
  <div class="tehnology swiper mb-2">
    <div class="swiper-wrapper max-h-[230px] h-full flex">
      <div v-for="(item, index) in slider_elements" :key="index" class="swiper-slide w-1/5">
        <img v-tooltip="item.tootlip" :src="require(`~/assets/teh/${item.img}.png`)" >
      </div>
    </div>
    <div class="swiper-button-prev after: text-dark"></div>
    <div class="swiper-button-next after: text-dark"></div>
  </div>
  <div class="text-center font-medium text-sm mb-8">
    Noi utilizăm tehnologii moderne și sigure, datorita acestui fapt, proiectele noastre lucrează rapid, stabil și sunt compatibile practic cu orice hosting.
  </div>
</div>
</template>
<script>
import Swiper from 'swiper';
import { Navigation} from 'swiper/core';
import TextTitle from '../global/TextTitle.vue';
Swiper.use([Navigation]);
  export default {
    name: 'Tehnology',
    components:{
      TextTitle 
    },
    data() {
      return {
        slider_elements:[
          {
            img:"vue",
            tootlip:"Vue JS"
          },
          {
            img:"react",
            tootlip:"React JS"
          },
          {
            img:"laravel",
            tootlip:"Laravel PHP Framework"
          },
          {
            img:"nuxt",
            tootlip:"Nuxt JS"
          },
          {
            img:"tailwind",
            tootlip:"Tailwind CSS"
          },
          {
            img:"mysql",
            tootlip:"MySql DataBase"
          },
          {
            img:"css",
            tootlip:"CSS 3"
          },
        ]
      }
    },
    mounted() {
      const swiper = new Swiper('.tehnology', {
        speed: 400,
        slidesPerView: 6,
        spaceBetween: 100,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1200: {
            slidesPerView: 6,
            spaceBetween: 40
            },
            1050: {
            slidesPerView: 5,
            spaceBetween: 40
            },
            780: {
            slidesPerView: 4,
            spaceBetween: 15
            },
            400: {
            slidesPerView: 3,
            spaceBetween: 20
            },
            300: {
            slidesPerView: 2,
            spaceBetween: 20
            },
            20: {
            slidesPerView: 1,
            spaceBetween: 20
            }
        },
      });
      console.log(swiper);
    },
  }
</script>
<style>
.tehnology{
  height: 200px;
  display: flex;
}
</style>