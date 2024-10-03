<template>
  <main>
    <input v-model="message" type="number" placeholder="k" @input="onChangeMatrix" />
    {{ message }}
    <input type="number">
    <input type="number">
    <input type="number">
  </main>
  <Footer />
</template>

<script setup>
import { ref } from 'vue';
import Footer from "../components/Footer.vue"
name: "HomeView";

const message = ref(0);

const onChangeMatrix = (event) => {
  console.log(Number(event.target.value));
  message.value = event.target.value;
  console.log("Состояние переменной message: " + message.value)
} 


</script>

<style lang="scss" scoped></style>