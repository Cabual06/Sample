<template>
  <div class="pt-8">

    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8 mt-14"
      elevation="8"
      max-width="455"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        density="comfortable"
        placeholder="Name"
        prepend-inner-icon="mdi mdi-account"
        variant="outlined"
        v-model="name"
      ></v-text-field>

      <v-text-field
        density="comfortable"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        v-model="email"
      ></v-text-field>
      
      <v-text-field
        density="comfortable"
        placeholder="Phone Number"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        v-model="phone"
      ></v-text-field>

      <v-text-field
        density="comfortable"
        placeholder="Address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        v-model="address"
      ></v-text-field>

      <v-combobox
        label="Course"
        density="comfortable"
        prepend-inner-icon="mdi mdi-book-open"
        variant="outlined"
        v-model="course"
        :items="['DDAT', 'DSET', 'BSIT', 'BSBA', 'BOXER']"
      ></v-combobox>

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
        <v-card-text class="text-medium-emphasis text-caption bg-red">
          {{ error }}
        </v-card-text>
      </v-card>

      <v-card
        v-if="success"
        class="mb-6 text-black"
        color="surface-variant"
        variant="tonal"
      >
        <v-card-text class="text-medium-emphasis text-caption bg-green">
          {{ success }}
        </v-card-text>
      </v-card>

      <v-btn
        class="mb-4"
        color="green"
        size="large"
        variant="tonal"
        block
        @click="signup"
      >
        SignUp
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target=""
        >
          <RouterLink to="/Login" class="text-decoration-none">LogIn now <v-icon icon="mdi-chevron-right"></v-icon></RouterLink>
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
import { supabase } from '../clients/supabase';  // Ensure the path is correct
import { FunctionRegion } from '@supabase/supabase-js';
// import { supabase } from '@/lib/supabaseClient'; 

export default {
  setup() {
    const loading = ref(false);
    const name = ref('');
    const email = ref('');
    const phone = ref('');
    const address = ref('');
    const course = ref('');
    const password = ref('');
    const visible = ref(false);
    const error = ref('');
    const success = ref('');

    const signup = async () => {

      loading.value = true;

      // Perform signup with email and password
      const { user, error: signupError } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      });

      if (signupError) {
        error.value = signupError.message;
        success.value = '';
        loading.value = false;
        return;
      }

      // Now you may want to save additional user information in your database
      const { data, error:dbError } = await supabase
        .from('Students')
        // .from('users')
        .insert([{ name: name.value, email: email.value, phone: phone.value, address: address.value, course: course.value}])
        .select();
        console.log('Insert Data:', data); // Added

        if (dbError) {
          error.value = dbError.message;
          // success.value = 'SignUp Successful!';
          // error.value = '';
          loading.value = false;
          return;

        }else{
          success.value = 'SignUp Successful! PLease verify you email';
          error.value = '';
          loading.value = false;
        }

        // DEBUGGING
        console.log('User:', user);
        console.log('Error during signup:', signupError);
        console.log('Data to insert:', { name: name.value, email: email.value, phone: phone.value, course: course.value, id: user.id });

      // Clear form fields
        name.value = '';
        email.value = '';
        phone.value = '';
        address.value = '';
        course.value = '';
        password.value = '';
    };

    return {
      name,
      email,
      phone,
      address,
      course,
      password,
      visible,
      error,
      success,
      signup,
      loading,
    };
  },
};

</script>

<style scoped>

</style>