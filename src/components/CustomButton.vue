<template>
    <button :type="buttontype" class="flex justify-center items-center">
        <ion-icon class="mr-1" :name="buttonicon"></ion-icon>
        {{ buttonname }}
    </button>
</template>

<script>
export default {
    name: "Button",
    props: {
        buttonname: {
            Type: String,
            Required: true
        },
        buttonicon: {
            Type: String,
            Required: false,
            default: ''
        },
        buttontype: {
            Type: String,
            Required: true,
            default: 'button'
        }
    }
}
</script>
