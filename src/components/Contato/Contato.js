export default {
  name: 'contato',
  components: {},
  props: [],
  data () {
    return {
      mensagens: [],
      usuario: {
        nome: null,
        email: null,
        texto: null
      }
    }
  },
  computed: {
    isValid: function () {
      return this.name != '' && this.email != ''
    }
  },
  methods: {
    enviar(){
      this.$http.post('usuario.json', this.usuario)
      .then(resp => {
        this.usuario.nome =''
        this.usuario.email = ''
        this.usuario.texto = ''
        this.mensagens.push({
          texto: 'Operação realizada com sucesso!',
          tipo: 'success'
        })
      })
    }
  }
}
