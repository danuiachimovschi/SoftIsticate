<template lang="">
    <div class="container">
        <BreadCrumbs :crumbs="crumbs" />
        <ServicesText/>
        <WebCite title="Single Page Buissnes" img="s-page.jpg" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quis odit quia li ipsa voluptas, animi modi incidunt exercitationem quis suscipit non voluptate doloribus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quis odit quia li ipsa voluptas, animi modi incidunt exercitationem quis suscipit non voluptate doloribus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quis odit quia li ipsa voluptas, animi modi incidunt exercitationem quis suscipit non voluptate doloribus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quis odit quia li ipsa voluptas, animi modi incidunt exercitationem quis suscipit non voluptate doloribus!" :left=false />
        <WebCite title="Single Page Buissnes" img="s-page.jpg" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quis odit quia li ipsa voluptas, animi modi incidunt exercitationem quis suscipit non voluptate doloribus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quis odit quia li ipsa voluptas, animi modi incidunt exercitationem quis suscipit non voluptate doloribus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quis odit quia li ipsa voluptas, animi modi incidunt exercitationem quis suscipit non voluptate doloribus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quis odit quia li ipsa voluptas, animi modi incidunt exercitationem quis suscipit non voluptate doloribus!" :left=true />
        <WebCite title="Single Page Buissnes" img="s-page.jpg" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quis odit quia li ipsa voluptas, animi modi incidunt exercitationem quis suscipit non voluptate doloribus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quis odit quia li ipsa voluptas, animi modi incidunt exercitationem quis suscipit non voluptate doloribus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quis odit quia li ipsa voluptas, animi modi incidunt exercitationem quis suscipit non voluptate doloribus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quis odit quia li ipsa voluptas, animi modi incidunt exercitationem quis suscipit non voluptate doloribus!" :left=false />
        <WebCite title="Single Page Buissnes" img="s-page.jpg" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quis odit quia li ipsa voluptas, animi modi incidunt exercitationem quis suscipit non voluptate doloribus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quis odit quia li ipsa voluptas, animi modi incidunt exercitationem quis suscipit non voluptate doloribus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quis odit quia li ipsa voluptas, animi modi incidunt exercitationem quis suscipit non voluptate doloribus!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quis odit quia li ipsa voluptas, animi modi incidunt exercitationem quis suscipit non voluptate doloribus!" :left=true />
        <Package class="mt-12"/>
    </div>
</template>
<script>
import Package from '../components/main/Package.vue'
import ServicesText from '../components/services/ServicesText.vue'
import WebCite from '../components/services/WebCite.vue'
export default {
    components:{
        Package,WebCite,ServicesText
        
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
                    name:"Service"
                }
            ]
        }
    },
}
</script>
<router>
  {
    path: '/service'
  }
</router>