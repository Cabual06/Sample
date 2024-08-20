<template>
  <Indexnav2 />

      <v-container>
          <h1 class="mb-12 mt-12 pl-6"><span class="text-green font-weight-bold text-h3">C</span>andidate for Vice President</h1>
          
          <div class="container d-flex ga-10 px-4">

            <v-card v-for="Candidate in Candidates" :key="Candidate.id"
              width="310"
            >
              <v-img
                height="330px"
                :src="Candidate.image"
                cover
              ></v-img>

              <v-card-title>
                {{ Candidate.name }}
              </v-card-title>

              <v-card-subtitle>
                {{ Candidate.position}}
              </v-card-subtitle>

              <v-card class="mt-4 border-t-md">
                <div class="d-flex flex-column ga-4 px-8 py-4">
                  <!-- <v-btn variant="tonal" class="text-green">VOTE <v-icon icon="mdi-check-circle" end></v-icon></v-btn> -->
                  <v-btn variant="tonal" class="text-green">LEARN MORE</v-btn>
                </div>
              </v-card>
            </v-card>

            </div>
      </v-container>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/lib/supabaseClient';

const Candidates = ref([]);
// const isLoading = ref(true);
// const isMatch = ref(false);

async function fetchPageData() {
// isLoading.value = true;
try {
  const { data, error } = await supabase
    .from('Candidates')
    .select('id, name, image, position'); // Remove unnecessary fields

  if (error) {
    console.error('Error fetching data:', error.message);
    isMatch.value = true;
    return;
  }

  console.log('Fetched data:', data); // Log fetched data
  Candidates.value = data;
} catch (error) {
  console.error('Error fetching data:', error.message);
  isMatch.value = true;
} finally {

}
}

onMounted(() => {
fetchPageData();
});

</script>

<style scoped>

</style>