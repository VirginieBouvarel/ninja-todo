<template>
  <div class="dashboard">
    <h1 class="subheading grey--text mb-12">Dashboard</h1>

    <v-container class="my-5">
      
      <v-row class="ml-3 mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">

            <v-btn small text dark color="grey" @click="sortBy(criteria.title)" v-bind="attrs" v-on="on">
            <v-icon left small>mdi-folder</v-icon>
            <span class="text-caption text-lowercase">by project title</span>
            </v-btn>

          </template>
          <span>Sort projects by project title</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small text dark color="grey" @click="sortBy(criteria.person)" v-bind="attrs" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="text-caption text-lowercase">by person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>
      </v-row>

      <v-card flat class="pa-3" v-for="project in projects" :key="project.title">
        <v-row :class="`project ${project.status}`" class="align-center">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title}}</div>
          </v-col>
          <v-col  cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
           <div>{{ project.person}}</div>
          </v-col>
          <v-col  cols="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
           <div>{{ project.due}}</div>
          </v-col>
          <v-col  cols="2" sm="4" md="2">
            <div class="text-right">
             <v-chip small :class="`white--text text-caption ${project.status}`">{{ project.status }}</v-chip>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-divider></v-divider>
        </v-row>

      </v-card>
      
    </v-container>
  </div>
</template>

<script>

  import db from '@/fb';
  import { collection, getDocs } from "firebase/firestore"; 

  export default {
    name: 'Dashboard',
    data: () => ({
      criteria: {
        title: "title",
        person: "person"
      },
      projects: [],
      // projects: [
      //   { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      //   { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      //   { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      //   { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      // ]
    }),
    created() {
      this.querySnapshot();

    },
    methods: {
      sortBy(criteria) {
        this.projects.sort((a,b) => a[criteria] < b[criteria] ? -1 : 1);
      },
      async querySnapshot() {
        const snapshot =  await getDocs(collection(db, "projects"));
        snapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          this.projects.push({
            id: doc.id,
            ...doc.data(),
          })
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
.project.complete {
	border-left: 4px solid #3cd1c2;
}
.project.ongoing {
	border-left: 4px solid orange;
}
.project.overdue {
	border-left: 4px solid tomato;
}
.v-chip.complete {
	background: #3cd1c2 !important;
}
.v-chip.ongoing {
	background: orange !important;
}
.v-chip.overdue {
	background: tomato !important;
}
</style>
