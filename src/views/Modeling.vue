<template>
    <div class="wrp">
        <div>Левая часть
            {{ value }}
        </div>
        <div>
            Правая часть
            <button
                @click="test"
            >Жми</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const value = ref(0);

const test = () => {
    value.value += 2;
    
}

</script>

<style>
.wrp {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    background-color: #f5f5f5;
}
</style>