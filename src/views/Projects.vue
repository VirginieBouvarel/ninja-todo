<template>
  <div class="project">
    <h1 class="subheading grey--text">Project page</h1>

    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel 
          class="grey--text" 
          v-for="project in myProjects" 
          :key="project.title"
        >
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
              <div class="font-weight-bold">due by {{ project.due }}</div>
              <div>{{ project.content }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

    </v-container>
  </div>
</template>

<script>
  import db from '@/fb';
  import { collection, getDocs } from "firebase/firestore"; 
  
  export default {
    name: "Projects",
    data() {
      return {
        projects: [],
      //   projects: [
      //   { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      //   { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      //   { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      //   { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      //   { title: 'Design a new website...again', person: 'The Net Ninja', due: '1st Jan 2020', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      // ]
      }
    },
    created() {
      this.querySnapshot();
    },
    computed: {
      myProjects() {
        return this.projects.filter(project => {
          return project.person === 'The Net Ninja' && project.status != 'complete';
        })
      }
    },
    methods: {
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
</style>