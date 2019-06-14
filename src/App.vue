<template>
  <div id="app">
    <MyHeader />
    <router-view/>
    <MyFooter />
  </div>
</template>

<script>
import Header from './components/Header/index'
import Footer from './components/Footer/index'
export default {
  components: {
    MyHeader : Header,
    MyFooter : Footer
  }
}
</script>

<style lang="scss">
@import 'assets/scss/main';
</style>
