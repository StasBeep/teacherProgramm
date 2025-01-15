<template>
    {{ p }}
    <Circle text="1" @clickMe="onChange" />
    <Circle text="2" @clickMe="onChange" />
    <Circle text="3" @clickMe="onChange" />
</template>

<script setup>
import { ref } from 'vue';
import Circle from '../components/Circle.vue';

const p = ref(0);

const onChange = (value) => {
    p.value = value;
};
</script>