<template>
    <div>
        <Breadcrumb />
        <router-view />
    </div>
    <main>
        <div class="w-11/12 mx-auto mt-11">
            <form @submit.prevent="handleEmptyInp()">
                <div class="options flex items-center justify-between py-1">
                    <SelectInput v-model="source" name="source" :options="langaueSymbole" />
                    <button type="button" class="cursor-pointer text-3xl" @click="exChange()">
                        <ion-icon name="swap-horizontal-outline" />
                    </button>
                    <SelectInput v-model="target" name="target" :options="langaueSymbole"
                        @change="tranaslateOnChange()" />
                </div>
                <div class="w-full flex h-auto justify-items-center justify-center">
                    <div class="w-full relative overflow-hidden">
                        <section class="absolute right-2 bottom-2 font-normal text-slate-500 text-sm">
                            <span :class="lenghtColor">{{ sizeLength }} / {{ limitLength }}</span>
                        </section>
                        <textarea id="source" name="translateFrom" spellcheck="false" autocapitalize="off"
                            autocorrect="off" autocomplete="off" :placeholder="placesource" cols="30" rows="10"
                            :class="textToLeft()" @input="preventTyping()" v-model="translateFrom"
                            class="w-full h-64 rounded-md font-normal py-4 px-3 pr-12 outline-none text-xl resize-none border border-gray-200 bg-gray-100"></textarea>
                        <button type="button" class="absolute top-2 right-2 z-10 text-3xl" @click="clearTextarea()">
                            <ion-icon name="close-outline" />
                        </button>
                        <section class="absolute bottom-0 left-1 z-30 p-2 w-full">
                            <button type="button" @click="CopyTo()">
                                <ion-icon class="text-2xl font-normal" name="clipboard-outline" />
                            </button>
                            <button type="button">
                                <ion-icon class="text-2xl font-normal pl-1" name="volume-high-outline" />
                            </button>
                        </section>
                    </div>
                    <div class="w-full relative">
                        <textarea id="target" name="translateFrom" spellcheck="false" autocapitalize="off"
                            autocorrect="off" autocomplete="off" :placeholder="placetarget" cols="30" rows="10"
                            v-model="translateTo" readonly v-on:focus="$event.target.select()" ref="textarea"
                            :class="textToRight()"
                            class="w-full h-64 rounded-md font-normal py-4 px-3 pr-4 outline-none text-xl resize-none border border-gray-200 bg-gray-100 ml-1">
                            </textarea>
                        <section class="w-full absolute -mt-12 p-2 z-50">
                            <button type="button" @click="CopyFrom()">
                                <ion-icon class="text-2xl font-normal pl-1" name="copy-outline" />
                            </button>
                        </section>
                    </div>
                </div>
                <div class="block w-fit mx-auto">
                    <button type="submit" :disabled="Isdisabled" :class="btnColor"
                        class="flex items-center py-2 px-6 capitalize text-lg font-light rounded-md mx-auto text-white">
                        <LoaderSvg v-if="isLoading" />
                        {{ buttonValue }}
                    </button>
                </div>
            </form>
            <h1 class="text-2xl font-semibold capitalize">Related words :</h1>
            <ul class="mt-4 mb-10 flex">
                <li v-for="(keyword, index) in relatedKeyWord" :key="index"
                    class="rounded-full clr-related font-normal cursor-pointer bg-related lowercase text-base text-black py-1 px-2 m-2">
                    {{ keyword }}
                </li>
            </ul>
        </div>
    </main>
    <footer>
        <footer-section />
    </footer>
</template>

