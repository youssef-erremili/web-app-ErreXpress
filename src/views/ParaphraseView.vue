<template>
    <div>
        <hero-section :CustomId="'heading'" :CustomClass="'mt-20'" :heading="'Free Paraphrasing Tool'"
            :slogan="'Quickly reword sentences for essays, emails, articles, and more'" />
    </div>
    <main>
        <form @submit.prevent.enter="handleEmptyInp()" @keydown.enter="handleEmptyInp()">
            <div class="mx-auto bg-white py-14 px-10 mb-40 rounded-lg shadow-md w-9/12 items-center mt-20">
                <div class="flex">
                    <div class="w-3/4 relative">
                        <InputField v-model="inputText" @input="preventTyping()"
                            CustomClass="w-full h-64 rounded-md text-black-300 text-base" />
                        <section>
                            <CustomButton :buttontype="'button'" :buttonname="''" :buttonicon="'close-outline'"
                                class="absolute top-3 right-2 z-10 text-xl" @click="clearTextarea()" />
                        </section>
                        <section class="p-1 absolute right-1 bottom-3">
                            <p class="font-normal text-slate-500 text-sm">{{ exchange }}/{{ SentenceLimit }} Words</p>
                        </section>
                    </div>
                    <div class="w-3/12 px-5">
                        <section>
                            <h4 class="text-sm mb-1 mt-5 text-gray-900">Choose Style :</h4>
                            <SelectInput v-model="Targetstyle" :options="styles" />
                        </section>
                        <section class="mt-3">
                            <h4 class="text-sm mb-1 mt-5 text-gray-900">Choose Languages :</h4>
                            <SelectInput v-model="Targetlanguage" :options="supportedLanguages" />
                        </section>
                    </div>
                </div>
                <div class="flex justify-start">
                    <CustomButton :buttontype="'submit'" :buttonname="buttonValue" :buttonicon="'flash-outline'"
                        class="flex items-center bg-indigo-500 py-2 px-6 capitalize text-base rounded-md mt-6 text-white">
                        <loader-svg :class="isLoading" />
                    </CustomButton>
                    <CustomButton @click="tryItFunc()" :buttontype="'button'"
                        :class="'ml-2 inline-block bg-transparent text-gray-500 py-2 px-6 capitalize text-base rounded-md mt-6 hover:bg-slate-200'"
                        :buttonname="'Try sample text'" :buttonicon="'brush-outline'" />
                </div>
                <div class="mt-3">
                    <h5 class="text-sm" :class="isColor"> {{ alertMsg }}</h5>
                </div>
                <div class="">
                    <div class="w-full mt-10 mb-3">
                        <skeleton-loading :class="isLoading" />
                    </div>
                    <div class="mt-14" :class="isLoaded">
                        <h3 class="capitalize text-2xl font-medium mb-3 text-slate-900">suggestions :</h3>
                        <div v-for="(item, index) in paraphrasedText" :key="index"
                            class="flex items-start justify-between bg-gray-50 rounded-md py-4 px-2 mt-3 mb-5">
                            <p class="text-base inline-block text-gray-800">{{ item }}</p>
                            <CustomButton @click="copyParaphrase(item, index)" :buttontype="'button'"
                                :buttonname="isCopied" :buttonicon="'copy'"
                                class="flex justify-center items-center bg-indigo-500 py-2 px-6 capitalize text-sm rounded-md text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </main>
</template>

