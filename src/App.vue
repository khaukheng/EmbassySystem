<template>
  <div id="app">
    <!-- <div id="nav">
      <v-btn to="/visa">VISA</v-btn>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/about">About</v-btn>
      <v-btn to="/about">About</v-btn>
      
    </div> -->
    <v-layout >
      <v-flex xs-6 class="border-right">
        <small-header/>
        <router-view @submitApplication="parentReceiveApplication"/>
      </v-flex>
      <v-flex xs-6>
        <verify-class ref="childComponent"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SmallHeader from './components/SmallHeader.vue'
import VerifyClass from './views/Verify.vue'
export default {
  name: 'app',
  data(){
    return{
      applicationReceive:null
    }
  },
  components: {
    SmallHeader,
    VerifyClass
  },
  methods:{
    parentReceiveApplication($event){
      console.log($event);
      this.$refs.childComponent.applicationReceive($event);
      this.applicationReceive = $event;
    }
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

.border-right{
  border-right:1px solid black
}
</style>