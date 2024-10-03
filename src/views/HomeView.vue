<template>
  <main>
    <input v-model="op1" type="number" @input="onChangeMatrix" placeholder="k" />
    <input v-model="op2" type="number" @input="onChangeMatrix" placeholder="k" />
    <input v-model="op3" type="number" @input="onChangeMatrix" placeholder="k" />
    <input v-model="op4" type="number" @input="onChangeMatrix" placeholder="k" />
    =
    {{ determination }}
  </main>
  <Footer />
</template>

<script setup>
import { ref } from 'vue'; // Переменные состояния
import Footer from "../components/Footer.vue" // Компонент, используемый в вёрстке
name: "HomeView";

// Перменные взаимосвязанные с input, при помощи v-model
const op1 = ref(0);
const op2 = ref(0);
const op3 = ref(0);
const op4 = ref(0);
const determination = ref(0);

/**
 * Функция определения нового массива (функция - реакция на состояние)
 * Присваивание результата определеителя матрицы 2 на 2 переменной состояния
 */
const onChangeMatrix = () => {
  // console.log(op1.value, op2.value, op3.value, op4.value);
  const matrixArray = [[op1.value, op2.value], [op3.value, op4.value]];
  // console.log(matrixArray);
  determination.value = resultDeterminationMatrix(matrixArray);
}

/**
 * Функция расчёта определителя матрицы 2 на 2
 * @param { Array[][] } matrix матрица для расчёта
 * @return { Number } значение определителя
 */
const resultDeterminationMatrix = (matrix) => {
  // Цикл один, потому что двигаемся по столбцам
  let mainDiagonal;
  let secondaryDiagonal;
  for (let i = 0; i < matrix.length; i++) {
    switch (i) {
      case 0:
        mainDiagonal =  resultMinor2to2(i, matrix);
        break;
      case 1:
        secondaryDiagonal = resultMinor2to2(i, matrix);
        break;
    }
  }

  // console.log(mainDiagonal, secondaryDiagonal)

  return mainDiagonal + secondaryDiagonal;
}

/**
 * Расчёт минора со значением на определённо диагонали матрицы
 * @param { Number } i номер столбца
 * @param { Array[][] }matrix матрица для расчёта
 * @return { Number } результат расчёта минора
 */
const resultMinor2to2 = (i, matrix) => {
  return matrix[0][i] * Math.pow(-1, 1 + i + 1) * matrix[1][matrix.length - i - 1];
}

</script>

<style lang="scss" scoped></style>