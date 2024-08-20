<template>
  <Nav />
  <v-container>
    <v-container class="d-flex pb-6 pt-16 mt-6">
      <h1 class="text-medium-emphasis"><span class="text-green">C</span>andidates</h1>

      <v-spacer></v-spacer>

      <v-btn to="/Admin/AddProduct" variant="tonal" class="ma-2 z-index" color="green">
        Add Candidate<v-icon icon="mdi-plus" end></v-icon>
      </v-btn>
    </v-container>

    <v-toolbar class="bg-transparent mb-4 opacity-80">
      <v-text-field
        v-model="search"
        density="comfortable"
        placeholder="Search Candidate"
        prepend-inner-icon="mdi-magnify"
        style="max-width: 320px;"
        variant="solo"
        hide-details
      >
        <v-tooltip
          activator="parent"
          location="bottom"
        >Search Candidate's name</v-tooltip>
      </v-text-field>
    </v-toolbar>

    <v-card>
      <v-tabs v-model="tab" bg-color="black">
        <v-tab class="text-green" value="one">President</v-tab>
        <v-tab class="text-green" value="two">Vice President</v-tab>
        <!-- <v-tab class="text-green" value="three">Mage</v-tab>
        <v-tab class="text-green" value="four">Gold Lane</v-tab>
        <v-tab class="text-green" value="five">Roamer</v-tab> -->
      </v-tabs>

      <v-card-text class="bg-black border-t-md">
        <v-tabs-window v-model="tab" class="bg-transparent pt-10">
          <v-tabs-window-item value="one">
            <div class="container d-flex ga-10 px-4">
              <v-card v-for="Candidate in Candidates" :key="Candidate.id" width="310">
                <v-img
                  height="330px"
                  :src="Candidate.image"
                  cover
                ></v-img>

                <v-card-title>
                  {{ Candidate.name }}
                </v-card-title>

                <v-card-subtitle>
                  {{ Candidate.position }}
                </v-card-subtitle>

                <v-card-title>
                  Votes: {{ Candidate.vote }}
                </v-card-title>

                <v-card class="mt-4 border-t-md">
                  <div class="d-flex flex-column ga-4 px-8 py-4">
                    <v-btn variant="tonal" class="text-blue">EDIT <v-icon icon="mdi-checkbox-marked-circle" end></v-icon></v-btn>
                    <v-btn variant="tonal" class="text-red">DELETE <v-icon icon="mdi-delete" end></v-icon></v-btn>
                  </div>
                </v-card>

                <v-expand-transition>
                  <div v-show="expandedStates[Candidate.id]">
                    <v-divider></v-divider>
                    <v-card-text>
                      {{ Candidate.description }}
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </div>
          </v-tabs-window-item>

          <v-tabs-window-item value="two">
            Two
          </v-tabs-window-item>

          <v-tabs-window-item value="three">
            Three
          </v-tabs-window-item>

          <v-tabs-window-item value="four">
            Four
          </v-tabs-window-item>

          <v-tabs-window-item value="five">
            Five
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>

    <v-progress-linear
      v-if="isLoading"
      color="green"
      height="6"
      indeterminate
      rounded
    ></v-progress-linear>

    <v-empty-state
      class="mt-16 pt-16"
      v-if="isMatch"
      icon="mdi-magnify"
      text="Try restarting your connections. Sometimes less specific terms or broader queries can help you find what you're looking for."
      title="We couldn't fetch data from Database."
    ></v-empty-state>
  </v-container>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { supabase } from '@/lib/supabaseClient'; // Ensure this path is correct

const search = ref('');
const page = ref(1);
const itemsPerPage = ref(25);
const Candidates = ref([]);
const totalItems = ref(0);
const tab = ref('');
const expandedStates = ref({});
const isMatch = ref(false);
const isLoading = ref(true);

async function fetchPageData() {
  isLoading.value = true;
  try {
    // Fetch candidates
    const { data: candidates, error: candidatesError } = await supabase
      .from('Candidates')
      .select('id, name, image, description, position');

    if (candidatesError) throw new Error(candidatesError.message);

    // Fetch votes
    const { data: votes, error: votesError } = await supabase
      .from('Votes')
      .select('Candidate_id, count');

    if (votesError) throw new Error(votesError.message);

    // Aggregate votes by candidate_id
    const voteCountMap = votes.reduce((acc, vote) => {
      acc[vote.Candidate_id] = (acc[vote.Candidate_id] || 0) + vote.count;
      return acc;
    }, {});

    // Merge vote counts with candidates
    Candidates.value = candidates.map(candidate => ({
      ...candidate,
      vote: voteCountMap[candidate.id] || 0
    }));

    totalItems.value = Candidates.value.length;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    isMatch.value = true;
  } finally {
    isLoading.value = false;
  }
}


// Handle page and items-per-page updates
function handlePageUpdate(newPage) {
  page.value = newPage;
  fetchPageData();
}

function handleItemsPerPageUpdate(newItemsPerPage) {
  itemsPerPage.value = newItemsPerPage;
  fetchPageData();
}

// Watch for changes in search, page, or itemsPerPage
watch([search, page, itemsPerPage], () => {
  fetchPageData();
});

// Initial fetch
onMounted(() => {
  fetchPageData();
});
</script>

<style scoped>
</style>
