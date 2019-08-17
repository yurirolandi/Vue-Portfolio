<template>
  <div class="formulario">   
    <h2>Contato</h2> 


    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-2" label="Seu Nome:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.name" required placeholder="Digite seu Nome"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Seu E-mail:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Digite seu E-mail"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label-for="input-3">
        <b-form-textarea
          id="textarea"
          v-model="form.text"
          placeholder="Digite algo..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" @click="enviar" class="btnSub">Enviar</b-button>
      <b-button type="reset" class="btnReset">Limpar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Contato",
  data() {
    return {
      form: {
        email: "",
        name: "",
        text: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
    },

    enviar() {
      this.$http.post("form.json", this.form).then(resp => {
        this.form.name = "";
        this.form.email = "";
        this.form.text = "";
      });
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.email = "";
      this.form.name = "";
      this.form.text = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/main";
.formulario {
  font-family: Montserrat;
  h2 {
    text-align: center;
    font-family: Montserrat;
  }
  .btnSub,
  .btnReset {
    margin: 10px;
  }
  .btnSub {
    background-color: $color-primaria;
    &:hover {
      background-color: $color-verde;
    }
  }
  .btnReset {
    background-color: $color-laranja;
    &:hover {
      background-color: $color-vermeho;
    }
  }
}
</style>