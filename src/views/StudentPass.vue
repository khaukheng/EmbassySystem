<template>
    <div>
        <app-bar :barColor="barColor" :darkTheme="darkTheme" :sliderColor="sliderColor" :tabs="tabs" @docTabChange="onTabChange"/>
        <v-container v-if="doc=='uploadDoc'" >
            <v-layout row justify-center>
                <v-flex xs12>
                    <v-text-field label="NAME" v-model="document.name" solo/>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>
                <v-flex xs12>
                    <v-text-field label="PASSPORT NUMBER" type ="number" v-model="document.ic" solo/>
                </v-flex>
            </v-layout>
            <v-layout row justify-center v-for="(doc,i) in uploadDoc" :key=i>
                    <v-flex xs11 class="py-4">
                    {{doc}}
                    </v-flex>
                    <v-flex xs1>
                        <!-- <v-text-field label="Select Image" @click='pickFile(i)' v-model='imagesName[i]' prepend-icon='attach_file'></v-text-field>
                        <input class="form-control" :ref="'image'+i" style="display: none" type="file" @change="handleFileUpload(i,$event)"/> -->
                        <v-checkbox
                        v-model='document.docs[i]'
                        ></v-checkbox>
                    </v-flex>
            </v-layout>
            <v-layout row justify-center>
                <v-flex offset-xs10 xs2>
                    <v-btn block color="#00695C" class="white--text" @click="submit">SUBMIT</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container v-if="doc=='docVerify'" >
            <p>document verification here</p>
        </v-container>
        <v-container v-if="doc=='printPass'" >
            <p>print Pass here</p>
        </v-container>
    </div>
</template>
<script>
import Bar from '../components/Bar.vue';
export default {
    components:{
        appBar:Bar
    },
    data:function(){
        return {
            barColor:"#1A237E",
            sliderColor:"#FFD600",
            darkTheme:true,
            tabs:[
                {
                    name:"UPLOAD DOCUMENT",
                    value:"uploadDoc"
                }
                ],
            doc:'',
            document:
            {
                name:"",
                ic:"",
                docs:[],
                type:"studentPass",
            },
            uploadDoc:[
                "STUDENT PASS",
                "OFFER LETTER FROM EDUCATION INSTITUTIONS",
                "FORM IMM.14",
                "PASSPORT PHOTOCOPIES",
                "PASSPORT PHOTOS",
                "PERSONAL BOND FORM"
            ],
            imagesName:[
            ]
        }
    },
    methods:{
        onTabChange($event){
            this.doc=this.tabs[$event].value;
        },
        pickFile(i){
                // this.$refs['image'+i].click();
                this.$refs['image'+i][0].click();
            },
            handleFileUpload(i,$event){
                // Reference to the DOM input element
                var input = $event.target;
                // Ensure that you have a file before attempting to read it
                if (input.files && input.files[0]) {
                    this.imagesName[i] = input.files[0].name;
                    // create a new FileReader to read this image and convert to base64 format
                    var reader = new FileReader();
                    // Define a callback function to run, when FileReader finishes its job
                    reader.onload = (e) => {
                        // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                        // Read image as base64 and set to imageData
                        // this.imageData = e.target.result;
                        this.document.docs[i] = e.target.result;
                        console.log(this.document.docs[i]);
                    }
                    // Start the reader job - read file as a data url (base64 format)
                    reader.readAsDataURL(input.files[0]);
                    this.$forceUpdate();
                }
                console.log($event);
            },
            submit(){
                this.document['date']=new Date();
                this.$emit("submitApplication",{...this.document});
                console.log(this.document);
            }
    },
    created(){
        this.uploadDoc.forEach(()=>this.document.docs.push(false));
        this.doc=this.tabs[0].value;
    }
}
</script>
