<template>
    <div>
        <hero-section :CustomId="'heading'" :CustomClass="'mt-20'" :heading="'Free grammer correcter Tool'"
            :slogan="'Quickly correct any sentences, essays, emails, articles, and more'" />
    </div>
    <!-- <button @click="grammarChecker()" type="button"
        class="p-2 bg-indigo-500 rounded-md capitalize text-lg text-white ml-20 inline-block">Click Me!</button> -->

    <!-- <textarea v-model="text" autocorrect="false" cols="30" rows="10"></textarea> -->
    <!-- <div class="bg-white" contenteditable="true" v-html="text"></div> -->
    <main>
        <form action="" @submit.prevent="grammarChecker()">
            <div class="w-11/12 flex items-start justify-between p-1 mx-auto mt-12">
                <div class="bg-white h-96 w-2/3 rounded-md overflow-hidden relative">
                    <div class="flex items-center justify-between  p-1 px-4 border-b-2 border-b-gray-100">
                        <section class="">
                            <select name="" id="">
                                <option value="">English</option>
                                <option value="">English</option>
                                <option value="">English</option>
                            </select>
                        </section>
                        <section class="p-3 px-4 flex items-center">
                            <CustomButton class="text-sm text-slate-600" :buttontype="'button'" :buttonname="'Copy'"
                                :buttonicon="'copy-outline'" />
                            <CustomButton class="text-sm text-slate-600 ml-5" :buttontype="'button'"
                                :buttonname="'Delete'" :buttonicon="'trash-outline'" />
                        </section>
                    </div>
                    <div class="relative bg-white h-full">
                        <InputField v-model="content" @input="countWordsAndChars()"
                            class=" w-full h-full rounded-none" />
                    </div>
                    <div class="flex items-center  absolute left-0 bottom-0">
                        <p class="text-sm text-gray-400 capitalize py-2 px-4">
                            characters:
                            <span class="text-gray-900">{{ Characters }}</span>
                        </p>
                        <p class="text-sm text-gray-400 capitalize py-2 px-2 ml">
                            words:
                            <span class="text-gray-900">{{ Words }}</span>
                        </p>
                    </div>
                    <div class="absolute right-2 bottom-1">
                        <span
                            class="bg-indigo-700 font-normal text-base rounded-full py-1 px-3 block text-white">4</span>
                    </div>
                </div>
                <div class=" bg-white h-96 w-2/6 rounded-md ml-2 overflow-hidden">
                    <div class="flex items-center justify-around">
                        <button
                            class="w-full px-8 h-10 text-sm font-semibold text-slate-900 border-b-2 border-b-gray-300 capitalize">
                            Correct 2
                        </button>
                        <button
                            class="w-full px-8 h-10 text-sm font-semibold text-slate-900 border-b-2 border-b-gray-300 capitalize ml-1">
                            paraphrase
                        </button>
                    </div>
                    <div class="bg-gray-50 rounded py-3 px-4 w-11/12 shadow-md my-4 flex items-center mx-auto">
                        <p class="bg-indigo-500 text-base text-white font-semibold py-0.5 px-3.5 capitalize rounded-md">
                            hello
                        </p>
                        <span class="text-xs text-gray-400 font-light ml-4 capitalize">grammer mistake</span>
                    </div>
                    <div class="bg-gray-50 rounded py-3 px-4 w-11/12 shadow-md my-4 flex items-center mx-auto">
                        <p class="bg-indigo-500 text-base text-white font-semibold py-0.5 px-3.5 capitalize rounded-md">
                            hello
                        </p>
                        <span class="text-xs text-gray-400 font-light ml-4 capitalize">Spelling mistake</span>
                    </div>
                </div>
            </div>
            <button class="bg-indigo-500" type="submit">click to
                check</button>
        </form>
    </main>
    <footer-section />
</template>

<script>
import CustomButton from '@/components/CustomButton.vue';

export default {
    components: {
        CustomButton
    },
    name: "CorrecterView",
    data() {
        return {
            content: "",
            isHidden: true,
            exChange: 0,
            limit: 500,
            Characters: 0,
            Words: 0,
            wordsArray: [],
            error: []
        };
    },

    methods: {
        countWordsAndChars() {
            this.Characters = this.content.length;
            if (this.content.trim() === "") {
                this.Words = 0
            }
            else {
                this.wordsArray = this.content.split(' ')
                this.Words = this.wordsArray.length;
            }
        },

        async grammarChecker() {
            // const url = "https://ginger4.p.rapidapi.com/correction?lang=US&generateRecommendations=false&flagInfomralLanguage=true";
            const apiKey = "ae3806ec64mshe6e8fcce507b60dp1207d2jsn6b0b16528c1e"; // Ensure this key is valid
            const textToCheck = "Frree gramemer correceter Toeol"; // Example text

            const url = 'https://ginger4.p.rapidapi.com/correction?lang=US&generateRecommendations=false&flagInfomralLanguage=true';
            const options = {
                method: 'POST',
                headers: {
                    'x-rapidapi-key': apiKey, // replace with your key
                    'x-rapidapi-host': 'ginger4.p.rapidapi.com',
                    'Content-Type': 'text/plain',
                    'Accept-Encoding': 'identity',
                },
                body: "Frree gramemer correceter Toeol",
            };

            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result_1 = await response.text();
                return result_1;
            } catch (error) {
                console.error(error);
                throw error; // Rethrow the error for further handling if needed
            }
        }
        // }
        // ("x")

    }
}
</script>
