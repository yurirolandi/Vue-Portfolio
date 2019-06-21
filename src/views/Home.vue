<template>
  <div class="home">
    <Inicial />
    <About />
  </div>
</template>

<script>


import Inicial from '../components/Inicial/index.vue';
import About from '../components/About/index.vue';


export default {
  name: 'home',
  components: {
    Inicial,
    About
  }
}
</script>
