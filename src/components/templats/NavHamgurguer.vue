<template>
  <nav class="menu-mobile">
    <Slide>
      <ul class="mobile-box">
        <router-link tag="li" to="/" class="header-item">
          <a>Home</a>
        </router-link>
        <router-link tag="li" to="/profissional" class="header-item">
          <a>Profissional</a>
        </router-link>
        <router-link tag="li" to="/" class="header-item">
          <a>Portfólio</a>
        </router-link>
        <router-link tag="li" to="/contato" class="header-item">
          <a>Contato</a>
        </router-link>
      </ul>
    </Slide>
  </nav>
</template>

<script>
import { Slide } from "vue-burger-menu";
export default {
  components: {
    Slide
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/main";


  .mobile-box {   
    list-style: none;
    display: flex;
    flex-direction: column;
    .header-item {
      margin: 15px 0;
      cursor: pointer;
      a {
        color: $color-branca;
        i {
          margin: 0 5px;
        }
      }
    }
  }
  .bm-menu {
   
    background-color: $color-base;
    height: 100%;
    left: 0;
    overflow-x: hidden;
    padding-top: 60px;
    position: fixed;
    top: 0;
    transition: 0.3s ease-out;
    width: 0;
    z-index: 1000;
  }

  .bm-burger-button {
   
    cursor: pointer;
    left: 36px;
    position: absolute;
    top: 20px;
    width: 36px;
    height: 30px;
  }

  .bm-burger-bars {   
    background-color: $color-branca;
  }

    @media screen and (min-width: 780px) {
     .bm-burger-button {
        display: none;
    }
  }

</style>