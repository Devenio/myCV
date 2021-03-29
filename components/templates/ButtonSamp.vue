<template>
    <button :class="buttonClass" v-if="isButton" v-html="text"></button>
    <div :class="titleClass" v-else>
        {{ text }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            buttonClass:
                "capitalize outline-none border-2 text-red-600 font-semibold bg-white transition duration-200 border-red-600 py-1 px-6 mt-5 hover:bg-red-600 hover:text-white",
            titleClass:
                "capitalize text-white outline-none border-2 border-red-600 py-1 px-6"
        };
    },
    props: {
        text: String,
        isButton: {
            type: Boolean,
            default: true
        }
    }
};
</script>

<style scoped></style>
