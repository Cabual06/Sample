<template>
  <div class="pt-16">
    <!-- <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    ></v-img> -->
    <div class="text-center pt-16 pb-4">
      <span class="text-h3 font-weight-bold"><span class="text-h2 text-green font-weight-bold">V</span>OTING SYSTEM</span>
    </div>

    <v-card
      class="mx-auto pa-12 pb-8 mt-14"
      elevation="8"
      max-width="455"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        v-model="email"
        density="comfortable"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot login password?
        </a>
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="comfortable"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        v-model="password"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-card
        v-if="error"
        class="mb-6"
        color="surface-variant"
        variant="tonal"
      >
        <v-card-text class="text-large-emphasis text-caption bg-red" :style="error">
          {{ error }}
        </v-card-text>
      </v-card>

      <v-card
        v-if="success"
        class="mb-6"
        color="surface-variant"
        variant="tonal"
      >
        <v-card-text class="text-medium-emphasis text-caption bg-green">
          {{ success }}
        </v-card-text>
      </v-card>


      <v-btn
        class="mb-4 mt-2"
        color="green"
        size="large"
        variant="tonal"
        block
        @click="login"

      >
        LogIn
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          <RouterLink to="/Signup" class="text-decoration-none">
            SignUp now
            <v-icon icon="mdi-chevron-right"></v-icon>
          </RouterLink>
        </a>
      </v-card-text>

      <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        color="green"
        absolute
        bottom
      ></v-progress-linear>

    </v-card>

  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // 
import { supabase } from '../clients/supabase';  // Ensure the path is correct

export default {
  setup() {
    const loading = ref(false);
    const router = useRouter();
    const visible = ref(false);
    const email = ref('');
    const password = ref('');
    const error = ref('');
    const success = ref('');

    const login = async () => {

      loading.value = true;

      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      });

      if (loginError) {
        error.value = loginError.message;
        success.value = '';
        console.log('Login error:', loginError.message);
        loading.value = false;
        return;
      }

      success.value = 'Login successful!';
      error.value = '';
      console.log('Login successful:', data);
      router.push({ name: '/Admin/Dashboard' });
    };

    const seeCurrentUser = async () => {
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      if (sessionError) {
        console.error('Session error:', sessionError.message);
        loading.value = false;
        return;
      }

      const { session } = sessionData;
      if (session) {
        console.log('Current user:', session.user);   
        loading.value = false;

      } else {
        console.log('No active session found.');
        loading.value = false;
      }
    };

    return {
      email,
      password,
      error,
      success,
      login,
      seeCurrentUser,
      visible,
      loading,
    };
  },
};

</script>

<style scoped>
  
  .error-message .v-card-text {
    color: #000000;
  }
</style>
