<template>
  <div class="form">
    <div class="form__container">
      <form @submit.prevent="submitForm()" class="form__box">
        <div class="form__title">Cadastro</div>
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
          <button class="form__save">Salvar</button>
          <Nuxt-link to="/" type="submit" class="form__back">Voltar</Nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions  } from "vuex";
export default {
  name: "Form",
  data() {
    return {
      photo: {
        id: null,
        title: null,
        url: null,
        description: null,
      }
    };
  },
  created() {
    if(this.currentPhotos) {
      this.photo.id = this.currentPhotos.id;
      this.photo.title = this.currentPhotos.title;
      this.photo.url = this.currentPhotos.url;
      this.photo.description = this.currentPhotos.description;
    }
  },
  methods: {
    ...mapActions({
      submitPhotos: 'photos/submitPhotos'
    }),
    submitForm() {
      this.submitPhotos(this.photo)
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
    margin-top: 10px;
  }
  &__save {
    background-color: #000000;
    color: #ffffff;
    font-weight: bold;
    border: 1px solid #808080;
    border-radius: 5px;
    height: 40px;
    width: 100%;
  }
  &__back {
    background-color: #d3d3d3;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    font-weight: bold;
    height: 40px;
    width: 100%;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #000000;
    margin-top: 10px;
  }
}

@media (min-width: 768px) {
  .form {
    &__box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100vh;
      width: 450px;
      margin-left: auto;
      margin-right: auto;
    }
    &__button {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
    }
    &__save {
      margin-left: 20px;
    }
    &__back {
      margin: 0;
    }
  }
}

@media (min-width: 1280px) {
  .form {
    &__box {
      width: 700px;
    }
  }
}
</style>
