<template>
    <button :class="buttonClass" v-if="isButton" v-html="text" id="button"></button>
    <div :class="titleClass" id="title" v-else>
        {{ text }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            buttonClass:
                "capitalize outline-none border-2 text-red-600 bg-white transition duration-300 border-red-600 py-1 px-6 mt-5 hover:bg-red-600 hover:text-white relative",
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

<style scoped>
#button::after {
    content: "";
    width: 20px;
    height: 2px;
    position: absolute;
    right: -10px;
    bottom: 50%;
    background-color: #e53e3e;
    transition: 400ms;
}
#button::before {
    content: "";
    width: 20px;
    height: 2px;
    position: absolute;
    left: -10px;
    bottom: 50%;
    background-color: #e53e3e;
    transition: 400ms;
}
#button:hover::after {
    right: -25px;
    opacity: 0;
}
#button:hover::before {
    left: -25px;
    opacity: 0;
}
</style>
