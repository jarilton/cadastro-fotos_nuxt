<template>
  <div class="header">
    <div class="header__container">
      <img 
        src="@/assets/img/logo.png" 
        alt="Logo" 
        width="70" 
        height="70" 
      />
      <Sidebar />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
  .header {
    background-color: #3F2C2C;
    &__container {
      padding: 20px 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        border-radius: 35px
      }
    }
  }
</style>
