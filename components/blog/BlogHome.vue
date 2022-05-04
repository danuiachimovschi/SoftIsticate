<template>
  <div class="py-5">
    <ul class="divide-gray-200">
      <li v-for="(item, index) in posts" :key="index" class="py-6 pl-5 shadow-sm mb-12 shadow-shodow">
        <article
          class="
            space-y-2
            space-y-0 
            flex justify-between
            sm:flex-col
          "
        >
          <div class="text-base leading-6 font-medium text-gray-500 w-1/3 lg:w-1/2 sm:w-full">
                <img class="w-full" src="~/assets/main/code.jpg" alt="">
          </div>
          <div class="space-y-5 col-span-3 ml-8 w-2/3 lg:w-1/2 sm:w-full sm:p-9 sm:ml-0">
            <div class="space-y-6">
              <h2 class="text-2xl leading-8 font-bold tracking-tight">
                <nuxt-link class="text-gray-900 pb-1 border-dashed border-b-2 border-dashed border-deepgreen" :to="item.href">{{ item.title }}</nuxt-link>
              </h2>
              <div
                v-if="item.excerpt"
                class="prose max-w-none text-gray-500"
              >
              {{ item.excerpt }}
              </div>
            </div>
            <div class="text-base leading-6 font-medium">
              <nuxt-link class="link" aria-label="read more" :to="item.href"
                >Read more <fa :icon="['fa','arrow-right']" class="fa-1x text-neon ml-3" />
            </nuxt-link>
            </div>
          </div>
        </article>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    name:"BlogHome",
    data() {
        return {
            posts:[
                {
                    title:"Despre Softisitcate",
                    href:"soft",
                    date:"21.09.12",
                    excerpt:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sequi tempore commodi eveniet, in quo provident est ipsum cumque error?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sequi tempore commodi eveniet, in quo provident est ipsum cumque error?"
                },
                {
                    title:"Despre Softisitcate",
                    href:"soft",
                    date:"21.09.12",
                    excerpt:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sequi tempore commodi eveniet, in quo provident est ipsum cumque error?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sequi tempore commodi eveniet, in quo provident est ipsum cumque error?"
                },
                {
                    title:"Despre Softisitcate",
                    href:"soft",
                    date:"21.09.12",
                    excerpt:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sequi tempore commodi eveniet, in quo provident est ipsum cumque error?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sequi tempore commodi eveniet, in quo provident est ipsum cumque error?"
                },
                {
                    title:"Despre Softisitcate",
                    href:"soft",
                    date:"21.09.12",
                    excerpt:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sequi tempore commodi eveniet, in quo provident est ipsum cumque error?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sequi tempore commodi eveniet, in quo provident est ipsum cumque error?"
                },
                {
                    title:"Despre Softisitcate",
                    href:"soft",
                    date:"21.09.12",
                    excerpt:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sequi tempore commodi eveniet, in quo provident est ipsum cumque error?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sequi tempore commodi eveniet, in quo provident est ipsum cumque error?"
                },
                {
                    title:"Despre Softisitcate",
                    href:"soft",
                    date:"21.09.12",
                    excerpt:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sequi tempore commodi eveniet, in quo provident est ipsum cumque error?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem sequi tempore commodi eveniet, in quo provident est ipsum cumque error?"
                },
            ]
        }
    },
}
</script>