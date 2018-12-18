<template>
  <div id="app">
    <!-- <div id="nav">
      <v-btn to="/visa">VISA</v-btn>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/about">About</v-btn>
      <v-btn to="/about">About</v-btn>
      
    </div> -->
    <v-layout >
      <v-flex xs-6 style="border-right:1px solid black">
        <small-header/>
        <router-view/>
      </v-flex>
      <v-flex xs-6>

      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SmallHeader from './components/SmallHeader.vue'
export default {
  name: 'app',
  components: {
    'smallHeader':SmallHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>