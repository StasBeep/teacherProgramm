<template>
    <h3>
        {{ title }}
    </h3>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" scoped>

</style>