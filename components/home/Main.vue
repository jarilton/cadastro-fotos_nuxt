<template>
  <div class="main">
    <div class="container">
      <div class="main__box">
        <div class="main__title">Sejam bem vindos ao cadastro de fotos!</div>
        <div class="main__description">
          <Nuxt-link to="registration">
            <img src="@/assets/icons/icon-plus.png" alt="Logo de adicionar fotos" />
          </Nuxt-link>
          <p>Cadastrar Fotos</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  &__title {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    height: 100%;
    margin-top: 20px;
  }
  &__description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 266px;
    border: 1px solid #808080;
    border-radius: 10px;
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
    img {
      width: 50px;
      height: 50px;
      border: 2px solid #19d619;
      border-radius: 26px;
      padding: 2px;
    }
  }
}

@media (min-width: 768px) {
  .main {
    &__description {
      height: 350px;
    }
  }
}
@media (min-width: 1024px) {
  .main {
    &__description {
      height: 400px;
    }
  }
}
@media (min-width: 1280px) {
  .main {
    &__description {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 55vh;
      width: 60%;
      margin: 3% 20%;
    }
  }
}
</style>
