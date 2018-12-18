<template>
    <div>
        <v-layout row wrap>
            <v-flex xs12>
                <v-tabs 
                    color="cyan" 
                    dark 
                    slider-color="cyan">
                    <v-tab>Approval</v-tab>
                    <v-tab>Approved: ({{approvedCount}})</v-tab>
                    <v-tab>Rejected: ({{rejectedCount}})</v-tab>
                    <v-tab-item>
                        <v-layout row wrap>
                            <v-flex xs12> 
                                <br>
                                <h1>Next Document to Approve</h1>
                            </v-flex>
                            <v-flex xs12 v-if="receivedApplication.length">
                                <template v-for="application in receivedApplication" >
                                    <v-card :key="application.name" class="applicant-card">
                                        <v-card-title primary-title>
                                            <div>
                                                <span>
                                                    <v-chip 
                                                        :color="getChipColor(application.type)" 
                                                        :text-color="getChipTextColor(application.type)">
                                                        {{getChipText(application.type)}}
                                                    </v-chip>
                                                    <h3 class="headline mb-0">{{application.name}}</h3>
                                                </span>
                                                <br>
                                                <div>                                    
                                                    <p>IC: {{application.ic}}</p>
                                                    <p>Number of document uploaded: {{getDocumentCount(application.docs)}}</p>
                                                </div>
                                            </div>
                                        </v-card-title>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="green" class="white--text" 
                                                @click="approve(application.ic)">
                                                <v-icon>check</v-icon>
                                                Approve 
                                            </v-btn>
                                            <v-btn color="red" class="white--text"
                                                @click="reject(application.ic)">
                                                <v-icon>close</v-icon>
                                                Reject
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                            </v-flex>
                        </v-layout>
                    </v-tab-item>
                    <v-tab-item>
                        <v-layout row wrap>
                            <v-flex xs12> 
                                <br>
                                <h1>Approved Applicants</h1>
                            </v-flex>
                            <v-flex xs12 v-if="approvedApplication.length">
                                <template v-for="application in approvedApplication" >
                                    <v-card :key="application.name" class="applicant-card">
                                        <v-card-title primary-title>
                                            <div>
                                                <span>
                                                    <v-chip 
                                                        :color="getChipColor(application.type)" 
                                                        :text-color="getChipTextColor(application.type)">
                                                        {{getChipText(application.type)}}
                                                    </v-chip>
                                                    <h3 class="headline mb-0">{{application.name}}</h3>
                                                </span>
                                                <br>
                                                <div>                                    
                                                    <p>IC: {{application.ic}}</p>
                                                    <p>Number of document uploaded: {{getDocumentCount(application.docs)}}</p>
                                                </div>
                                            </div>
                                        </v-card-title>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="cyan" class="white--text">
                                                <v-icon>print</v-icon>
                                                Print 
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                            </v-flex>
                        </v-layout>
                    </v-tab-item>
                    <v-tab-item>
                        <v-layout row wrap>
                            <v-flex xs12> 
                                <br>
                                <h1>Rejected Applicants</h1>
                            </v-flex>
                            <v-flex xs12 v-if="rejectedApplication.length">
                                <template v-for="application in rejectedApplication" >
                                    <v-card :key="application.name" class="applicant-card">
                                        <v-card-title primary-title>
                                            <div>
                                                <span>
                                                    <v-chip 
                                                        :color="getChipColor(application.type)" 
                                                        :text-color="getChipTextColor(application.type)">
                                                        {{getChipText(application.type)}}
                                                    </v-chip>
                                                    <h3 class="headline mb-0">{{application.name}}</h3>
                                                </span>
                                                <br>
                                                <div>                                    
                                                    <p>IC: {{application.ic}}</p>
                                                    <p>Number of document uploaded: {{getDocumentCount(application.docs)}}</p>
                                                </div>
                                            </div>
                                        </v-card-title>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="purple" class="white--text">
                                                <v-icon>phone</v-icon>
                                                Contact 
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                            </v-flex>
                        </v-layout>
                    </v-tab-item>
                </v-tabs>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    // props:["applicationReceive"],
    data(){
        return {
            receivedApplication:[
                {
                    "name": "Cheong Chah Wei",
                    "ic": "960910045047",
                    "type": "visa",
                    "docs": [
                        true,
                        true,
                        true,
                        true,
                        true,
                        true,
                        true
                    ],
                    "date": "2018-12-18T12:59:25.052Z"
                },
                {
                    "name": "Teoh Khau Kheng",
                    "ic": "96099423024523",
                    "type": "passport",
                    "docs": [
                        true,
                        true,
                        true,
                        true,
                        true,
                        true,
                        true
                    ],
                    "date": "2018-12-18T13:01:21.055Z"
                },
                {
                    "name": "Teow Qin Kae",
                    "ic": "960994223427765",
                    "type": "studentPass",
                    "docs": [
                        true,
                        true,
                        true,
                        true,
                        true,
                        true,
                        true
                    ],
                    "date": "2018-12-18T13:03:08.370Z"
                },
                {
                    "name": "Tan Han Yang",
                    "ic": "92323404344",
                    "type": "workingPermit",
                    "docs": [
                        true,
                        true,
                        true,
                        true,
                        true,
                        true,
                        true
                    ],
                    "date": "2018-12-18T13:04:36.621Z"
                },
                {
                    "name": "Ooi Kee Aun",
                    "ic": "9223123432",
                    "type": "visa",
                    "docs": [
                        true,
                        true,
                        false,
                        false,
                        true,
                        true,
                        true
                    ],
                    "date": "2018-12-18T13:05:32.565Z"
                }
            ],
            approvedApplication: [],
            rejectedApplication: []
        }
    },
    computed: {
        approvedCount() {
            return this.approvedApplication.length;
        },
        rejectedCount() {
            return this.rejectedApplication.length;
        }
    },
    methods:{
        applicationReceive(application){
            this.receivedApplication.push(application);
        },
        getDocumentCount(docs) {
            const uploadedDocuments = docs.filter(d => d === true);
            const uploadedCount = uploadedDocuments.length;
            const totalDocumentsToSubmit = docs.length;
            return uploadedCount + '/' + totalDocumentsToSubmit;
        },
        getChipColor(type) {
            if (type === 'visa')
                return "#D50000";
            else if (type === 'passport')
                return "#e8e8e8";
            else if (type === 'studentPass')
                return "#1A237E";
            else if (type === 'workingPermit'){
                return "#FFD600";
            }
            return '';
        },
        getChipTextColor(type) {
            return type === 'visa' || type === 'studentPass'? 'white' : 'black';
        },
        getChipText(type) {
            if (type === 'visa')
                return "VISA";
            else if (type === 'passport')
                return "PASSPORT";
            else if (type === 'studentPass')
                return "STUDENT PASS";
            else if (type === 'workingPermit'){
                return "WORKING PERMIT";
            }
            return '';
        },
        approve(ic) {
            const approvedApplicant = this.receivedApplication.filter (a => a.ic === ic)[0];
            this.approvedApplication.push(approvedApplicant);
            this.receivedApplication = this.receivedApplication.filter(a => a.ic !== ic);
        },
        reject(ic) {
            const rejectedApplicant = this.receivedApplication.filter (a => a.ic === ic)[0];
            this.rejectedApplication.push(rejectedApplicant);
            this.receivedApplication = this.receivedApplication.filter(a => a.ic !== ic);
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
.applicant-card {
    margin-top: 16px;
}
</style>
