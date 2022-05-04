<template lang="">
<div class="my-2 flex items-center">
    <fa :icon="['fa','globe']" class="fa-1x text-neon" />
    <div div class="">
        <select class="ml-1 form-select 
            text-base
            font-normal
            text-white
            bg-dark bg-clip-padding bg-no-repeat
            transition
            ease-in-out
            focus: outline-none
            appearance-none
            border-dark
            hover:bg-dark">
                <option class="border-none outline-none" value="1" selected>Romanian</option>
                <option class="border-none outline-none" value="2">Rusa</option>
                <option class="border-none outline-none" value="3">Engleza</option>
        </select>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>