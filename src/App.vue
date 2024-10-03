<script setup>
</script>

<template>
  <header>
    <nav class="menu">
      <RouterLink to="/">2-x мерная</RouterLink>
      <RouterLink to="/three-dimensional">3-x мерная</RouterLink>
      <RouterLink to="/four-dimensional">4-x мерная</RouterLink>
    </nav>
  </header>

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
