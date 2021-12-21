<template>
<div>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span class="mr-4">Awesome! You added a new project.</span>
      <v-btn text color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer= !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <v-menu offset-y>

        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="grey"
            text
            v-bind="attrs"
            v-on="on"
          >
            <v-icon left>mdi-chevron-down</v-icon>
            <span class="text--uppercase grey--text">Menu</span>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>

      </v-menu>
      <!-- end of dropdown menu -->

      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon class="grey--text" right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="primary">
      <v-row class="flex-column align-center">
        <v-col class="mt-5 text-center">
          <v-avatar size="100">
            <img src="/avatar-1.png" alt="" >
          </v-avatar>
          <p class="white--text subheading mt-1">The net Ninja</p>
        </v-col>
        <v-col class="mb-3">
          <Popup @projectAdded="snackbar = true"/>
        </v-col>
      </v-row>

      <v-list>
        <v-list-item v-for="link in links" :key="link.text" :to="link.route">
          <v-list-item-action>
            <v-icon left class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Popup from './Popup.vue';
  export default {
    components: {
      Popup,
    },
    data() {
      return {
        drawer: true,
        links: [
          { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
          { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
          { icon: 'mdi-account', text: 'Team', route: '/team' },
        ],
        snackbar: false,
      }
    },
  }
</script>

<style lang="scss" scoped>
</style>