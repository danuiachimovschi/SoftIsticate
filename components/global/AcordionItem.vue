<template lang="">
<div class="shadow-md rounded-lg shadow-shodow p-3 mt-7" @click="acordion()"  >
        <div class="flex justify-between">
            <p class="font-bold ">{{ questionItem.quest }}</p>
            <button><fa :icon="['fa','angle-down']" class="fa-2x text-deepgreen" /></button>  
        </div>
        <div :class="active ? 'mt-10 text-sm font-medium transition-all ease-in duration-300 hidden'  : 'mt-10 text-sm font-medium transition-all ease-in duration-300' ">
           {{ questionItem.ask }}
        </div>
</div>
</template>
<script>
export default {
    name:"AcordionItem",
    props:{
        questionItem:{
            type: Object,
            required: true
        }
    },
    data() {
        return {
            active:true,
        }
    },
    methods:{
        acordion(){
            this.active = !this.active
        }
    }
}
</script>
<style lang="">
    
</style>