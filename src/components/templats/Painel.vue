<template>
  <div>
    <div class="painel">
      <div class="painel-option">
        <div class="option">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <div class="painel-text">Rio de janeiro - Rj</div>
        </div>

        <div class="option">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <div class="painel-text">sd.rolandi@gmail.com</div>
        </div>

        <div class="option">
          <i class="fa fa-mobile" aria-hidden="true"></i>
          <div class="painel-text">(21) 97362-9318</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "painel"
};
</script>

<style lang="scss">
@import '../../assets/scss/main';
.painel {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 190px;
  .painel-option {
    margin: 0 20px;
    .option {
      cursor: pointer;
      position: relative;
      width: 250px;
      overflow: hidden;
      z-index: 999;
      &:hover .painel-text {
        left: 60px;
      }

      i {
        display: block;
        width: 60px;
        text-align: center;
        line-height: 60px;
        background-color: $color-branca;
        color: $color-base;
        font-size: 20px;
        transition: 0.6s;
        &:hover {
          color: $color-primaria;
        }
      }

      .painel-text {
        position: absolute;
        height: 60px;
        width: fit-content;
        padding: 0 10px;
        background-color: $color-base;
        color: $color-branca;
        line-height: 60px;
        text-align: center;
        transition: 0.6s;
        top: 0px;
        z-index: -1;
        left: -140px;
      }
    }
  }
}

  @media only screen and (max-width: 320px) {
    .menu {
      .painel {
        display: none;
      }      
    }
  }

   @media only screen and (max-width: 480px) {
    .menu {
      .painel {
        display: none;
      }      
    }
  }

   @media only screen and (max-width: 780px) {
    .menu {
      .painel {
        display: none;
      }      
    }
  }




</style>

