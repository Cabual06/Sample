<template>
    <Nav /> 
    <v-container>
        <v-container class="d-flex pb-6 pt-16 mt-6">
            <h1 class="text-medium-emphasis"><span class="text-green">S</span>ettings</h1>
        </v-container>
    </v-container>
</template>

<script>
import nav from '@/components/nav.vue'

    export default {
        name: 'setting',
        components:{
            nav,
        },
        data(){
            return{
            }
        }
    }
</script>

<style scoped>

</style>