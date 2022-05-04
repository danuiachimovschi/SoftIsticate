<template lang="">
<div class="welcome flex justify-between mb-[90px] md:mb-[30px]">
    <div class="w-1/2 py-[40px] xl:h-1/3 lg:relative z-30 md:w-full">
        <h1 class="font-jet text-dark font-bold my-8 xl:text-2xl md:text-xl"><vue-typer text='Elaborarea Aplicatiilor Web' ></vue-typer></h1>
        <p class="max-w-[600px] w-full text-lg pb-8 xl:text-lg md:max-w-full w-full">
            Contactați-ne dacă planificați crearea unui nou proiect de afaceri sau dacă doriți îmbunătățirea sau extinderea afacerii existente. 
            Vă vom ajuta în crearea site-ului companiei, în promovarea acestuia, în organizarea evidenței contabile și evidenței gestiunii. Suntem gata să punem la dispoziția afacerii Dvs. un departament IT personal, bazându-ne pe experiența noastră de peste 10 ani în acest domeniu.
        </p>
        <nuxt-link class="bg-neon py-3 px-12 text-xl font-bold" to="#">Let`s Go</nuxt-link>
    </div> 
    <div class="w-1/2 xl:w-2/3 lg:w-[450px] relative z-29 mt-12 md:hidden">
        <img src="~/assets/main/welcome.png" alt="">
    </div>
</div>
</template>
<script>
export default {
    name:"Welcome",
}
</script>
<style lang="">
    
</style>