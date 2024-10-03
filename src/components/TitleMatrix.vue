<template>
    <h3 class="title-matrix">
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
.title-matrix {
    margin: 250px auto 0;
    text-align: center;
}
</style>