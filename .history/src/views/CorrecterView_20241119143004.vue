<template>
    <div>
        <Breadcrumb />
        <router-view />
    </div>
    <main>
        <form @submit.prevent="handleEmptyInp()">
            <div class="w-11/12 flex items-start justify-between p-1 mx-auto mt-12">
                <div class="bg-slate-50 h-96 w-2/3 rounded-md overflow-hidden relative">
                    <div class="flex items-center justify-between  p-1 px-4 border-b-2 border-b-slate-200">
                        <section>
                            <select class="bg-slate-50">
                                <option value="English">English</option>
                                <option value="Arabic">Arabic</option>
                                <option value="Spanish">Spanish</option>
                            </select>
                        </section>
                        <section class="p-3 px-4 flex items-center">
                            <CustomButton @click="copyCorretedText(content)" class="text-sm text-slate-600"
                                type="button" :buttonname="'Copy'" :buttonicon="'copy-outline'" />
                            <CustomButton @click="clearArea()" class="text-sm text-slate-600 ml-5" type="button"
                                :buttonname="'Delete'" :buttonicon="'trash-outline'" />
                        </section>
                    </div>
                    <div class="relative h-full">
                        <textarea v-model="content" @input="countWordsAndChars()" spellcheck="false"
                            autocorrect="off" autocomplete="off" placeholder="enter your text"
                            class="bg-slate-50 w-full h-full border-none rounded-md py-4 px-3 pr-4 outline-none resize-none border border-gray-200 ml-1"></textarea>
                    </div>
                    <div class="flex items-center absolute left-0 bottom-0">
                        <p class="text-sm text-gray-400 capitalize py-2 px-4">
                            characters:
                            <span class="text-gray-900">{{ Characters }}</span>
                        </p>
                        <p class="text-sm text-gray-400 capitalize py-2 px-2 ml">
                            words:
                            <span class="text-gray-900">{{ Words }}</span>
                        </p>
                    </div>
                    <div class="absolute right-2 bottom-2">
                        <CustomButton
                            class="py-1.5 px-4 capitalize text-[17px] bg-indigo-500 font-light rounded-md mx-auto text-white"
                            :buttonname="buttonValue" type="submit" :buttonicon="icon">
                        </CustomButton>
                        <LoaderSvg v-if="isLoading" class="absolute top-3 left-3.5" />
                    </div>
                </div>
                <div class="bg-slate-50 h-96 w-2/6 rounded-md ml-2 overflow-hidden">
                    <div class="flex items-center justify-around mx-2">
                        <div
                            class="text-nowrap w-2/4 text-center py-4 text-sm font-semibold text-gray-600 border-b-2 border-b-slate-200 capitalize">
                            Correct {{ errors.length }}
                        </div>
                        <div
                            class="w-2/4 text-center py-4 text-sm font-semibold text-gray-600 border-b-2 border-b-slate-200 capitalize ml-4">
                            paraphrase
                        </div>
                    </div>
                    <div v-for="(error, index) in errors" :key="index"
                        class="bg-white rounded py-3 px-4 w-11/12 shadow-md my-4 flex items-center mx-auto">
                        <p class="bg-green-500 text-base text-white font-normal py-0.5 px-3 capitalize rounded-md">
                            {{ error.suggestion }}
                        </p>
                        <span class="text-sm text-slate-900 font-normal ml-4 capitalize">
                            - {{ error.correctionType }}
                        </span>
                    </div>
                </div>
            </div>
        </form>
    </main>
    <footer>
        <footer-section />
    </footer>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb.vue';
