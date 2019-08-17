<template>
  <div class="home">
    <Inicial />
    <About />
    <Contato />
  </div>
</template>

<script>


import Inicial from '../components/Inicial/index.vue';
import About from '../components/About/index.vue';
import Contato from '../views/Contato/index.vue';


export default {
  name: 'home',
  components: {
    Inicial,
    About,
    Contato
  }
}
</script>
