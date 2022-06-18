<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__description">
        ©2022. Todos os Direitos reservados. Desenvolvido por Jamal
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  &__container {
    height: 120px;
    background-color: #3F2C2C;
    bottom: 0;
    position: fixed;
    width: 100%;
    text-align: center;
  }
  &__description {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
  }
}
</style>
