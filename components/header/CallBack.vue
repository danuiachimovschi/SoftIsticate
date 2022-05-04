<template lang="">
<div class="">
    <button v-tooltip="'Te contactam rapid !'" type="button" class="bg-blue font-jet font-bold text-neon p-3 my-2 rounded-lg" @click="openModal">
       Free CallBack <fa :icon="['fa','arrow-left']" class="fa-1x text-gray" />
    </button>
</div>
</template>
<script>
export default {
    name:"CallBack",
    methods:{
        openModal(){
            this.$emit("openModal");
        }
    }
}
</script>
<style lang="">
    
</style>