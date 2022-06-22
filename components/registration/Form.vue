<template>
  <div class="form">
    <div class="form__container">
      <div class="form__title">Cadastro</div>
<<<<<<< HEAD
=======
      {{ this.photo }}
>>>>>>> feature/form
      <form @submit.prevent="grava()">
        <div class="form__control">
          <label for="title">Titulo</label>
          <input
            type="text"
            id="titulo"
            autocomplete="off"
            placeholder="Digite o titulo"
            v-model="photo.title"
          />
        </div>
        <div class="form__control">
          <label for="url">URL</label>
          <input
            type="text"
            id="titulo"
            autocomplete="off"
            placeholder="Digite a url"
            v-model="photo.url"
          />
        </div>
        <div class="form__control">
          <label for="description">Descrição</label>
          <input
            type="text"
            id="titulo"
            autocomplete="off"
            placeholder="Digite a descrição"
            v-model="photo.description"
          />
        </div>
        <div class="form__button">
          <Nuxt-link to="/" type="submit" class="form__back">Voltar</Nuxt-link>
          <button class="form__save">Salvar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Photo from '@/domain/photo/Photo'
export default {
  name: "Form",
  data() {
    return {
      photo: new Photo()
    };
  },
  methods: {
    grava() {
      this.$http.post('http://localhost:3000/photos')
        .then(() => this.photo = new Photo(), err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  &__container {
    padding: 10px;
  }
  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    font-weight: bold;
  }
  &__control {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    label {
      font-size: 20px;
      font-weight: bold;
    }
    input {
      height: 40px;
      border: 2px solid #808080;
      border-radius: 5px;
      margin: 10px 0 20px 0;
      padding: 10px;
    }
  }
  &__button {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  &__back {
    border: 1px solid #808080;
    border-radius: 10px;
    font-weight: bold;
    height: 40px;
    width: 100px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #000000;
  }
  &__save {
    background-color: #0000ff;
    color: #ffffff;
    font-weight: bold;
    border: 1px solid #808080;
    border-radius: 10px;
    height: 40px;
    width: 100px;
    margin-left: 10px;
  }
}
</style>
