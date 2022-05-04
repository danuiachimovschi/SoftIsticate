<template lang="">
<div class="my-12">
    <AcordionItem v-for="(questionItem, index) in question" :key="index" :question-item="questionItem" />
</div>
</template>
<script>
import AcordionItem from './AcordionItem.vue'
export default {
    name:"Acordion",
    components:{
        AcordionItem
    },
    data() {
        return {
            active:true,
            question:[
                {
                    quest:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aperiam accusantium debitis expedita pariatur dolores. ?",
                    ask:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas fuga nihil quas dolor quibusdam facere cupiditate, incidunt vitae placeat. Asperiores ullam soluta dicta molestias mollitia doloremque, alias nam vero porro saepe non possimus excepturi hic commodi quis sit veniam dolor? Tenetur repudiandae ex quidem placeat eum autem, iste sequi error tempora eveniet officiis laboriosam repellendus magnam vero expedita aspernatur deserunt, sint nemo rem? Consequuntur voluptatibus esse dolor soluta odit!"
                },
                {
                    quest:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aperiam accusantium debitis expedita pariatur dolores. ?",
                    ask:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas fuga nihil quas dolor quibusdam facere cupiditate, incidunt vitae placeat. Asperiores ullam soluta dicta molestias mollitia doloremque, alias nam vero porro saepe non possimus excepturi hic commodi quis sit veniam dolor? Tenetur repudiandae ex quidem placeat eum autem, iste sequi error tempora eveniet officiis laboriosam repellendus magnam vero expedita aspernatur deserunt, sint nemo rem? Consequuntur voluptatibus esse dolor soluta odit!"
                },
                {
                    quest:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aperiam accusantium debitis expedita pariatur dolores. ?",
                    ask:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas fuga nihil quas dolor quibusdam facere cupiditate, incidunt vitae placeat. Asperiores ullam soluta dicta molestias mollitia doloremque, alias nam vero porro saepe non possimus excepturi hic commodi quis sit veniam dolor? Tenetur repudiandae ex quidem placeat eum autem, iste sequi error tempora eveniet officiis laboriosam repellendus magnam vero expedita aspernatur deserunt, sint nemo rem? Consequuntur voluptatibus esse dolor soluta odit!"
                },
                {
                    quest:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aperiam accusantium debitis expedita pariatur dolores. ?",
                    ask:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas fuga nihil quas dolor quibusdam facere cupiditate, incidunt vitae placeat. Asperiores ullam soluta dicta molestias mollitia doloremque, alias nam vero porro saepe non possimus excepturi hic commodi quis sit veniam dolor? Tenetur repudiandae ex quidem placeat eum autem, iste sequi error tempora eveniet officiis laboriosam repellendus magnam vero expedita aspernatur deserunt, sint nemo rem? Consequuntur voluptatibus esse dolor soluta odit!"
                },
                {
                    quest:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aperiam accusantium debitis expedita pariatur dolores. ?",
                    ask:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas fuga nihil quas dolor quibusdam facere cupiditate, incidunt vitae placeat. Asperiores ullam soluta dicta molestias mollitia doloremque, alias nam vero porro saepe non possimus excepturi hic commodi quis sit veniam dolor? Tenetur repudiandae ex quidem placeat eum autem, iste sequi error tempora eveniet officiis laboriosam repellendus magnam vero expedita aspernatur deserunt, sint nemo rem? Consequuntur voluptatibus esse dolor soluta odit!"
                },
                {
                    quest:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aperiam accusantium debitis expedita pariatur dolores. ?",
                    ask:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas fuga nihil quas dolor quibusdam facere cupiditate, incidunt vitae placeat. Asperiores ullam soluta dicta molestias mollitia doloremque, alias nam vero porro saepe non possimus excepturi hic commodi quis sit veniam dolor? Tenetur repudiandae ex quidem placeat eum autem, iste sequi error tempora eveniet officiis laboriosam repellendus magnam vero expedita aspernatur deserunt, sint nemo rem? Consequuntur voluptatibus esse dolor soluta odit!"
                },
                {
                    quest:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aperiam accusantium debitis expedita pariatur dolores. ?",
                    ask:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas fuga nihil quas dolor quibusdam facere cupiditate, incidunt vitae placeat. Asperiores ullam soluta dicta molestias mollitia doloremque, alias nam vero porro saepe non possimus excepturi hic commodi quis sit veniam dolor? Tenetur repudiandae ex quidem placeat eum autem, iste sequi error tempora eveniet officiis laboriosam repellendus magnam vero expedita aspernatur deserunt, sint nemo rem? Consequuntur voluptatibus esse dolor soluta odit!"
                },
                {
                    quest:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aperiam accusantium debitis expedita pariatur dolores. ?",
                    ask:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas fuga nihil quas dolor quibusdam facere cupiditate, incidunt vitae placeat. Asperiores ullam soluta dicta molestias mollitia doloremque, alias nam vero porro saepe non possimus excepturi hic commodi quis sit veniam dolor? Tenetur repudiandae ex quidem placeat eum autem, iste sequi error tempora eveniet officiis laboriosam repellendus magnam vero expedita aspernatur deserunt, sint nemo rem? Consequuntur voluptatibus esse dolor soluta odit!"
                },
                {
                    quest:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aperiam accusantium debitis expedita pariatur dolores. ?",
                    ask:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas fuga nihil quas dolor quibusdam facere cupiditate, incidunt vitae placeat. Asperiores ullam soluta dicta molestias mollitia doloremque, alias nam vero porro saepe non possimus excepturi hic commodi quis sit veniam dolor? Tenetur repudiandae ex quidem placeat eum autem, iste sequi error tempora eveniet officiis laboriosam repellendus magnam vero expedita aspernatur deserunt, sint nemo rem? Consequuntur voluptatibus esse dolor soluta odit!"
                },
            ]
        }
    },
}
</script>
<style lang="">
    
</style>