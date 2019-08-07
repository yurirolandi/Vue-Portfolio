<template>
  <div id="app">
    <MyHeader />
    <transition name="slide">
      <router-view/>
    </transition>
    <MyFooter />
  </div>
</template>

<script>
import Top from './components/Top/index'
import MyFooter from './components/MyFooter/index'
export default {
  components: {
    MyHeader : Top,
    MyFooter : MyFooter
  }
}
</script>

<style lang="scss">
@import 'assets/scss/main';
</style>