import CustomButton from '@/components/CustomButton.vue';
import LoaderSvg from '@/components/LoaderSvg.vue';

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
    name: "CorrecterView",
    components: {
        CustomButton,
        LoaderSvg,
        Breadcrumb
    },
    data() {
        return {
            content: "",
            Isdisabled: false,
            isLoading: false,
            icon: "flash-outline",
            buttonValue: "check",
            exChange: 0,
            limit: 500,
            Characters: 0,
            Words: 0,
            wordsArray: [],
            corrections: [],
            errors: [],
        };
    },

    methods: {
        handleEmptyInp() {
            if (this.content.trim() === '') {
                toast("Type text to correct!", {
                    "theme": "colored",
                    "type": "warning",
                    "autoClose": 2000,
                    "position": "bottom-right",
                    "hideProgressBar": true,
                    "transition": "slide",
                    "dangerouslyHTMLString": true
                })
            } else {
                return this.grammarChecker();
            }
        },

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

        // handle grammar requests
        grammarChecker() {
            const url = 'https://api.ai21.com/studio/v1/gec';
            const apiKey = "aMxrXBtMLyPzH48UIXrl1oMZqkroRrVh";

            this.icon = "no-thing"
            this.buttonValue = "loading..."
            this.isLoading = true
            toast("Your content is being prepared!", {
                "theme": "colored",
                "type": "info",
                "autoClose": 2000,
                "position": "bottom-right",
                "hideProgressBar": true,
                "transition": "slide",
                "dangerouslyHTMLString": true
            })

            fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "text": this.content
                })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    if (data.corrections.length == 0) {
                        this.errors = []
                        this.buttonValue = "It's all correct"
                        this.isLoading = false
                        this.icon = "flash-outline"
                        toast("Everything is correct!", {
                            "theme": "colored",
                            "type": "success",
                            "autoClose": 2000,
                            "position": "bottom-right",
                            "hideProgressBar": true,
                            "transition": "slide",
                            "dangerouslyHTMLString": true
                        })
                        setTimeout(() => {
                            this.buttonValue = "check"
                        }, 4000);
                    }
                    else {
                        this.errors = []
                        this.buttonValue = "check"
                        this.isLoading = false
                        this.icon = "flash-outline"
                        this.handleCorrections(data.corrections)
                        this.correctError(data.corrections)
                    }
                })
                .catch(error => {
                    this.buttonValue = "check"
                    this.isLoading = false
                    this.icon = "flash-outline"
                    console.error('There was a problem with the fetch operation:', error);
                });
        },

        // store corrections to ARRAY
        handleCorrections(data) {
            data.forEach((element) => {
                this.errors.push({
                    "suggestion": element.suggestion,
                    "correctionType": element.correctionType
                })
            });
        },


        correctError(data) {
            let correctedContent = this.content;
            data.forEach(element => {
                const regex = new RegExp(element.originalText, 'g');
                correctedContent = correctedContent.replace(regex, element.suggestion);
            });
            toast("Text has been corrected!", {
                "theme": "colored",
                "type": "success",
                "autoClose": 2000,
                "position": "bottom-right",
                "hideProgressBar": true,
                "transition": "slide",
                "dangerouslyHTMLString": true
            })
            this.content = correctedContent;
        },

        // Clear textarea
        clearArea() {
            if (this.content !== "") {
                this.content = ""
                this.errors = []
                this.Words = 0
                this.Characters = 0
                toast("The input is now blank!", {
                    "theme": "colored",
                    "type": "success",
                    "autoClose": 2000,
                    "position": "bottom-right",
                    "hideProgressBar": true,
                    "transition": "slide",
                    "dangerouslyHTMLString": true
                })
            }
        },

        // Copy function
        copyCorretedText(text) {
            if (this.content !== "") {
                navigator.clipboard.writeText(text)
                    .then(() => {
                        toast(`Text copied: "${text}"`, {
                            "theme": "colored",
                            "type": "success",
                            "autoClose": 2000,
                            "position": "bottom-right",
                            "hideProgressBar": true,
                            "transition": "slide",
                            "dangerouslyHTMLString": true
                        })
                    })
                    .catch(err => {
                        toast(`Could not copy text! ${err}`, {
                            "theme": "colored",
                            "type": "error",
                            "autoClose": 2000,
                            "position": "bottom-right",
                            "hideProgressBar": true,
                            "transition": "slide",
                            "dangerouslyHTMLString": true
                        })
                    });
            } else {
                toast(`There's nothing available to copy!`, {
                    "theme": "colored",
                    "type": "error",
                    "autoClose": 2000,
                    "position": "bottom-right",
                    "hideProgressBar": true,
                    "transition": "slide",
                    "dangerouslyHTMLString": true
                })
            }
        }
    }
}
</script>
