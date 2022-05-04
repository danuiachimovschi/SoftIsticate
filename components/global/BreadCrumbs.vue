<template lang="">
<div class="my-8 text-left">
    <ul  class="flex">
        <div v-for="(crumb, index) in crumbs" :key="index">
            <li v-if="crumbs[index] !== crumbs[crumbs.length - 1]" class="text-xs font-bold mr-4"><nuxt-link :to="crumb.href" >{{ crumb.name }}</nuxt-link><span class="ml-4">/</span></li>
            <li v-else class="text-xs font-medium text-deepgreen mr-4 border-neon pb-1 border-dashed border-b-2">{{ crumb.name }}</li>
        </div>   
    </ul>
</div>
</template>
<script>
export default {
    name:"BreadCrumbs",
    props: {
        crumbs: {
            type: Array,
            required: true
        }
    }
}
</script>
<style lang="">
    
</style>