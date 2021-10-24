<template>
 <v-theme-provider light>
  <v-app>
    
    <Navbar />

    <v-main class="mx-4 mb-4">
      <router-view/>
    </v-main>

  </v-app>
 </v-theme-provider>
</template>

<script>
import Navbar from './components/Navbar';
export default {
  name: 'App',
  components: {Navbar,},
  data: () => ({
    //
  }),
};
</script>
