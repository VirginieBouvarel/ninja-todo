<template>
 <v-theme-provider light>
  <v-app>
    
      <Navbar />

      <v-main class="grey lighten-4 px-4 pb-4">
        <v-content>
          <router-view/>
        </v-content>
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
