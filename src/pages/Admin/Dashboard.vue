<template>
    <Nav />
    <v-container>
        
        <v-container class="d-flex flex-column pb-4 pt-16 mt-6">

            <h1 class="text-medium-emphasis mb-6"><span class="text-green">D</span>ashboard</h1>

            <dashinfo />
            <sparklines />
        </v-container>
    </v-container>
</template>

<script>
import dashinfo from '@/components/dashInfo.vue'
import sparklines from '@/components/sparklines.vue'

    export default {
        name: 'dahboard',
        components: {
            dashinfo,
            sparklines,
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>