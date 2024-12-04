<template>
    <div>
        <ButtonNesting title="Жми" active="Жми" @clickReaction="reactonButton" @clickReaction2="reactonButton2" />
        <ButtonNesting title="Жми" />
    </div>
</template>

<script setup>
import ButtonNesting from '@/components/ButtonNesting.vue';

function reactonButton(value, value2)
{
    console.log(value + value2);
}

function reactonButton2(value, value2) {
    console.log(value + value2);
}
</script>

<style>

</style>