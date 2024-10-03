<template>
    <footer class="footer">
        2024 - {{ dateYear }}
    </footer>
</template>

<script setup>
const dateYear = new Date().getFullYear();
</script>

<style lang="scss" scoped>
.footer {
    text-align: center;
    margin-top: 20px;
}
</style>