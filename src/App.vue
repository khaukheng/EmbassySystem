<template>
  <div id="app">
    <!-- <div id="nav">
      <v-btn to="/visa">VISA</v-btn>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/about">About</v-btn>
      <v-btn to="/about">About</v-btn>
      
    </div> -->
    <v-container fluid>
      <v-layout row>
        <v-flex xs-6 class="border-right">
          <v-container fluid>
            <small-header/>
            <router-view @submitApplication="parentReceiveApplication"/>
          </v-container>
        </v-flex>
        <v-flex xs-6 class="right-col">
          <v-container fluid>
            <verify-class ref="childComponent"/>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
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
  height: 100%;
  width: 100%;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.border-right{
  border-right:1px solid black;
  background-color: #e8e8e8;
}
.right-col {
  background-color: #d3d3d3;
}
</style>