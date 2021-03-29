<template>
    <div class="h-16 container mx-auto px-5 flex justify-between items-center bg-gray-800">
        <div class="font-bold text-xl text-white">
            Nima<span class="text-red-500">Shahbazi</span>
        </div>
        <ul class="sm:flex w-48 h-full bg-purple justify-evenly hidden text-white">
            <li :class="liClass">Services</li>
            <li :class="liClass">Contact</li>
        </ul>
        <fa
            :icon="['fas', 'bars']"
            size="2x"
            class="block cursor-pointer text-white sm:hidden"
            @click="modalClose = !modalClose"
        ></fa>
        <div
            class="absolute items-center justify-center top-0 left-0 w-full h-screen z-40"
            :class="modalClose ? 'hidden' : 'flex'"
        >
            <div 
                class="bg-gray-900 opacity-75 w-full h-screen absolute top-0"
                @click="modalClose = !modalClose"
            ></div>
            <div class="w-11/12 min-h-64 bg-white absolute z-50 opacity-100 rounded">
                <ul class="w-full divide-y-2 divide-gray-400">
                    <li class="cursor-pointer transition duration-200 w-full py-8 text-center hover:bg-gray-200 focus:bg-gray-200">Services</li>
                    <li class="cursor-pointer transition duration-200 w-full py-8 text-center hover:bg-gray-200 focus:bg-gray-200">Contact</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            liClass:
                "flex flex-grow h-full justify-center items-center cursor-pointer hover:bg-gray-700",
            modalClose: true
        };
    }
};
</script>

<style lang="scss" scoped></style>
