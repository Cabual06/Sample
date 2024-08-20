<template>
    <nav>
        <v-toolbar class="bg-black border-b-sm py-2 px-12">

            <v-toolbar-title>
                <span class="font-weight-bold text-h4 text-green">F</span>
                <span class="font-weight-bold text-h5">UCK-U SYSTEM</span>
            </v-toolbar-title>
            
            <div style="margin-right:600px" class="d-flex flex-row ga-12">
                <RouterLink class="text-decoration-none text-grey " to="/">Home</RouterLink>
                <RouterLink class="text-decoration-none text-grey " to="/Discover">Discover</RouterLink>
                <RouterLink class="text-decoration-none text-grey " to="/">Community</RouterLink>
                <RouterLink class="text-decoration-none text-grey " to="/">Packages</RouterLink>
            </div>

                <v-btn class="mr-4" variant="outlined" to="/Signup">Sign-Up</v-btn> 
                <!-- <v-btn class="mr-4" variant="outlined" to="/Login">Log In</v-btn>  -->

        </v-toolbar>
    </nav>
</template>

<script>
    export default {
        name: 'indexnav',
        data(){
            return{

            }
        }
    }
</script>

<style scoped></style>