<template>
    <button class="nesting-btn" 
    @click="countElement"
    :style="[`background: ${backgroundbutton}`]"
    >
        {{
        active
        }}
        {{
        title
        }}
    </button>
</template>

<script setup>
defineProps({
    active: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        // default: 'Click Me'
    },
    colorbutton: {
        type: String,
        default: 'white'
    },
    backgroundbutton: {
        type: String,
        default: 'blue'
    }
});

const emits = defineEmits(
    ['clickReaction', 'clickReaction2']
)

function countElement() {
    emits('clickReaction', 'returnClicked!', 0);
    emits('clickReaction2', 'Another click!', 1);
}
</script>

<style lang="scss" scoped>
// .nesting {
//     &-btn {
//         :color: colorbutton
//     }
// }
</style>