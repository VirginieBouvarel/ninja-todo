<template>
  <div class="text-center">
    <v-dialog max-width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="success"
          dark
          depressed
          tile
          v-bind="attrs"
          v-on="on"
        >
          <span>Add new project</span>
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          Add a new project
        </v-card-title>
      </v-card>

    </v-dialog>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>