<template lang="">
    <div class="container">
        <BreadCrumbs :crumbs="crumbs" />
        <Contact />
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
                    name:"Contact"
                }
            ]
        }
    },
}
</script>
<router>
  {
    path: '/contact'
  }
</router>