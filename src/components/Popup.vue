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
        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder"></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil"></v-textarea>
            <v-btn depressed tile class="success mx-0 mt-3" @click="submit">ADD PROJECT</v-btn>
          </v-form>
        </v-card-text>
      </v-card>

    </v-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        content:'',
      }
    },
    methods: {
      submit() {
        console.log(this.title, this.content);
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>