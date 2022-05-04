<template lang="">
    <div class="container">
        <BreadCrumbs :crumbs="crumbs" />
        <PostTitle />
        <PostDesc />
        <img class="max-h-[400px] mt-5 mx-auto" src="~/assets/main/code.jpg" alt="">
        <PostContent />
    </div>
</template>
<script>
import PostContent from '../components/post/PostContent.vue'
import PostDesc from '../components/post/PostDesc.vue'
import PostTitle from '../components/post/PostTitle.vue'
export default {
    components:{
        PostTitle,PostDesc,PostContent
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
                    name:"Blog",
                    href:"/blog"
                },
                {
                    name:"Post Name",
                },
            ]
        }
    }
}
</script>
<router>
  {
    path: '/post/:title'
  }
</router>