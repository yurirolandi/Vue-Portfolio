<template>
  <div class="menu-mobile">
    <transition name="fade" mode="out-in">
      <i class="fa fa-bars" id="icone-hamburguer" aria-hidden="true" v-if="!show" @click="show = !show" 
        key="menu"></i>
      <i class="fa fa-times" id="icone-hamburguer"
      aria-hidden="true"
        v-else  @click="show = !show" key="clear"
      ></i>      
    </transition>
    <transition name="fade" mode="out-in">
      <ul v-if="show" class="burguer-conteudo">
          <router-link tag="li" to="/" class="burguer-item"><a><i class="fa fa-home"></i>Home</a></router-link>
          <router-link tag="li" to="/profissional" class="burguer-item"><a><i class="fa fa-address-card"></i>Profissional</a></router-link>
          <router-link tag="li" to="/" class="burguer-item"><a><i class="fa fa-grav"></i>Portfólio</a></router-link>
          <router-link tag="li" to="/contato" class="burguer-item"><a><i class="fa fa-envelope"></i>Contato</a></router-link>
      </ul>
    </transition>
  </div>



      
     

</template>



<script>
export default {
  name: 'NavHamburguer',
  data() {
    return {      
      show: false
    }
  },
 
};
</script>

<style lang="scss">
@import "../../assets/scss/main";
.menu-mobile{
  #icone-hamburguer{
      color: #fff;
      height: 30px;
      font-size: 2em;
      cursor: pointer;
      margin: 10px;
    }
    .burguer-conteudo{
      margin: 0 10px;
      list-style: none;
      .burguer-item{
        margin: 10px 0;
        &:last-of-type{
          margin: 0; 
        }
        a{
        text-decoration: none;
          i{
            margin: 0 10px;
          }
          cursor: pointer;
          color: $color-branca;
          padding: 10px 0;
          &:hover{
            color: $color-azul-claro;
          }
        }
      }
    }

    .fade-enter-active,
    .fade-leave-to {
      transition: opacity .2s ease;
    }

    .fade-enter,
    .fade-leave-to{
      opacity: 0;
    }
}

@media screen and (min-width: 780px) {
  .menu-mobile {
    display: none;
    
  }
}
</style>