<template>
  <div class="home">
    <Header />
    <Inicial />
    <About />
  </div>
</template>

<script>

import Header from '../components/Header/index.vue'
import Inicial from '../components/Inicial/index.vue'
import About from '../components/About/index.vue'

export default {
  name: 'home',
  components: {
    Header,
    Inicial,
    About
  }
}
</script>
