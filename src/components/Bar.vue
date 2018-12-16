<template>
    <div>
        <v-tabs
        :dark="darkTheme"
        :color="barColor"
        class="white--text"
        :slider-color="sliderColor"
        v-model="selectedDoc" @change="tabChange"
        >
            <v-tab ripple v-for="tab in tabs" :value="tab.value" :key="tab.value" class="font-weight-bold">{{ tab.name }}</v-tab>
        </v-tabs>
    </div>
</template>
<script>
export default {
    data(){
        return {
            selectedDoc:""
        }
    },
    methods:{
        tabChange(){
            this.$emit("docTabChange",this.selectedDoc);
        }
    },
    props:['barColor',"tabs",'sliderColor','darkTheme']
}
</script>

<style scoped>
</style>

