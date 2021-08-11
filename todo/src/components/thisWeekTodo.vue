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
        </h1>
        <v-divider></v-divider>
      </v-col>
      <!-- days of the week -->
      <v-col cols="12">
      <daily-todo-component :day="week.mon"/>
      </v-col>
      <v-col cols="12">
      <daily-todo-component :day="week.tue"/>
      </v-col>
      <v-col cols="12">
      <daily-todo-component :day="week.wed"/>
      </v-col>
      <v-col cols="12">
      <daily-todo-component :day="week.thu"/>
      </v-col>
      <v-col cols="12">
      <daily-todo-component :day="week.fri"/>
      </v-col>
      <v-col cols="12">
      <daily-todo-component :day="week.sat"/>
      </v-col>
      <v-col cols="12">
      <daily-todo-component :day="week.sun"/>
      </v-col>
      
    </v-row>
    
  </v-container>
</template>

<script>
import dailyTodoComponent from '../components/dailyTodoComponent.vue';
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
      }
    },

    data: () => ({
      //
    }),
  }
</script>
