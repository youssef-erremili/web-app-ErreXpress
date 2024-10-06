<template>
    <div class="option">
        <select :value="modelValue"
            class="bg-gray-50 border border-gray-300 outline-none cursor-pointer text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2 px-2"
            @change="$emit('update:modelValue', $event.target.value)">
            <option v-for="(option, index) in options" :key="index" :value="option.value">
                {{ option.text }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'SelectInput',
    props: {
        modelValue: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        }
    }
}
</script>
