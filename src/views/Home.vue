<template>
  <div class="home">
    <Header />
    <Inicial />
    <About />
    <Footer />
  </div>
</template>

<script>

import Header from '../components/Header/index.vue'
import Inicial from '../components/Inicial/index.vue'
import About from '../components/About/index.vue'
import Footer from '../components/Footer/index.vue'


export default {
  name: 'home',
  components: {
    Header,
    Inicial,
    About,
    Footer
  }
}
</script>
