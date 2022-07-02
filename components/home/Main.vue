<template>
  <div class="main">
    <div class="container">
      <div class="main__box-one">
        <div class="main__title">{{ title }}</div>
        <p v-show="mensage" class="main__mensage">{{ mensage }}}</p>
        <div class="main__filter">
          <div class="main__filter-icon" />
          <input type="search" class="main__filter-text" placeholder="Pesquisar" />
        </div>
      </div>

      <div class="main__box-two">
        <ul
          class="main__list-photos"
          v-for="photo in $store.state.photos.photos"
          :key="photo.id"
        >
          <li class="main__list-photos-item">
            <div class="main__panel">
              <div class="main__panel-title">{{ photo.title }}</div>
              <img class="main__panel-img" :src="photo.url" />
              <div class="main__panel-button">
                <div class="main__panel-icon" />
                <div class="main__panel-remove">Remover</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Main",
  data() {
    return {
      title: "LISTAGEM DE FOTOS",
      url: "",
      photo: [],
      filter: "",
      mensage: "",
    };
  },
  computed: {
    ...mapState({
      photos: (state) => state.photos.getPhotos,
    }),
    photosFilter() {
      if (this.filter) {
        const exp = new RegExp(this.filter.trim(), "i");
        return this.photos.filter((photo) => exp.test(photo.title));
      } else {
        return this.photos;
      }
    },
  },
  created() {
    this.$store.dispatch("photos/getPhotos").then((response) => {
      console.table(response);
    });
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  height: 100%;
  width: 100%;
  &__title {
    font-size: 34px;
    font-weight: bold;
    text-align: center;
    height: 100%;
    margin-top: 20px;
  }
  &__centralized {
  }
  &__filter {
    height: 61px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    border: 1px solid #808080;
    border-radius: 6px;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    &::hover {
      transition: all 0.1s ease-in-out;
      transform: scale(1.01);
    }
  }
  &__filter-icon {
    background: url("@/assets/icons/icon-search.svg") no-repeat;
    background-size: cover;
    width: 14px;
    height: 13px;
    margin-left: 15px;
  }
  &__filter-text {
    font-size: 14px;
    font-weight: 500;
    margin-left: 5px;
  }
  &__list-photos {
    width: 100%;
    padding: 0;
    font-size: 20px;
    font-weight: bold;
  }
  &__list-photos-item {
    list-style: none;
  }
  &__panel {
    margin: 40px 0;
    border: 1px solid #808080;
    border-radius: 10px;
  }
  &__panel-title {
    border-bottom: 1px solid #808080;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-start-end-radius: 10px;
    border-start-start-radius: 10px;
    background: #000000;
    color: #ffa500;
  }
  &__panel-img {
    min-width: 291px;
    width: 100%;
    height: 194px;
  }
  &__panel-icon {
    background: url("@/assets/icons/icon-delete.svg");
    background-size: cover;
    width: 14px;
    height: 15px;
    margin-right: 8px;
  }
  &__panel-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 45px;
    color: #ff0000;
  }
}

@media (min-width: 768px) {
  .main {
    &__box-two {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    &__list-photos {
      display: flex;
      flex-wrap: wrap;
      width: auto;
    }
    &__panel-img {
      width: 292px;
    }
  }
}
</style>
