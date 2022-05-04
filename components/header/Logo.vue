<template lang="">
<h1 class="logo font-bold text-lg font-jet" @click="closeModal()">
    <nuxt-link to="/" >
        <span class="text-deepgreen">SOFT</span>isticate
    </nuxt-link> 
</h1>
</template>
<script>
export default {
    name:"Logo",
    methods: {
        closeModal(){
            this.$emit("closeModal");
        }
    },
}
</script>
<style lang="">
    
</style>