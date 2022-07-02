<template>
  <div class="header">
    <transition name="animation-overlay">
      <div class="header__backdrop" v-if="menuOpen" @click="menuOpen = !menuOpen" />
    </transition>
    <div class="header__top">
      <div class="header__container">
        <Nuxt-link to="/" class="header__logo">
          <img
            src="@/assets/img/logo.png"
            alt="Logo de cadastro"
            width="70"
            height="70"
            data-not-lazy
          />
        </Nuxt-link>
        <transition name="animation-menu">
          <div class="header__links-list" v-if="menuOpen || !mobile">
            <ul>
              <div class="header__line">
                <li>
                  <Nuxt-link to="/">
                    <a @click="menuOpen = false">Inicio</a>
                  </Nuxt-link>
                </li>
                <li>
                  <Nuxt-link to="/registration">
                    <a @click="menuOpen = false">Cadastro de fotos</a>
                  </Nuxt-link>
                </li>
              </div>
            </ul>
          </div>
        </transition>
        <div
          class="header__hamburguer"
          @click="menuOpen = !menuOpen"
          :class="{ 'header__toggle-close': menuOpen }"
        >
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuOpen: false,
      mobile: true,
    };
  },
  mounted() {
    this.mobile = window.innerWidth < 1024;
  },
};
</script>

<style lang="scss" scoped>
.header {
  &__backdrop {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
  }
  &__top {
    background: rgb(203, 204, 210);
    background: radial-gradient(
      circle,
      rgba(203, 204, 210, 1) 0%,
      rgba(18, 17, 17, 1) 80%
    );
    padding: 8px 0;
    z-index: 201;
    position: relative;
  }
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
  }
  &__logo {
    display: inherit;
    img {
      border-radius: 35px;
    }
  }
  &__links-list {
    position: absolute;
    background: rgb(203, 204, 210);
    background: radial-gradient(
      circle,
      rgba(203, 204, 210, 1) 0%,
      rgba(18, 17, 17, 1) 80%
    );
    width: 100%;
    left: 0;
    top: 81px;
    ul {
      padding: 0 15px 10px 15px;
    }
  }
  &__line {
    border-top: 1.5px solid rgb(211, 211, 211);
    padding: 10px 0;
    li {
      list-style: none;
      margin: 18px 0;
      a {
        color: #ffa500;
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  &__hamburguer {
    display: flex;
    flex-direction: column;
    span {
      width: 25px;
      height: 2px;
      margin: 2px 0;
      border-radius: 3px;
      transition: all 0.33s ease-in-out;
      background: #ffffff;
    }
  }
  &__toggle-close {
    span {
      margin: 0;
      transition: all 0.33s ease-in-out;
      &:nth-child(1) {
        transform: rotate(-45deg) translate(0.25px, 1.5px);
      }
      &:nth-child(2) {
        transform: rotate(45deg) translate(0.25px, -2px);
      }
    }
  }
}
@media (min-width: 1024px) {
  .header {
    &__links-list {
      max-width: none;
      background: none;
      position: static;
      height: auto;
      width: auto;
      ul {
        display: flex;
        padding: 0;
      }
    }
    &__line {
      border-top: none;
      padding: 0;
      display: flex;
      li {
        margin: 15px 20px;
        a {
          font-size: 18px;
        }
      }
    }
    &__close-menu {
      display: none;
    }
    &__hamburguer {
      display: none;
    }
  }
}

@media (min-width: 1280px) {
  .header {
    &__line {
      li {
        margin: 15px 25px;
      }
    }
  }
}
</style>
