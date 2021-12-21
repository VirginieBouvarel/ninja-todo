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
          <v-form class="px-3" ref="form">
            <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules='inputRules'></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules='inputRules'></v-textarea>

            <v-menu
              close-on-content-click
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  :value="formattedDate"
                  label="Due date"
                  prepend-icon="mdi-calendar-range"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  :rules='inputRules'
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="due"
                color="primary"
              ></v-date-picker>
            </v-menu>

            <v-btn depressed tile class="success mx-0 mt-3" @click="submit">ADD PROJECT</v-btn>
          </v-form>
        </v-card-text>
      </v-card>

    </v-dialog>
  </div>
</template>

<script>
  // import format from 'date-fns/format';
  // import parseISO from 'date-fns/parseISO';
  import moment from 'moment';
  import db from '@/fb';
  import { collection, addDoc } from "firebase/firestore";

  export default {
    data() {
      return {
        title: '',
        content:'',
        due: null,
        inputRules: [
          v => v.length >= 3 || 'Minimum length is 3 characters'
        ]
      }
    },
    methods: {
      submit() {
        if(this.$refs.form.validate()) {
          console.log(this.title, this.content);

          const project = {
            title: this.title,
            content: this.content,
            due: moment(this.due).format("Do MMMM YYYY"),
            person: 'The Net Ninja',
            status: 'ongoing'
          };
          
          addDoc(collection(db, 'projects'), project)
            .then( () => {
              console.log(`added in db`);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
          
        }
      }
    },
    computed: {
      // formattedDate() {
      //   return this.due ? format(parseISO(this.due), 'do MMM yyyy') : '';
      // }
      formattedDate() {
        return this.due ? moment(this.due).format("Do MMMM YYYY") : '';
      }
    }
    
  }
</script>

<style lang="scss" scoped>
</style>