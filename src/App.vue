<script setup>
</script>

<template>
  <RouterView />
</template>

<style lang="scss" scoped>
.menu {
  width: 600px;
  display: flex;
  justify-content: space-between;
}

@media (max-width: 700px) {
  .menu {
    width: 265px;
  }
}
</style>
