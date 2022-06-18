<template>
  <div class="sidebar">
    <div class="sidebar__container">
      <Nuxt-link class="sidebar__link" to="/"> Inicio </Nuxt-link>
      <Nuxt-link class="sidebar__link" to="/registration"> Cadastro de fotos </Nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style lang="scss" scoped>
.sidebar {
  &__container {
    
  }
  &__link {
    text-decoration: none;
    color: #ffffff;
    margin-left: 20px;
  }
}
</style>