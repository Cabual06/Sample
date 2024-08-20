<template>
  <v-app class="bg-black">
    <v-main>
      <!-- <Nav /> -->
      <!-- <RouterLink to="/Login">Login</RouterLink> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import index from './pages/index.vue'

  export default {
    name: 'App',
    components: {
      index,
    }
  }
</script>
