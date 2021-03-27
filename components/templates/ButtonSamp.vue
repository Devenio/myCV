<template>
    <button :class="isButton ? buttonClass : titleClass">
        {{ text }}
    </button>
</template>

<script>
export default {
    data() {
        return {
            buttonClass:
                "capitalize outline-none border-2 text-red-600 transition duration-200 border-red-600 py-1 px-6 mt-5 hover:bg-red-600 hover:text-white",
            titleClass:
                "capitalize text-white outline-none border-2 border-red-600 py-1 px-6 shadow-xl"
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

<style lang="scss" scoped></style>