<script>
import LoaderSvg from '@/components/LoaderSvg.vue';
import SkeletonLoading from '@/components/SkeletonLoading.vue';
import SelectInput from '@/components/SelectInput.vue';
import CustomButton from '@/components/CustomButton.vue';

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
    name: 'ParaphraseView',
    components: {
        LoaderSvg,
        SkeletonLoading,
        SelectInput,
        CustomButton
    },

    data() {
        return {
            inputText: "",
            paraphrasedText: "",
            buttonValue: "paraphrase",
            Targetlanguage: "English",
            Targetstyle: "general",
            isLoading: 'hidden',
            isLoaded: "hidden",
            alertMsg: "",
            isColor: "",
            isCopied: "copy",
            exchange: 0,
            exampleText: "",
            SentenceLength: [],
            SentenceLimit: 100,
            supportedLanguages: [
                { value: 'English', text: 'English' },
                { value: 'Arabic', text: 'Arabic' },
                { value: 'Spanish', text: 'Spanish' },
                { value: 'French', text: 'French' },
                { value: 'German', text: 'German' },
                { value: 'Italian', text: 'Italian' },
                { value: 'Portuguese', text: 'Portuguese' },
                { value: 'Dutch', text: 'Dutch' },
                { value: 'Russian', text: 'Russian' },
                { value: 'Japanese', text: 'Japanese' },
                { value: 'Korean', text: 'Korean' }
            ],
            styles: [
                { value: 'general', text: 'General' },
                { value: 'casual', text: 'Casual' },
                { value: 'formal', text: 'Formal' },
                { value: 'long', text: 'Long' },
                { value: 'short', text: 'Short' }
            ]
        }
    },
    methods: {
        // this method is fetch data from server using Api and Fetch method
        paraphraseEngine() {
            // Start loading for enhance UX
            this.buttonValue = "Loading...";
            this.isLoading = "block";
            this.isLoaded = "hidden";
            this.paraphrasedText = [];
            toast("Your content is being prepared.", {
                "theme": "colored",
                "type": "info",
                "autoClose": 2000,
                "position": "bottom-right",
                "hideProgressBar": true,
                "transition": "slide",
                "dangerouslyHTMLString": true
            })
            const url = "https://api.ai21.com/studio/v1/paraphrase";
            const apiKey = "2IzQzM2Wywgjys8OfgKTyFgOqRS08kOk";

            fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    text: this.inputText, 
                    style: this.Targetstyle
                })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    this.buttonValue = "paraphrase";
                    this.isLoading = "hidden";
                    this.isLoaded = "block";
                    toast("Content is ready!", {
                        "theme": "colored",
                        "type": "success",
                        "autoClose": 2000,
                        "position": "bottom-right",
                        "hideProgressBar": true,
                        "transition": "slide",
                        "dangerouslyHTMLString": true
                    })
                    this.handleSuggestion(data.suggestions);
                })
                .catch(err => {
                    console.log("Error while paraphrasing: " + err.message);
                    toast("Error while paraphrasing.", {
                        "theme": "colored",
                        "type": "error",
                        "autoClose": 2000,
                        "position": "bottom-right",
                        "hideProgressBar": true,
                        "transition": "slide",
                        "dangerouslyHTMLString": true
                    })
                });
        },

        // handle empty textrea
        handleEmptyInp() {
            if (this.inputText.trim() === '') {
                this.alertMsg = "Fill in the textarea to proceed.";
                this.isColor = "text-red-600"
                toast("Fill in the textarea to proceed.", {
                    "theme": "colored",
                    "type": "warning",
                    "autoClose": 2000,
                    "position": "bottom-right",
                    "hideProgressBar": true,
                    "transition": "slide",
                    "dangerouslyHTMLString": true
                })
            } else {
                this.paraphraseEngine();
                this.alertMsg = "";
            }
        },

        // method to handle Suggestions
        handleSuggestion(data) {
            data.forEach((element) => {
                this.paraphrasedText.push(element.text);
            });
        },
        
        // copy method 
        copyParaphrase(text) {
            navigator.clipboard.writeText(text)
                .then(() => {
                    this.alertMsg = "Text copied to clipboard!";
                    this.isColor = "text-green-600"
                    toast(`Text copied: "${text}"`, {
                        "theme": "colored",
                        "type": "success",
                        "autoClose": 2000,
                        "position": "bottom-right",
                        "hideProgressBar": true,
                        "transition": "slide",
                        "dangerouslyHTMLString": true
                    })
                    setTimeout(() => {
                        this.alertMsg = null;
                    }, 2000);
                })
                .catch(err => {
                    this.alertMsg = "Could not copy text!", err;
                    this.isColor = "text-red-600"
                    toast("Could not copy text!", {
                        "theme": "colored",
                        "type": "error",
                        "autoClose": 2000,
                        "position": "bottom-right",
                        "hideProgressBar": true,
                        "transition": "slide",
                        "dangerouslyHTMLString": true
                    })
                });
        },

        preventTyping() {
            if (this.inputText.trim() === '') {
                this.exchange = 0
            }
            else {
                this.SentenceLength = this.inputText.split(' ');
                this.exchange = this.SentenceLength.length;
                this.alertMsg = "";
            }
        },

        // clear textarea
        // clearTextarea() {
        //     // this.inputText = ""
        //     // console.log(this.inputText)
        // },
        // try it function
        // tryItFunc() {
        //     // this.inputText = "jjd"
        //     // this.handleEmptyInp()
        //     // console.log("jhdjdj")
        // }
    },
}
</script>

<style>
#heading {
    color: #1f243c;
    font-size: 2.7rem !important;
    margin-top: 1.02rem 0;
}
</style>