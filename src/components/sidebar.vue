<template>
    <v-navigation-drawer z-index:1 class="mt-16"> 
        <v-list-item title="Learn About Us"></v-list-item>

        <v-divider></v-divider>

        <v-list v-for="option in options" :key="option.id">

            <v-list-item>
                {{ option.text }}
            </v-list-item>

        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: 'sidebar',
        data(){
            return{
                options:[
                    {text: 'About', icon: '', link:'/'},
                    {text: 'Message Us', icon: '', link:'/'},
                    {text: 'Tech we Use', icon: '', link:'/'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>