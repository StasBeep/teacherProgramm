<template>
    <div :style="[`color: ${textColor}`]">
        {{ text }}
    </div>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        requred: true
    },
    textColor: {
        type: String,
        requred: true
    }
})
</script>

<style></style>