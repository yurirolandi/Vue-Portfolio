<template>
  <div class="home">
    <Inicial />
    <About />
    <Professional />
  </div>
</template>

<script>


import Inicial from '../components/Inicial/index.vue';
import About from '../components/About/index.vue';
import Professional from '../components/Professional/index.vue';


export default {
  name: 'home',
  components: {
    Inicial,
    About,
    Professional
  }
}
</script>
