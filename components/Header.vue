<template>
    <div
        class="h-16 container mx-auto px-5 flex justify-between items-center bg-gray-800"
    >
        <div class="font-bold text-xl text-white select-none">
            Nima<span class="text-red-500">Shahbazi</span>
        </div>
        <ul
            class="sm:flex w-48 h-full bg-purple justify-evenly hidden text-white"
        >
            <li
                class="flex flex-grow h-full justify-center items-center cursor-pointer hover:bg-gray-700"
                @click="modalHandler('services', false)"
            >
                Services
            </li>
            <li
                class="flex flex-grow h-full justify-center items-center cursor-pointer hover:bg-gray-700"
                @click="modalHandler('contact', false)"
            >
                Contact
            </li>
        </ul>
        <fa
            :icon="['fas', 'bars']"
            size="2x"
            class="block cursor-pointer text-white sm:hidden"
            @click="modalClose = !modalClose"
        ></fa>
        <div
            class="absolute items-center justify-center top-0 left-0 w-full h-screen z-30"
            :class="modalClose ? 'hidden' : 'flex'"
        >
            <div
                class="bg-gray-900 opacity-75 w-full h-screen absolute top-0"
                @click="modalClose = !modalClose"
            ></div>
            <div
                class="w-11/12 min-h-64 bg-white absolute z-40 opacity-100 rounded"
            >
                <ul class="w-full divide-y-2 divide-gray-400">
                    <li
                        class="cursor-pointer transition duration-200 w-full py-8 text-center font-bold tracking-wider hover:bg-gray-200 focus:bg-gray-200"
                        @click="modalHandler('services')"
                    >
                        Services
                    </li>
                    <li
                        class="cursor-pointer transition duration-200 w-full py-8 text-center font-bold tracking-wider hover:bg-gray-200 focus:bg-gray-200"
                        @click="modalHandler('contact')"
                    >
                        Contact
                    </li>
                </ul>
            </div>
        </div>

        <!-- load modal component -->
        <div
            class="absolute items-center justify-center top-0 left-0 w-full h-screen z-40"
            :class="modalClose2 ? 'hidden' : 'flex'"
        >
            <div
                class="bg-gray-900 opacity-75 w-full h-screen absolute top-0"
                @click="modalClose2 = !modalClose2"
            ></div>
            <div
                class="w-11/12 md:w-1/2 min-h-64 bg-white absolute z-50 opacity-100 rounded"
            >
                <ul class="w-full divide-y-2 divide-gray-400">
                    <li
                        class="transition capitalize duration-200 font-bold tracking-wider w-full py-5 text-center bg-gray-900 text-white"
                        v-if="modalType === 'contact'"
                    >
                        you can contact me this way
                    </li>
                    <li
                        class="transition capitalize duration-200 font-bold tracking-wider text-gray-900 w-full py-5 text-center hover:bg-blue-200"
                        v-for="item in modalType === 'services'
                            ? services
                            : contact"
                        :key="item.id"
                    >
                        <span v-if="modalType === 'services'">
                            {{ item }}
                        </span>
                        <div v-else>
                            <strong class="capitalize">
                                {{ item.type }}:
                            </strong>
                            <a class="lowercase underline" target="_blank" :href="item.link">
                                {{ item.address }}
                            </a>
                        </div>
                    </li>
                    <li
                        class="transition capitalize cursor-pointer duration-200 tracking-wider w-full py-5 text-center border-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white hover:underline"
                        v-if="modalType === 'services'"
                        @click="modalType = 'contact'"
                    >
                        click here to hire me in these services                    
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            modalClose: true,
            modalClose2: true,
            services: [
                "create diffrent websites",
                "create telegram bot",
                "create chat app",
                "create api's",
                "create everything refers to my skills"
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
                },
            ],
            modalType: null
        };
    },
    methods: {
        modalHandler(modalType, isHamMenu) {
            if(isHamMenu !== false) { this.modalClose = !this.modalClose };
            this.modalClose2 = !this.modalClose2;
            this.modalType = modalType;
        }
    }
};
</script>