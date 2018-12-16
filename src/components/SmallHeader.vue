<template>
    <div id="nav">
        <v-layout row wrap>
            <v-flex xs2 class="px-2">
                <v-btn color="#D50000" class="white--text" block to="/visa">VISA</v-btn>
            </v-flex>
            <v-flex xs2 class="px-2">
                <v-btn color="#FFFFFF" block to="/passport">PASSPORT</v-btn>
            </v-flex>
            <v-flex xs2 class="px-2">
                <v-btn color="#1A237E" class="white--text" block to="/studentPass">STUDENT PASS</v-btn>
            </v-flex>
            <v-flex xs2 class="px-2">
                <v-btn color="#FFD600" block to="/workingPermit">WORKING PERMIT</v-btn>
            </v-flex>
        </v-layout>
      
    </div>
</template>

<script>
    export default{

    }
</script>