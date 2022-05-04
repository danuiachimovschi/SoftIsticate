<template lang="">
<div class="my-12 overflow-hidden">
    <!-- :class="left ? 'flex justify-between my-8 flex-row-reverse' : 'flex justify-between my-12 '" -->
    <div :class="!left ? 'float-right' : 'float-left'">
        <img class="w-[400px] sm:w-[250px] tn:w-[170px]" src="~/assets/services/s-page.jpg" alt="">
    </div>
    <div :class="!left ? 'text-base text-left mt-7' : 'text-base text-right mt-7'">
        <div :class="!left ? 'font-medium text-2xl text-left' : 'font-medium text-2xl text-right'">
            {{ title }}
        </div>
            {{ description }}
    </div>
</div>
</template>
<script>
export default {
    name:"WebCite",
    props:{
        title:{
            type:String,
            required:true   
        },
        description:{
            type:String,
            required:true
        },
        img:{
            type:String,
            required:true
        },
        left:{
            type:Boolean,
            required:true
        },
    }
}
</script>
<style lang="">
    
</style>