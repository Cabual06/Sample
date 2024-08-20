<template>
    <Nav />
        <div class="pt-14">

            <div class="pt-16">

                <v-card
                class="mx-auto pa-12 pb-8 mt-8"
                elevation="8"
                max-width="500"
                rounded="lg"
                >
                <div class="text-subtitle-1 text-medium-emphasis pb-6">Product Information</div>

                <v-text-field label="Student's Name" placeholder="John" variant="outlined"></v-text-field>

                <v-text-field label="Email" placeholder="John@gmail.com" variant="outlined"></v-text-field>
                
                <v-text-field label="Phone Number" placeholder="09926761195" variant="outlined"></v-text-field>

                <v-text-field label="Address" placeholder="Dumaguete City" variant="outlined"></v-text-field>

                <v-combobox
                    label="Course"
                    prepend-inner-icon="mdi mdi-book-open"
                    variant="outlined"
                    v-model="course"
                    :items="['DDAT', 'DSET', 'BSIT', 'BSBA', 'BOXER']"
                ></v-combobox>

                <v-card
                    v-if="error"
                    class="mb-8"
                    color="surface-variant"
                    variant="tonal"
                >
                    <v-card-text class="text-medium-emphasis text-caption bg-red">
                    {{ error }}
                    </v-card-text>
                </v-card>

                <v-card
                    v-if="success"
                    class="mb-8"
                    color="surface-variant"
                    variant="tonal"
                >
                    <v-card-text class="text-medium-emphasis text-caption bg-green">
                    {{ success }}
                    </v-card-text>
                </v-card>

                <v-divider class="mx-a">

                    <!-- <v-btn
                    size="large"
                        class="ma-2"
                        color="warning"
                    >
                        Back
                        <v-icon
                        icon="mdi-arrow-left"
                        end
                        ></v-icon>
                    </v-btn> -->

                    <v-btn
                        variant="tonal"
                        size="large"
                        class="ma-2"
                        color="success"
                    >
                        Add student
                        <v-icon
                        icon="mdi-plus"
                        end
                        ></v-icon>
                    </v-btn>

                </v-divider>

                </v-card>
            </div>
        </div>
</template>

<script>
import nav from '@/components/nav'

    export default {
        name: 'addproduct',
        components:{
            nav
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>