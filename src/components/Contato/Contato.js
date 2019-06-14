export default {
  name: 'contato',
  components: {},
  props: [],
  data () {
    return {
      mensagens: [],
      usuario: {
        nome: '',
        email: '',
        texto: ''
      }
    }
  },
  computed: {
   
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
