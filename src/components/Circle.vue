<template>
    <button @click="onChange(text)">Жми</button>
</template>

<script setup>
import { ref } from 'vue';
defineProps({
    text: {
        type: String,
        required: true
    }
})

const emits = defineEmits(
    ['clickMe']
);

const onChange = (text) => {
    emits('clickMe', text);
}
</script>
