<template lang="">
    <div class="container">
        <BreadCrumbs :crumbs="crumbs" />
        <BlogHome />
    </div>
</template>
<script>
import BlogHome from '../components/blog/BlogHome.vue'
export default {
    components:{
        BlogHome
    },
    layout:"main",
    data() {
        return {
            crumbs:[
                {
                    name:"Home",
                    href:"/"
                },
                {
                    name:"Blog"
                }
            ]
        }
    },
}
</script>
<router>
  {
    path: '/blog'
  }
</router>