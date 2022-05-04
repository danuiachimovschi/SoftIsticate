<template lang="">
<nav class="py-2"> 
    <ul class="flex nav_list" >
        <li v-for="(link, index) in navbar" :key="index" @click="closeModal()" >
            <nuxt-link :to="link.href">
                {{ link.name }}
            </nuxt-link>
        </li>
    </ul>
</nav>
</template>
<script>
export default {
    name:"NavBar",
    data() {
        return {
            navbar:[{
                name:"Servicii",
                href:"/service"
            },
            {
                name:"Despre noi",
                href:"/about"
            },
            {   
                name:"Blog",
                href:"blog"
            },
            {
                name:"FAQ",
                href:"/faq"
            },
            {
                name:"Contacte",
                href:"/contact"
            }
            ]
        }
    },
    methods: {
        closeModal(){
            this.$emit("closeModal");
        }
    },
}
</script>
<style lang="">
    
</style>