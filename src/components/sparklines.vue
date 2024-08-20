<template>
    <v-container class="d-flex ga-16 px-12 mt-8">

        <div class="mx-auto rounded-mg">
            <v-card
                class="mx-auto text-center"
                color="#000001"
                width="798"
                height="520"
                dark
            >
                <v-card-text>
                <v-sheet color="rgba(0, 0, 0, 9)">
                    <v-sparkline
                    :model-value="value"
                    color="green"
                    height="150"
                    padding="24"
                    stroke-linecap="round"
                    smooth
                    >
                    <template v-slot:label="item">
                        ${{ item.value }}
                    </template>
                    </v-sparkline>
                </v-sheet>
                </v-card-text>

                <v-divider></v-divider>
                
                <v-card-text>
                <div class="text-h4">
                    Check In's
                </div>
                </v-card-text>
    <!-- 
                <v-divider></v-divider>

                <v-card-actions class="justify-center">
                <v-btn
                    variant="text"
                    block
                >
                    Go to Report
                </v-btn>
                </v-card-actions> -->
            </v-card>
        </div>


        <div class="mx-auto w-50 border-lg">
            <v-card
                class="mx-auto text-center"
                color="black"
                width="790"
                height="500"
                dark
            >
                <v-card-text>
                <v-sheet color="rgba(0, 0, 0, .12)">
                    <v-sparkline

                    :gradient="['#f72047', '#ffd200', '#1feaea']"
                    height="150"
                    padding="24"
                    stroke-linecap="round"
                    smooth
                    >
                    <template v-slot:label="item">
                        ${{ item.value }}
                    </template>
                    </v-sparkline>
                </v-sheet>
                </v-card-text>

                <v-card-text>
                <div class="text-h4 font-weight-thin">
                    Cabual
                </div>
                </v-card-text>
    <!-- 
                <v-divider></v-divider>

                <v-card-actions class="justify-center">
                <v-btn
                    variant="text"
                    block
                >
                    Go to Report
                </v-btn>
                </v-card-actions> -->
            </v-card>
        </div>

        
    </v-container>

</template>

<script>
  export default {
    data: () => ({
      value: [
        443,
        446,
        675,
        510,
        620,
        610,
        760,
        660,
        610
      ],
    }),
  }
</script>

<style lang="scss" scoped>

</style>