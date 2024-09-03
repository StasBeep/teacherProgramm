<template>
    <button class="btn" @click="activeButton">{{ active }}</button>
</template>

<script setup>
name: "ActiveButton"

import { ref } from 'vue';

defineProps({
    active: {
        type: String,
        required: true
    }
})

const emit = defineEmits(
    ['act']
)

const stActive = ref(false);

function activeButton() {
    if (!stActive.value) {
        emit('act', true);
        stActive.value = !stActive.value;
    } else {
        emit('act', false);
        stActive.value = !stActive.value;
    }

}
</script>

<style lang="scss" scoped>
.btn {
    margin-left: 20px;
    background-color: transparent;
    border: 1px solid #2d40a3;
    border-radius: 5px;
    padding: 10px;
    color: #2d40a3;
    font-size: 25px;
    cursor: pointer;
    transition: 0.5s ease-in-out color,
        0.3s ease-in-out background-color,
        0.3s ease-in-out border;

    &:hover {
        color: #fff;
        background-color: #2d40a3;
        border: 1px solid #fff;
    }
}
</style>