<template>
  <main class="wrapper">
    Счётчик: <span :style="[counter % 5 == 0 ? 'color: red' : 'color: #2d40a3']"
      :v-on="[counter % 5 == 0 ? comment = true : comment = false]">
      {{ counter }}
    </span>
    <button class="wrapper-btn" @click="addCounter">Жми</button>
    <ActiveButton active="Активация" @act="onChangeActive" />
    <span class="wrapper-comment" v-show="comment">
      Делится на 5 без остатка
    </span>
    <span class="wrapper-active" v-if="active">Вызов функции активации</span>
  </main>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import ActiveButton from '@/components/ActiveButton.vue';

name: "HomeView";

const counter = ref(0);
const comment = false;
const active = ref(false);

watchEffect(() => console.log(counter.value));

function addCounter() {
  counter.value += 1;
}

function onChangeActive(value) {
  active.value = value; 
}

onMounted(() => {
  console.log(counter.value);
  counter.value = 2;
  console.log(counter.value);
});

</script>

<style lang="scss" scoped>
.wrapper {
  color: #2d40a3;
  font-size: 25px;

  &-btn {
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

    &-comment {
      display: block;
      color: green;
    }

    &-active {
      display: block;
      color: green;
    }
  }
</style>