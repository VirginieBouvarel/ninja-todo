<template>
 <v-theme-provider light>
  <v-app>
    
      <Navbar />

      <v-content class="grey lighten-4">
        <div class="px-4 pb-4">
          <router-view/>
        </div>
      </v-content>


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
