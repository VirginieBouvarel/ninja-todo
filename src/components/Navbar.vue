<template>
<div>
    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer= !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon class="grey--text" right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="primary">
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
  export default {
    data() {
      return {
        drawer: true,
        links: [
          { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
          { icon: 'mdi-folder', text: 'My Projects', route: '/projects' },
          { icon: 'mdi-account', text: 'Team', route: '/team' },
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>