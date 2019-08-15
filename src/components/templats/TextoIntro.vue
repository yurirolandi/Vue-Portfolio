<template>
  <div class="introducao-texto">
    <div class="introducao-texto__nome">Desenvolvedor Front-End</div>
    <div class="introducao-texto__apresentacao">
      Minha paixão é está desenvolvendo, me dedicando para ser melhor a cada dia.
      <br />Faça da sua vida mais "Responsivo".
    </div>

    <a href="#about" v-smooth-scroll>
      <i class="fa fa-arrow-down"></i>Saiba mais
    </a>
  </div>
</template>

<script>
export default {
    name: 'TextoIntroducao'
};
</script>

<style lang="scss">
@import '../../assets/scss/main';
.introducao-texto {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  width: 500px;
  height: 250px;
  padding: 15px;
  background-color: rgba($color: #000000, $alpha: 0.7);

  border-radius: 10px;
  box-shadow: 3px 3px 19px -1px rgba(0, 0, 0, 0.75);
  

  a {
    display: block;
    width: 125px;
    align-self: center;
    text-decoration: none;
    border: 2px solid $color-laranja;
    background-color: $color-laranja;
    color: $color-branca;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;
    font-family: Montserrat, sans-serif;
    &:hover {
      text-decoration: none;
      color: $color-branca;
      background-color: $color-azul;
      cursor: pointer;
      background-color: $color-laranja;
    }
    i {
      margin: 0 5px 0 0;
    }
  }

  .introducao-texto__nome {
    font-size: 2.3em;
    color: $color-laranja;
    font-weight: 500;
    word-break: break-word;
    font-family: RobotoRegular, sans-serif;
  }

  .introducao-texto__apresentacao {
    font-size: 1.6em;
    word-break: break-word;
    color: $color-branca;
    font-weight: 200;
  }
}

@media only screen and (max-width: 320px) {
    .inicial{
        justify-content: center;
      .menu {      
      .introducao-texto {
        padding: 15px;
        height: auto;
        width: 300px !important;
      }
    }
    }
  }

  @media only screen and (max-width: 480px) {
    .inicial{
      justify-content: center;
      .menu {      
      .introducao-texto {
        padding: 15px;
        height: auto;
        width: 350px;
      }
    }
      
    }
  }

  @media only screen and (max-width: 780px) {
    .inicial{
      justify-content: center;
      .menu {      
      .introducao-texto {
        padding: 15px;
        height: auto;
        width: 400px;
      }
    }
    }
  }
  


</style>