<script>
import SelectInput from '@/components/SelectInput.vue'
import LoaderSvg from '@/components/LoaderSvg.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
    name: 'TranslateView',
    components: {
        SelectInput,
        LoaderSvg,
        Breadcrumb,
    },
    data() {
        return {
            translateFrom: '',
            placesource: 'Start typing',
            translateTo: '',
            exchange: '',
            buttonValue: "translate",
            isLoading: false,
            source: 'en-GB',
            target: 'ar-SA',
            placetarget: 'translation',
            languageChange: '',
            relatedKeyWord: [],
            sizeLength: 0,
            limitLength: 150,
            Isdisabled: false,
            lenghtColor: "",
            btnColor: "bg-indigo-500",
            langaueSymbole: [
                { value: 'am-ET', text: 'Amharic' },
                { value: 'ar-SA', text: 'Arabic' },
                { value: 'be-BY', text: 'Bielarus' },
                { value: 'bem-ZM', text: 'Bemba' },
                { value: 'bi-VU', text: 'Bislama' },
                { value: 'bjs-BB', text: 'Bajan' },
                { value: 'bn-IN', text: 'Bengali' },
                { value: 'bo-CN', text: 'Tibetan' },
                { value: 'br-FR', text: 'Breton' },
                { value: 'bs-BA', text: 'Bosnian' },
                { value: 'cop-EG', text: 'Coptic' },
                { value: 'cs-CZ', text: 'Czech' },
                { value: 'cy-GB', text: 'Welsh' },
                { value: 'da-DK', text: 'Danish' },
                { value: 'dz-BT', text: 'Dzongkha' },
                { value: 'de-DE', text: 'German' },
                { value: 'dv-MV', text: 'Maldivian' },
                { value: 'el-GR', text: 'Greek' },
                { value: 'en-GB', text: 'English' },
                { value: 'es-ES', text: 'Spanish' },
                { value: 'et-EE', text: 'Estonian' },
                { value: 'eu-ES', text: 'Basque' },
                { value: 'fa-IR', text: 'Persian' },
                { value: 'fi-FI', text: 'Finnish' },
                { value: 'fn-FNG', text: 'Fanagalo' },
                { value: 'fo-FO', text: 'Faroese' },
                { value: 'fr-FR', text: 'French' },
                { value: 'gl-ES', text: 'Galician' },
                { value: 'gu-IN', text: 'Gujarati' },
                { value: 'ha-NE', text: 'Hausa' },
                { value: 'he-IL', text: 'Hebrew' },
                { value: 'hi-IN', text: 'Hindi' },
                { value: 'hr-HR', text: 'Croatian' },
                { value: 'hu-HU', text: 'Hungarian' },
                { value: 'id-ID', text: 'Indonesian' },
                { value: 'is-IS', text: 'Icelandic' },
                { value: 'it-IT', text: 'Italian' },
                { value: 'ja-JP', text: 'Japanese' },
                { value: 'kk-KZ', text: 'Kazakh' },
                { value: 'km-KM', text: 'Khmer' },
                { value: 'kn-IN', text: 'Kannada' },
                { value: 'ko-KR', text: 'Korean' },
                { value: 'ku-TR', text: 'Kurdish' },
                { value: 'ky-KG', text: 'Kyrgyz' },
                { value: 'la-VA', text: 'Latin' },
                { value: 'lo-LA', text: 'Lao' },
                { value: 'lv-LV', text: 'Latvian' },
                { value: 'men-SL', text: 'Mende' },
                { value: 'mg-MG', text: 'Malagasy' },
                { value: 'mi-NZ', text: 'Maori' },
                { value: 'ms-MY', text: 'Malay' },
                { value: 'mt-MT', text: 'Maltese' },
                { value: 'my-MM', text: 'Burmese' },
                { value: 'ne-NP', text: 'Nepali' },
                { value: 'niu-NU', text: 'Niuean' },
                { value: 'nl-NL', text: 'Dutch' },
                { value: 'no-NO', text: 'Norwegian' },
                { value: 'ny-MW', text: 'Nyanja' },
                { value: 'ur-PK', text: 'Pakistani' },
                { value: 'pau-PW', text: 'Palauan' },
                { value: 'pa-IN', text: 'Panjabi' },
                { value: 'ps-PK', text: 'Pashto' },
                { value: 'pis-SB', text: 'Pijin' },
                { value: 'pl-PL', text: 'Polish' },
                { value: 'pt-PT', text: 'Portuguese' },
                { value: 'rn-BI', text: 'Kirundi' },
                { value: 'ro-RO', text: 'Romanian' },
                { value: 'ru-RU', text: 'Russian' },
                { value: 'sg-CF', text: 'Sango' },
                { value: 'si-LK', text: 'Sinhala' },
                { value: 'sk-SK', text: 'Slovak' },
                { value: 'sm-WS', text: 'Samoan' },
                { value: 'sn-ZW', text: 'Shona' },
                { value: 'so-SO', text: 'Somali' },
                { value: 'sq-AL', text: 'Albanian' },
                { value: 'sr-RS', text: 'Serbian' },
                { value: 'sv-SE', text: 'Swedish' },
                { value: 'sw-SZ', text: 'Swahili' },
                { value: 'ta-LK', text: 'Tamil' },
                { value: 'te-IN', text: 'Telugu' },
                { value: 'tet-TL', text: 'Tetum' },
                { value: 'tg-TJ', text: 'Tajik' },
                { value: 'th-TH', text: 'Thai' },
                { value: 'ti-TI', text: 'Tigrinya' },
                { value: 'tk-TM', text: 'Turkmen' },
                { value: 'tl-PH', text: 'Tagalog' },
                { value: 'tn-BW', text: 'Tswana' },
                { value: 'to-TO', text: 'Tongan' },
                { value: 'tr-TR', text: 'Turkish' },
                { value: 'uk-UA', text: 'Ukrainian' },
                { value: 'uz-UZ', text: 'Uzbek' },
                { value: 'vi-VN', text: 'Vietnamese' },
                { value: 'wo-SN', text: 'Wolof' },
                { value: 'xh-ZA', text: 'Xhosa' },
                { value: 'yi-YD', text: 'Yiddish' },
                { value: 'zu-ZA', text: 'Zulu' }
            ]
        }
    },
    computed: {

    },
    methods: {
        // this method is fetch data from server using Api and Fetch method
        translateEngine() {
            this.buttonValue = "Loading..."
            this.isLoading = true
            this.relatedKeyWord = []
            let appUrl = `https://api.mymemory.translated.net/get?q=${this.translateFrom.trim()}!&langpair=${this.source
                }|${this.target}`
            fetch(appUrl)
                .then((response) => response.json())
                .then((data) => {
                    this.buttonValue = "translate"
                    this.isLoading = false
                    this.translateTo = data.responseData.translatedText
                    this.handleKeyWord(data.matches)
                })
                .catch((error) => {
                    this.isLoading = false
                    this.buttonValue = "translate"
                    console.error('Failed to fetch data content.', error)
                    toast("Failed to fetch data content", {
                        "theme": "colored",
                        "type": "error",
                        "autoClose": 2000,
                        "position": "bottom-right",
                        "hideProgressBar": true,
                        "transition": "slide",
                        "dangerouslyHTMLString": true
                    })
                })
        },

        // handler the error of empty field
        handleEmptyInp() {
            if (this.translateFrom.trim() === '') {
                toast("Type text to translate!", {
                    "theme": "colored",
                    "type": "warning",
                    "autoClose": 2000,
                    "position": "bottom-right",
                    "hideProgressBar": true,
                    "transition": "slide",
                    "dangerouslyHTMLString": true
                })
            } else {
                return this.translateEngine();
            }
        },

        // This method to handle related keyword
        handleKeyWord(data) {
            data.forEach((element) => {
                this.relatedKeyWord.push(element.translation)
            })
        },

        // Clear the textarea fields
        clearTextarea() {
            this.translateFrom = ''
            this.translateTo = ''
            this.placesource = 'enter your text'
        },

        // this method to exchange values between source and target fields
        exChange() {
            // exhcange text area values
            this.exchange = this.translateFrom
            this.translateFrom = this.translateTo
            this.translateTo = this.exchange

            // exhcange text select tag values
            this.languageChange = this.source
            this.source = this.target
            this.target = this.languageChange
        },

        //change direction method
        textToRight() {
            if (this.target === 'ar-SA') {
                this.placetarget = 'الترجمة'
                return 'reverse-text-right'
            } else {
                this.placetarget = 'translation'
            }
        },

        //change direction method
        textToLeft() {
            if (this.source === 'ar-SA') {
                this.placesource = 'أدخل النص المراد ترجمته'
                return 'reverse-text-left'
            } else {
                this.placesource = 'start typing'
            }
        },

        //copy to textarea source method
        CopyTo() {
            navigator.clipboard
                .readText()
                .then((text) => {
                    this.translateFrom = text.trim()
                    this.translateEngine()
                    toast("Copied text paste successfully", {
                        "theme": "colored",
                        "type": "success",
                        "autoClose": 2000,
                        "position": "bottom-right",
                        "hideProgressBar": true,
                        "transition": "slide",
                        "dangerouslyHTMLString": true
                    })
                })
                .catch((err) => {
                    console.error('Failed to read clipboard contents: ', err)
                    toast("Something went wrong", {
                        "theme": "colored",
                        "type": "error",
                        "autoClose": 2000,
                        "position": "bottom-right",
                        "hideProgressBar": true,
                        "transition": "slide",
                        "dangerouslyHTMLString": true
                    })
                })
        },

        //copy to textarea source method
        CopyFrom() {
            if (this.translateTo.trim() !== '') {
                this.$refs.textarea.focus();
                document.execCommand('copy');
                toast("You copied text successfully", {
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

        // Prevent user from typing when he reach the limits  
        preventTyping() {
            this.sizeLength = this.translateFrom.length
            if (this.translateFrom.length >= this.limitLength) {
                this.lenghtColor = "text-red-600"
                this.btnColor = "bg-gray-400"
                this.Isdisabled = true
                toast("You've reached the maximum length", {
                    "theme": "colored",
                    "type": "warning",
                    "autoClose": 2000,
                    "position": "bottom-right",
                    "hideProgressBar": true,
                    "transition": "slide",
                    "dangerouslyHTMLString": true
                })
            }
            else {
                this.lenghtColor = ""
                this.btnColor = "bg-indigo-500"
                this.Isdisabled = false
            }
        },

    },
}
</script>

<style scoped>
.bg-related {
    background-color: #E1ECFB !important;
}

.clr-related {
    color: #1983ff !important;
}

.reverse-text-right {
    direction: rtl;
}

.reverse-text-left {
    direction: rtl;
}
</style>
