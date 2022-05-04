<template lang="">
    <div class="container">
        <BreadCrumbs :crumbs="crumbs" />
    </div>
</template>
<script>
export default {
    layout:"main",
    data() {
        return {
            crumbs:[
                {
                    name:"Home",
                    href:"/"
                },
                {
                    name:"Portfolio"
                }
            ]
        }
    },
}
</script>
<router>
  {
    path: '/portfolio'
  }
</router>