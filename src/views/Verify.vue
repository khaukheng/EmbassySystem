<template>
    <v-container>
        <p>Received Application</p>
        <p>{{ receivedApplication }}</p>
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
    },
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
