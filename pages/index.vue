<template>
    <div
        class="container mx-auto px-5 bg-white shadow-xl p-5 relative z-0 overflow-hidden"
    >
        <!-- Background pattern -->
        <div
            id="bg-img"
            class="absolute w-full h-full object-cover opacity-50 object-center z-0 -mt-5 -ml-5 bg-gradient-to-br from-gray-400 via-gray-100 to-gray-400"
            style="z-index: -1;"
        />
        <!-- Render modal component -->
        <div
            class="fixed items-center justify-center top-0 left-0 w-screen h-screen z-50 flex"
            v-if="openModal"
        >
            <div
                class="bg-gray-900 opacity-75 w-full h-screen absolute top-0"
                @click="openModal = !openModal"
            ></div>
            <div
                class="w-11/12 md:w-1/2 min-h-64 bg-white absolute z-50 opacity-100 rounded"
            >
                <ul class="w-full divide-y-2 divide-gray-400">
                    <li
                        class="transition capitalize duration-200 font-bold tracking-wider w-full py-5 text-center bg-gray-900 text-white"
                    >
                        you can contact me this way
                    </li>
                    <li
                        class="transition capitalize duration-200 font-bold tracking-wider text-gray-900 w-full py-5 text-center hover:bg-blue-200"
                        v-for="item in contact"
                        :key="item.id"
                    >
                        <strong class="capitalize"> {{ item.type }}: </strong>
                        <a
                            class="lowercase underline"
                            target="_blank"
                            :href="item.link"
                        >
                            {{ item.address }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Top part of site -->
        <div
            class="sm:flex sm:flex-row-reverse md:justify-center lg:justify-around"
        >
            <!-- Profile part -->
            <div
                class="w-full md:w-auto p-5 sm:p-0 sm:flex sm:items-center sm:justify-end"
            >
                <div
                    id="profile-section"
                    class="relative opacity-0 transition transform duration-1000 translate-x-32"
                >
                    <img
                        src="/images/profile.jpg"
                        alt="Picture"
                        id="profile-pic"
                        class="relative z-10 shadow-2xl rounded-full w-64 h-64 mx-auto object-cover object-top sm:mr-0"
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

            <!-- Main title part -->
            <!-- <main
                id="main-section"
                class="w-full md:w-auto text-center pt-5 sm:text-left select-none transform duration-1000 -translate-x-32 opacity-0"
            > -->
            <main
                class="w-full md:w-auto text-center pt-5 sm:text-left select-none"
            >
                <h1
                    class="main-section text-gray-900 text-4xl font-black leading-8 lg:text-5xl lg:leading-10 transform duration-1000 -translate-x-32 opacity-0"
                >
                    HY! I AM <br />
                    NIMA <span class="text-red-600">SHAHBAZI</span>
                </h1>
                <h3
                    class="capitalize text-gray-700 text-base lg:tracking-wider lg:text-lg"
                >
                    a javaScript full stack developer
                </h3>

                <span @click="toggleModal()">
                    <button-samp text="hire me" />
                </span>

                <div class="mt-5 leading-loose">
                    <h2 class="capitalize text-xl font-bold text-gray-900">
                        work samples
                    </h2>
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

        <!-- Small icon links -->
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
                <a
                    href="https://github.com/nimashahbazi5243"
                    target="_blank"
                    title="github"
                >
                    <fa
                        class="text-gray-900 ml-1 cursor-pointer hover:text-red-800"
                        :icon="['fab', 'github']"
                        size="lg"
                    ></fa>
                </a>
                <a href="tel:+989019622899" target="_blank" title="phone">
                    <fa
                        class="text-gray-900 ml-1 sm:mt-2 cursor-pointer hover:text-red-800"
                        :icon="['fab', 'whatsapp']"
                        size="lg"
                    ></fa>
                </a>
                <a
                    href="https://t.me/Nima_524"
                    target="_blank"
                    title="telegram"
                >
                    <fa
                        class="text-gray-900 ml-1 sm:mt-2 cursor-pointer hover:text-red-800"
                        :icon="['fab', 'telegram-plane']"
                        size="lg"
                    ></fa>
                </a>
            </div>
        </div>

        <!-- Break line -->
        <div
            class="mx-auto my-5 w-3/4 bg-gradient-to-r from-transparent via-gray-400 to-transparent"
            style="height: 2px;"
        ></div>

        <!-- About me part -->
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
                <div @click="skillsScrollHandler()">
                    <button-samp text="see skills" class="mr-8 relative z-10" />
                </div>
                <div @click="openModal = !openModal">
                    <button-samp text="hire me" />
                </div>
                <img
                    src="/svg/circle.svg"
                    alt="effect"
                    loading="lazy"
                    class="absolute left-28 z-0"
                />
            </div>
        </div>

        <!-- Skills Section -->
        <h2
            class="capitalize text-2xl font-bold text-gray-900 text-center sm:text-left"
            id="skills"
        >
            skills
        </h2>
        <div
            id="skill-card"
            class="w-full py-10 pt-5 sm:py-0 sm:mt-0 text-center flex flex-wrap md:flex-no-wrap md:overflow-x-auto justify-center sm:justify-start lg:justify-center transition duration-500 opacity-0"
        >
            <div
                v-for="skill in skills"
                :key="skill.id"
                class="mx-5 mb-16 sm:mb-0 sm:mt-5 sm:flex sm:flex-col sm:items-start"
            >
                <button-samp
                    :text="skill.title"
                    class="bg-red-600"
                    :isButton="false"
                />
                <div
                    class="flex flex-col rounded-none items-centerd px-5 py-3 mt-2 sm:mt-0 mx-auto bg-gradient-to-br from-gray-400 via-gray-200 to-gray-400 border-2 border-gray-400 h-full"
                    style="width:250px;"
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
                class="w-full py-3 rounded-full flex items-center justify-between px-5 bg-gradient-to-br from-gray-400 via-gray-200 to-gray-400 border-gray-400 border-2 lg:w-3/4 lg:mx-auto"
            >
                <p class="text-gray-900">
                    <strong>Language</strong>: English, Persian (Vernacular)
                </p>
                <img src="/svg/tik.svg" />
            </div>
        </div>

        <!-- Bootom part of website -->
        <div
            class="text-center mt-5 px-5 sm:text-left lg:flex lg:justify-between items-start lg:divide-x-4"
        >
            <!-- Feedback form -->
            <div class="lg:w-1/2">
                <p class="capitalize text-lg text-gray-900">
                    your feedbacks, suggestions, comments or every other
                    messages help me to improev myself.
                </p>

                <form
                    @click.prevent=""
                    class="text-center mt-5 w-full text-gray-900"
                    id="feedbackForm"
                >
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <label for="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            class="w-full bg-transparent sm:w-5/6 h-10 border-2 border-t-0 border-r-0 border-l-0 mt-2 px-2 py-2 border-gray-500 focus:border-blue-600 focus:placeholder-blue-600"
                            placeholder="Enter your name here"
                            autocomplete="off"
                            v-model="feedback.name"
                        />
                    </div>
                    <div
                        class="mt-5 sm:flex sm:items-center sm:justify-between"
                    >
                        <label for="email">Email</label>
                        <input
                            id="email"
                            type="text"
                            class="w-full sm:w-5/6 h-10 border-2 border-t-0 border-r-0 border-l-0 border-gray-500 bg-transparent mt-2 px-2 py-2 focus:border-blue-600 focus:placeholder-blue-600"
                            placeholder="Enter your email"
                            autocomplete="off"
                            v-model="feedback.email"
                        />
                    </div>
                    <div
                        class="mt-5 sm:flex sm:items-center sm:justify-between"
                    >
                        <label for="message">Message</label>
                        <textarea
                            id="message"
                            type="text"
                            class="w-full sm:w-5/6 resize-y  h-10 border-2 border-t-0 border-l-0 bg-transparent mt-2 px-2 py-2 border-gray-500 focus:border-blue-600 focus:placeholder-blue-600"
                            placeholder="Enter your message (Maximum 300 characters)"
                            autocomplete="off"
                            style="min-height: 200px;max-height: 350px;"
                            maxlength="300"
                            v-model="feedback.message"
                        />
                    </div>
                    <div class="sm:flex sm:justify-end sm:w-full">
                        <div class="sm:w-5/6 sm:flex sm:justify-start">
                            <div @click="sendFeedback()">
                                <button-samp text="send message" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <!-- Social media links -->
            <footer class="text-center mt-10 lg:w-1/3">
                <h2 class="capitalize text-gray-900 text-xl">
                    you can also find me in
                </h2>
                <div
                    class="w-full pt-5 sm:flex sm:flex-col sm:flex-wrap sm:h-56 lg:h-full lg:mx-auto lg:w-full lg:pl-5"
                >
                    <div
                        class="w-full sm:w-1/2 flex items-center justify-evenly sm:justify-center mt-3 lg:w-full text-gray-900 hover:text-red-700"
                        v-for="data in socialMedia"
                        :key="data.id"
                    >
                        <a
                            :href="data.address"
                            target="_blank"
                            class="hover:underline"
                        >
                            <fa
                                :icon="['fab', data.icon]"
                                size="2x"
                                class="mr-5"
                            ></fa>
                        </a>

                        <div class="flex items-center justify-start w-1/2">
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

        <footer class="text-center text-xs text-gray-900 mt-5 capitalize">
            &copy; all rights of this website belong to nima shahbazi and any
            copying of it is presecuted.
        </footer>

        <!-- Form Error Box -->
        <div
            class="fixed bottom-10 bg-white p-5 rounded-lg -left-full mx-5 right-10 shadow-xl z-50 font-bold transition-all duration-500"
            :class="
                wasSuccessful
                    ? 'border-green-700 text-green-700'
                    : 'text-red-700 border-2 border-red-700'
            "
            style="bottom: 15px;"
            id="errorModal"
        >
            <fa :icon="['fas', 'check']" v-show="wasSuccessful"></fa>
            <fa
                :icon="['fas', 'exclamation-triangle']"
                v-show="!wasSuccessful"
            ></fa>

            <span v-show="wasSuccessful">
                Congratulations boy. <br />
                Message sent successfully. Thank you for your message
            </span>
            <span v-show="!wasSuccessful">
                Hey men! Pay attention. <br />
                {{ msg }}
            </span>
        </div>
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
                    address: "https://www.instagram.com/nimashahbazi_official/",
                    id: "nimashahbazi_official"
                },
                {
                    icon: "twitter",
                    address: "https://twitter.com/NimaShahbazi524",
                    id: "nimashahbazi_524"
                },
                {
                    icon: "linkedin-in",
                    address:
                        "https://www.linkedin.com/in/nima-shahbazi-749480203/",
                    id: "nimashahbazi524"
                },
                {
                    icon: "telegram-plane",
                    address: "https://t.me/Nima_524",
                    id: "nima_524"
                },
                {
                    icon: "whatsapp",
                    address: "tel:+989019622899",
                    id: "0901 962 2899"
                },
                {
                    icon: "github",
                    address: "https://github.com/nimashahbazi5243",
                    id: "nimashahbazi5243"
                }
            ],
            contact: [
                {
                    type: "phone",
                    address: "+989019622899",
                    link: "tel:+98901962899"
                },
                {
                    type: "email",
                    address: "nimashahbazi524@gmail.com",
                    link: "mailto:nimashahbazi524@gmail.com"
                },
                {
                    type: "telegram",
                    address: "@nima_524",
                    link: "https://telegram.me/nima_524"
                }
            ],
            openModal: false,
            feedback: {
                message: "",
                email: "",
                name: ""
            },
            msg: "",
            wasSuccessful: false
        };
    },
    mounted() {
        // Constant
        const profileSection = document.querySelector("#profile-section");
        const mainSection = document.querySelectorAll(".main-section");

        // Apear animation setup
        profileSection.classList.remove("opacity-0");
        profileSection.classList.replace("translate-x-32", "-translate-x-0");

        mainSection.forEach(item => {
            item.classList.remove("opacity-0");
            item.classList.replace("-translate-x-32", "-translate-x-0");
        });

        // Skills scroll handler
        if (!window.localStorage.getItem("isSet")) {
            this.setOffsetTop();
            window.localStorage.setItem("isSet", true);
        }

        // Window scroll event handler
        const skillsSection = document.querySelector("#skills");

        document.addEventListener("scroll", () => {
            skillsSection.getBoundingClientRect().top <= 450
                ? this.skillCardToggleAnimation("visible")
                : this.skillCardToggleAnimation("hidden");
        });
    },
    methods: {
        skillsScrollHandler() {
            window.scrollTo(
                0,
                window.localStorage.getItem("skillsTopDistance")
            );
            console.log(document.body.scrollTop);
        },
        toggleModal() {
            this.openModal = !this.openModal;
        },
        setOffsetTop() {
            const skillsSection = document.querySelector("#skills");

            window.localStorage.setItem(
                "skillsTopDistance",
                skillsSection.getBoundingClientRect().top
            );
        },
        skillCardToggleAnimation(status) {
            const skillCard = document.querySelector("#skill-card");

            status === "visible"
                ? skillCard.classList.remove("opacity-0")
                : skillCard.classList.add("opacity-0");
        },
        sendFeedback() {
            this.$axios
                .post("/api/messages", this.feedback)
                .then(res => {
                    if (res.data.errorMessage) {
                        this.wasSuccessful = false;
                        this.showMessageBox(res.data.errorMessage);
                        return;
                    }
                    this.wasSuccessful = true;
                    this.showMessageBox();
                })
                .catch(err => console.log("axios error: ", err));
        },
        showMessageBox(msg) {
            const errorModal = document.querySelector("#errorModal");
            let timer = 3000;

            errorModal.classList.add("left-0", "-left-full");
            clearTimeout(myTimer);

            msg ? (this.msg = msg) : (timer = 7000);
            errorModal.classList.replace("-left-full", "left-0");

            let myTimer = setTimeout(() => {
                errorModal.classList.add("left-0", "-left-full");
            }, timer);
        }
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
.-left-full {
    left: -100%;
}
</style>
