<template>
    <div
        class="fixed items-center justify-center top-0 left-0 w-screen h-screen z-50 flex"  
    >
        <div
            class="bg-gray-900 opacity-75 w-full h-screen absolute top-0"
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
</template>

<script>
export default {
    data() {
        return {
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
        };
    },
};
</script>

<style lang="scss" scoped></style>
