<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <!-- <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        /> -->
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Weekly Todo List
          <!-- {{peek}} -->
          <!-- {{peek.mon.title}} -->
        </h1>
        <v-divider></v-divider>
      </v-col>
      <!-- days of the week -->
      <v-col cols="12">
      <daily-todo-component :day="peek.mon" :peek="peek"/>
      </v-col>
      <v-col cols="12">
      <daily-todo-component :day="peek.tue" :peek="peek"/>
      </v-col>
      <v-col cols="12">
      <daily-todo-component :day="peek.wed" :peek="peek"/>
      </v-col>
      <v-col cols="12">
      <daily-todo-component :day="peek.thu" :peek="peek"/>
      </v-col>
      <v-col cols="12">
      <daily-todo-component :day="peek.fri" :peek="peek"/>
      </v-col>
      <v-col cols="12">
      <daily-todo-component :day="peek.sat" :peek="peek"/>
      </v-col>
      <v-col cols="12">
      <daily-todo-component :day="peek.sun" :peek="peek"/>
      </v-col>
      
    </v-row>
    
  </v-container>
</template>

<script>
import dailyTodoComponent from '../components/dailyTodoComponent.vue';
  import db from '../localStorage/db'
  // import router from '../router/index.js'
  export default {
    components: { dailyTodoComponent },
    name: 'todoList',

    props: {
        week: {
            type: Object,
            default: () => ({})
        }
    },

    methods: {
      goTo: function (path) {
        this.$router.push({ name: path })
      },
      check: function (e, item) {
        item.complete = !item.complete;
        this.class="text-decoration-line-through";
      },
      // this function is passed into getFromDB so that it can set it within that function
      setPeek(data) {
        this.peek = data;
      }
    },
    // happens when page loads in
    created() {
      db.getFromDB("08/09/2021", this.setPeek )
    },
    data: () => ({
      peek: null,
    }),
  }
</script>
