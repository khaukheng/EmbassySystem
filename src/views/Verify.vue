<template>
    <v-container>
        <p>Received Application</p>
        <p>{{ receivedApplication }}</p>
        <v-layout>
          <p>Processing: </p>
          <p>{{ processingApplication }}</p>
        </v-layout>
        <v-layout>
          <p>In Schedule:</p>
          <v-table></v-table>
        </v-layout>
        <v-layout></v-layout>
    </v-container>
</template>

<script>
export default {
    // props:["applicationReceive"],
    data(){
        return {
            receivedApplication:[]
        }
    },
    methods:{
        applicationReceive(application){
            this.receivedApplication.push(application);
        }
        sort: function(array){
          return array.sort(function(a,b)){
            return a.priority - b.priority;
          }
        }
    },
    schedule:{
      scheduleApplication: function(){
        function compareNumbers(a,b){
          return a-b;
        }
      }
    }
    // watch: {
    //   	applicationReceive(newVal, oldVal) { // watch it
    //       console.log('Prop changed: ', newVal, ' | was: ', oldVal);
    //       if(newVal!=null){
    //           this.receivedApplication.push(newVal);
    //           this.applicationReceive = null;
    //       }
    //     }
    //   },
    // created(){
    //     let unwatch = this.$watch('applicationReceive',function(newVal,oldVal){
    //         console.log('Prop changed: ', newVal, ' | was: ', oldVal);
    //         if(newVal!=null){
    //             this.receivedApplication.push(newVal);
    //         }
    //         unwatch();
    //     });
    // }
}
</script>

<style>

</style>
