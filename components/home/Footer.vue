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
  margin-top: 100px;
  &__container {
    height: 70px;
    background-color: #3f2c2c;
    height: 70px;
    background: #000000;
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
    font-size: 13px;
    font-weight: bold;
    color: #ffa500;
  }
}
</style>
