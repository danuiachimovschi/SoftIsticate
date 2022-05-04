<template lang="">
<div class="absolute bottom-0 top-0 left-0 right-0">
    <div class="fixed top-1/2 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neon max-w-[450px] w-[100%]  rounded-md drop-shadow-2xl text-right" >
    <fa :icon="['fa','xmark']" class="fa-2x text-dark mt-4 mr-4 cursor-pointer" @click="closeModal" />
        <div class="flex items-center flex-col p-5">
           <div class="text-center font-main font-bold text-2xl mt-2">
            Va apelam in scurt timp!
            </div>
            <label class="mt-2 font-medium text-sm" for="">Numar de telefon *</label>
            <input class="w-[250px] m-2 p-3 placeholder: text-dark text-xs" type="text" placeholder="Nr de telefon"> 
             <label class="mt-2 font-medium text-sm" for="">Nume *</label>
            <input class="w-[250px] mt-2 p-3 placeholder: text-dark text-xs" type="text" placeholder="Nume"> 
             <label class="mt-2 font-medium text-sm" for="">Prenume *</label>
            <input class="w-[250px] mt-2 p-3 placeholder: text-dark text-xs" type="text" placeholder="Prenume"> 
            <button class="py-3 px-12 bg-blue text-white font-main mt-8 mb-6" type="submit">Trimite</button>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:"ContactModal",
    methods:{
        closeModal(){
            this.$emit("closeModal");
        }
    }
}
</script>
<style>
    
</style>