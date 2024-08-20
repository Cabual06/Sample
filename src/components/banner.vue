<template>

    <v-container class="h-75 mt-4">

        <v-card class="bg-transparent w-100 d-flex flex-row justify-space-between px-6">

            <img :src="image" alt="Tourist" style="width: 580px; margin-left:90px">

            <v-card-item class="w-50" style="height:770px; margin-right:70px">
                
                <v-card-subtitle>
                    <span class="text-left px-16 text-green">SAVE JOURNEY</span>
                </v-card-subtitle>
                <v-card-title class="text-left px-16">
                    <span class="text-h2">Make your <span class="text-green font-weight-bold">Holiday</span></span><br> 
                    <span class="text-h2">Memorable</span>
                </v-card-title>

                <br>
                
                <v-card-text class="px-16">
                    <p class="text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut dolor quae aut praesentium repellendus officia consequatur repudiandae molestias odio perferendis, laudantium hic voluptate. Maxime nisi, illo impedit ea exercitationem repudiandae.</p>
                </v-card-text>

                <v-card-text class="px-16">
                    <p class="text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut dolor quae aut praesentium repellendus officia consequatur repudiandae molestias odio perferendis, laudantium hic voluptate. Maxime nisi, illo impedit ea exercitationem repudiandae.</p><br><br>

                    <v-btn variant="outlined" class="text-left text-green">Learn More</v-btn><br><br><br>

                    <v-icon size="40" class="mdi mdi-facebook mr-4"></v-icon>
                    <v-icon size="40" class="mdi mdi-twitter mr-4"></v-icon>
                    <v-icon size="40" class="mdi mdi-instagram mr-4"></v-icon>

                    <br><br><br>

                    <h1 class="opacity-40 text-h3">Booking.com</h1>
                </v-card-text><br>
            </v-card-item>

        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: 'banner',
        data(){
            return{
                image: '../src/assets/tour.png',
            }
        }
    }
</script>

<style scoped>

</style>