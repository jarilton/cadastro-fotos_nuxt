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
    height: 70px;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 98, 121, 1) 50%,
      rgba(2, 0, 36, 1) 100%,
    );
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
    color: #ffffff;
  }
}

</style>
