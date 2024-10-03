<template>
  <main>
    <input type="number" @input="onChangeMatrix(1)" placeholder="k" />
    <input type="number" @input="onChangeMatrix(2)" placeholder="k" />
    <input type="number" @input="onChangeMatrix(3)" placeholder="k" />
    <input type="number" @input="onChangeMatrix(4)" placeholder="k" />
  </main>
  <Footer />
</template>

<script setup>
import { ref } from 'vue';
import Footer from "../components/Footer.vue"
name: "HomeView";

const op1 = ref(0);
const op2 = ref(0);
const op3 = ref(0);
const op4 = ref(0)

const onChangeMatrix = (numInput) => {
  switch (numInput) {
    case 1:
      console.log(numInput)
      break;
    case 2:
      console.log(numInput)
      break;
    case 3:
      console.log(numInput)
      break;
    case 4:
      console.log(numInput)
      break;
  }
}


</script>

<style lang="scss" scoped></style>