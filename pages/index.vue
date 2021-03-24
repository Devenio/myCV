<template>
    <div class="container mx-auto px-5">
        <div class="w-full p-5">
            <div class="relative">
                <img
                    src="/images/img1.jpg"
                    alt="Picture"
                    class="relative z-10 shadow-2xl rounded-full w-64 h-64 mx-auto object-cover object-center"
                />
                <img
                    src="/svg/bg-effect.svg"
                    alt="backgroundEffect"
                    class="absolute svg-class1"
                />
                <img
                    src="/svg/bg-effect.svg"
                    alt="backgroundEffect"
                    class="absolute svg-class2"
                />
            </div>
        </div>

        <main class="w-full text-center pt-5">
            <h1 class="text-gray-900 text-4xl font-black leading-8">
                HY! I AM <br />
                NIMA <span class="text-red-600">SHAHBAZI</span>
            </h1>
            <h3 class="capitalize text-gray-700 text-base">
                a javaScript full stack developer
            </h3>
            <button
                class="capitalize outline-none border-2 transition duration-200 border-red-600 py-1 px-6 mt-5 text-red-600 hover:bg-red-600 hover:text-white"
            >
                hire me
            </button>

            <div class="mt-5 leading-loose">
                <h2 class="capitalize text-xl font-bold">
                    work samples
                </h2>
                <a
                    href="https://nimashahbazi.herokuapp.com"
                    class="text-red-700 underline block"
                >
                    https://nimashahbazi.herokuapp.com
                </a>
                <a
                    href="https://nima-chatapp.herokuapp.com"
                    class="text-red-700 underline block"
                >
                    https://nima-chatapp.herokuapp.com
                </a>
                <a
                    href="https://nima-musicplayer.herokuapp.com"
                    class="text-red-700 underline block"
                >
                    https://nima-musicplayer.herokuapp.com
                </a>
            </div>
        </main>

        <div class="w-full px-5 flex justify-between items-center mt-10">
            <div class="flex items-center capitalize">
                <fa
                    :icon="['fas', 'heart']"
                    size="lg"
                    class="text-gray-900"
                ></fa>
                <span class="pl-3 text-sm text-gray-600">
                    1M person like this resume
                </span>
            </div>
            <div>
                <fa
                    class="text-gray-900 mx-1"
                    :icon="['fab', 'instagram']"
                    size="lg"
                ></fa>
                <fa
                    class="text-gray-900 mx-1"
                    :icon="['fab', 'whatsapp']"
                    size="lg"
                ></fa>
                <fa
                    class="text-gray-900 mx-1"
                    :icon="['fab', 'telegram-plane']"
                    size="lg"
                ></fa>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.svg-class1 {
    top: 0;
    right: 20%;
}
.svg-class2 {
    bottom: 0;
    left: 20%;
}
</style>
