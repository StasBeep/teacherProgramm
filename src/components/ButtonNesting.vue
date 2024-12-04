<template>
    <button class="nesting-btn" 
    :style="[`background: ${backgroundbutton}`]"
    >
        {{
        active
        }}
        {{
        title
        }}
    </button>
</template>

<script setup>
defineProps({
    active: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        // default: 'Click Me'
    },
    colorbutton: {
        type: String,
        default: 'white'
    },
    backgroundbutton: {
        type: String,
        default: 'blue'
    }
})
</script>

<style lang="scss" scoped>
// .nesting {
//     &-btn {
//         :color: colorbutton
//     }
// }
</style>