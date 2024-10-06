<template>
    <a href="url" rel="noopener noreferrer">
        <slot></slot>
    </a>
</template>

<script>
export default {
    name: "CustomLink",
    props: {
        url: {
            type: String,
            required: true
        }
    }
}
</script>