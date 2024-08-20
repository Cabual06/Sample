<template>
    <v-container class="px-16 mt-16">

        <div class="px-16 d-flex border-t-sm">

            <div style="gap:150px" class="mt-16 d-flex mx-auto">

            <v-card
                class="pa-4 bg-transparent"
                :disabled="loading"
                :loading="loading"
                max-width="550"
            >

                <v-card-item>
                    <v-card-title class="text-h3 font-weight-bold text-green">Get Experiece <br> Which are Fun</v-card-title>
                </v-card-item>

                <v-card-text>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio ipsam illo dolorem officiis, pariatur sed, quaerat modi nam, et alias ad aliquid animi minima provident ducimus inventore culpa recusandae!</p>
                </v-card-text>
                
                <br>
                
                <v-img
                    class="ml-4"
                    style="width:500px"
                    src="/src/assets/room1.jpg"
                    cover
                >
                </v-img>
            </v-card>


            <v-card
                class="pa-4 bg-transparent"
                :disabled="loading"
                :loading="loading"
                max-width="550"
            >
                <v-card-item>

                    <v-card-item class="border-b-sm">
                        <div class="d-flex ga-4">
                        <v-icon size="60px" class="mdi mdi-cash-multiple mt-4"></v-icon>
                            <div>
                                <v-card-text>
                                    <h1 class="text-green">AFFORDABLE</h1><br>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ratione, perferendis laboriosam aliquid.</p>
                                </v-card-text>
                            </div>
                        </div>
                    </v-card-item>


                    <v-card-item class="border-b-sm">
                        <div class="d-flex ga-4">
                        <v-icon size="60px" class="mdi mdi-star-box-outline mt-4"></v-icon>
                            <div>
                                <v-card-text>
                                    <h1 class="text-green">HIGH RATINGS</h1><br>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ratione, perferendis laboriosam aliquid.</p>
                                </v-card-text>
                            </div>
                        </div>
                    </v-card-item>


                    <v-card-item class="border-b-sm">
                        <div class="d-flex ga-4">
                        <v-icon size="50px" class="mdi mdi-check-circle mt-4"></v-icon>
                            <div>
                                <v-card-text>
                                    <h1 class="text-green">WHATEVER</h1><br>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ratione, perferendis laboriosam aliquid.</p>
                                </v-card-text>
                            </div>
                        </div>
                    </v-card-item>

                    <v-card-item>
                        <div class="d-flex ga-4">
                        <v-icon size="50px" class="mdi mdi-check-circle mt-4"></v-icon>
                            <div>
                                <v-card-text>
                                    <h1 class="text-green">INFORMATION</h1><br>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ratione, perferendis laboriosam aliquid.</p>
                                </v-card-text>
                            </div>
                        </div>
                    </v-card-item>

                </v-card-item>
            </v-card>

            </div>
        </div>

    </v-container>
</template>

<script>
    export default {
        name: 'information',
        data(){
            return{
                images: [
                    {img:'../src/assets/room4.webp'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>