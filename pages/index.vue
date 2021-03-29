<template>
    <div class="container mx-auto px-5 bg-white shadow-xl p-5">
        <div
            class="sm:flex sm:flex-row-reverse md:justify-center lg:justify-around"
        >
            <div
                class="w-full md:w-auto p-5 sm:p-0 sm:flex sm:items-center sm:justify-end"
            >
                <div class="relative">
                    <img
                        src="/images/img1.jpg"
                        alt="Picture"
                        id="profile-pic"
                        class="relative z-10 shadow-2xl rounded-full w-64 h-64 mx-auto object-cover object-center sm:mr-0"
                        loading="lazy"
                    />
                    <img
                        src="/svg/bg-effect.svg"
                        alt="backgroundEffect"
                        class="absolute svg-class1 sm:right-0"
                        loading="lazy"
                    />
                    <img
                        src="/svg/bg-effect.svg"
                        alt="backgroundEffect"
                        class="absolute svg-class2"
                        loading="lazy"
                    />
                </div>
            </div>

            <main class="w-full md:w-auto text-center pt-5 sm:text-left select-none">
                <h1
                    class="text-gray-900 text-4xl font-black leading-8 lg:text-5xl lg:leading-10"
                >
                    HY! I AM <br />
                    NIMA <span class="text-red-600">SHAHBAZI</span>
                </h1>
                <h3
                    class="capitalize text-gray-700 text-base lg:tracking-wider lg:text-lg"
                >
                    a javaScript full stack developer
                </h3>

                <button-samp text="hire me" />

                <div class="mt-5 leading-loose">
                    <h2 class="capitalize text-xl font-bold text-gray-900">
                        work samples
                    </h2>
                    <a
                        href="https://nimashahbazi.herokuapp.com"
                        target="_blank"
                        class="text-red-700 underline block text-sm lg:text-base"
                    >
                        https://nimashahbazi.herokuapp.com
                    </a>
                    <a
                        href="https://nima-chatapp.herokuapp.com"
                        target="_blank"
                        class="text-red-700 underline block text-sm lg:text-base"
                    >
                        https://nima-chatapp.herokuapp.com
                    </a>
                    <a
                        href="https://nima-musicplayer.herokuapp.com"
                        target="_blank"
                        class="text-red-700 underline block text-sm lg:text-base"
                    >
                        https://nima-musicplayer.herokuapp.com
                    </a>
                </div>
            </main>
        </div>

        <div
            class="w-full flex justify-between items-center mt-10 sm:mt-0 sm:items-end"
        >
            <div class="flex items-center capitalize">
                <fa
                    :icon="['fas', 'heart']"
                    size="lg"
                    class="text-red-600"
                ></fa>
                <span class="pl-2 text-xs text-gray-600">
                    1M person like this resume
                </span>
            </div>
            <div class="sm:flex sm:flex-col sm:items-center lg:mr-5">
                <fa
                    class="text-gray-900 ml-1 cursor-pointer"
                    :icon="['fab', 'instagram']"
                    size="lg"
                ></fa>
                <fa
                    class="text-gray-900 ml-1 sm:mt-2 cursor-pointer"
                    :icon="['fab', 'whatsapp']"
                    size="lg"
                ></fa>
                <fa
                    class="text-gray-900 ml-1 sm:mt-2 cursor-pointer"
                    :icon="['fab', 'telegram-plane']"
                    size="lg"
                ></fa>
            </div>
        </div>

        <div
            class="mx-auto my-5 w-3/4 bg-gradient-to-r from-transparent via-gray-400 to-transparent"
            style="height: 2px;"
        ></div>

        <div class="w-full text-center mt-7 sm:text-left">
            <h2 class="capitalize text-2xl font-bold text-gray-900">
                about me
            </h2>
            <p class="mt-5 text-gray-800 text-base px-3 sm:p-0 lg:text-lg">
                A designer and full stack web developer who love developing and
                design diffrent websites. <br />
                Familiar with UI/UX and design tools. <br />
                A JavaScript full stak developer. (MEVN stack developer)
            </p>
            <div
                class="w-full py-5 flex items-cneter justify-center sm:justify-start relative"
            >
                <button-samp text="<a href='#skills'>see skills</a>" class="mr-5 relative z-10" />
                <button-samp text="hire me" class="relative z-10" />
                <img
                    src="/svg/circle.svg"
                    alt="effect"
                    loading="lazy"
                    class="absolute left-28 z-0"
                />
            </div>
        </div>

        <h2
            class="capitalize text-2xl font-bold text-gray-900 text-center sm:text-left"
            id="skills"
        >
            skills
        </h2>
        <div
            class="w-full py-10 pt-5 sm:py-0 sm:mt-0 text-center flex flex-wrap md:flex-no-wrap md:overflow-x-auto justify-center sm:justify-start lg:justify-center"
        >
            <div
                v-for="skill in skills"
                :key="skill.id"
                class="mx-5 mb-16 sm:mb-0 sm:mt-5 sm:flex sm:flex-col sm:items-start "
            >
                <button-samp
                    :text="skill.title"
                    class="bg-red-600"
                    :isButton="false"
                />
                <div
                    class="flex flex-col rounded-none items-centerd px-5 py-3 mt-2 sm:mt-0 mx-auto border-2 border-gray-400 h-full"
                    style="width:250px;background-color: #f2f2f2;"
                >
                    <div
                        class="w-full flex items-center mt-3 justify-between"
                        v-for="skillItem in skill.skillItems"
                        :key="skillItem.id"
                    >
                        <p class="flex items-center text-gray-900 text-xl">
                            {{ skillItem }}
                        </p>
                        <img
                            src="/svg/tik.svg"
                            class="w-9 h-9"
                            loading="lazy"
                        />
                    </div>
                </div>
                <div
                    class="mx-auto my-5 w-3/4 bg-gradient-to-r from-transparent via-gray-400 to-transparent sm:hidden"
                    style="height: 2px;"
                ></div>
            </div>
        </div>

        <div class="w-full py-5">
            <div
                class="w-full py-3 rounded-full flex items-center justify-between px-5 border-gray-500 border-2 lg:w-3/4 lg:mx-auto"
                style="background-color: #f2f2f2;"
            >
                <p class="text-gray-900">
                    <strong>Language</strong>: English, Persian (Vernacular)
                </p>
                <img src="/svg/tik.svg" />
            </div>
        </div>

        <div
            class="text-center mt-5 px-5 sm:text-left lg:flex lg:justify-between items-start lg:divide-x-4"
        >
            <div class="lg:w-1/2">
                <p class="capitalize text-lg text-gray-900">
                    your feedbacks, suggestions, comments or every other
                    messages help me to improev myself.
                </p>

                <form
                    @click.prevent=""
                    class="text-center mt-5 w-full text-gray-900"
                >
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <label for="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            class="w-full sm:w-5/6 h-10 border-2 border-t-0 border-r-0 border-l-0 bg-white mt-2 px-2 py-2 border-gray-500 focus:border-blue-600"
                            placeholder="Enter your name here"
                            autocomplete="off"
                        />
                    </div>
                    <div
                        class="mt-5 sm:flex sm:items-center sm:justify-between"
                    >
                        <label for="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            class="w-full sm:w-5/6 h-10 border-2 border-t-0 border-r-0 border-l-0 border-gray-500 bg-white mt-2 px-2 py-2 focus:border-blue-600"
                            placeholder="Enter your email"
                            autocomplete="off"
                        />
                    </div>
                    <div
                        class="mt-5 sm:flex sm:items-center sm:justify-between"
                    >
                        <label for="message">Message</label>
                        <textarea
                            type="text"
                            id="message"
                            class="w-full sm:w-5/6 resize-y  h-10 border-2 border-t-0 border-l-0 bg-white mt-2 px-2 py-2 border-gray-500 focus:border-blue-600"
                            placeholder="Enter your message (Maximum 300 characters)"
                            autocomplete="off"
                            style="min-height: 200px;max-height: 350px;"
                            maxlength="300"
                        />
                    </div>
                    <div class="sm:flex sm:justify-end sm:w-full">
                        <div class="sm:w-5/6 sm:flex sm:justify-start">
                            <button-samp text="send message" />
                        </div>
                    </div>
                </form>
            </div>

            <footer class="text-center mt-10 lg:w-1/3">
                <h2 class="capitalize text-gray-900 text-xl">
                    you can also find me in
                </h2>
                <div
                    class="w-full pt-5 sm:flex sm:flex-col sm:flex-wrap sm:h-56 lg:h-full lg:mx-auto lg:w-full lg:pl-5"
                >
                    <div
                        class="w-full sm:w-1/2 flex items-center justify-evenly sm:justify-start mt-3 lg:w-full"
                        v-for="data in socialMedia"
                        :key="data.id"
                    >
                        <fa
                            :icon="['fab', data.icon]"
                            size="2x"
                            class="text-gray-900 mr-5"
                        ></fa>
                        <div
                            class="flex items-center justify-start w-1/2 text-gray-900"
                        >
                            <a :href="data.address" target="_blank"
                                >{{ data.id }}
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        <div
            class="mx-auto my-5 w-11/12 bg-gradient-to-r from-transparent via-gray-400 to-transparent sm:mt-0 lg:mt-5"
            style="height: 2px;"
        ></div>

        <footer
            class="text-center text-xs text-gray-900 mt-5 capitalize"
        >
            &copy; all rights of this website belong to nima shahbazi and any
            copying of it is presecuted.
        </footer>
    </div>
