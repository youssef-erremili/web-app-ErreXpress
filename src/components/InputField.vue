<template>
    <textarea :class="CustomClass" placeholder="enter your text"
        class="rounded-md font-normal py-4 px-3 pr-4 outline-none text-xl resize-none border border-gray-200 ml-1"
        v-model="internalValue" @input="updateValue"></textarea>
</template>

<script>
export default {
    props: {
        CustomClass: {
            type: String,
            required: false
        },
        valueInput: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            internalValue: this.valueInput || ''
        };
    },
    methods: {
        updateValue() {
            this.$emit('input', this.internalValue);
        }
    },
    watch: {
        valueInput(newValue) {
            this.internalValue = newValue;
        }
    }
}
</script>