</template>

<script>
import ButtonSamp from "@/components/templates/ButtonSamp.vue";

export default {
    components: {
        ButtonSamp
    },
    data() {
        return {
            skills: [
                {
                    skillItems: [
                        "HTML / CSS",
                        "Vue js",
                        "Nuxt js",
                        "JavaScript",
                        "Bootstrap",
                        "Sass",
                        "TailwindCSS"
                    ],
                    title: "Front-End"
                },
                {
                    skillItems: [
                        "Node js",
                        "MongoDB",
                        "Express js",
                        "Socket.io",
                        "RESTfull API"
                    ],
                    title: "Back-End"
                },
                {
                    skillItems: ["Adobe XD", "Photoshop", "Adobe Illustrator"],
                    title: "UI /UX Design"
                }
            ],
            socialMedia: [
                {
                    icon: "instagram",
                    address: "xyz",
                    id: "nimashahbazi_official"
                },
                {
                    icon: "twitter",
                    address: "xyz",
                    id: "nimashahbazi_524"
                },
                {
                    icon: "linkedin-in",
                    address: "xyz",
                    id: "nimashahbazi524"
                },
                {
                    icon: "telegram-plane",
                    address: "xyz",
                    id: "nima_524"
                },
                {
                    icon: "whatsapp",
                    address: "xyz",
                    id: "0901 962 2899"
                },
                {
                    icon: "github",
                    address: "xyz",
                    id: "nimashahbazi5243"
                },
                {
                    icon: "youtube",
                    address: "xyz",
                    id: "nima shahbazi"
                }
            ]
        };
    }
};
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
@media only screen and (min-width: 1024px) {
    #profile-pic {
        width: 320px;
        height: 320px;
    }
    .svg-class1 {
        top: 0;
        right: 10%;
    }
    .svg-class2 {
        bottom: 0;
        left: 10%;
    }
}
</style>
