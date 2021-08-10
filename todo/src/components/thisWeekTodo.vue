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

      <v-col
        class="mb-5"
        cols="12"
        justify="center"
      >
        <h2 class="headline font-weight-bold mb-3 text-decoration-underline">
          Monday
        </h2>
        
        <v-card
        class="text-left"> 

        <h3> <pre>    Work:</pre></h3>
          <ul
            v-for="(item, i) in monday.work"
            :key="i"
            class="subheading mx-3"
            target="_blank"
          >

          <input type="checkbox"
          class="subheading mx-3"
            :id="item.text"
            >
            <label v-if="item.complete==true" class="text-decoration-line-through" :for="item.text">{{ item.text }}</label>
            <label v-else :for="item.text">{{ item.text }}</label>
            <v-divider class="mx-4" vertical></v-divider>
            <!-- subList button -->
            <button class="addNewSmall" v-if="item.sublist" v-on:click="goTo('SubList')">More</button>
            <button class="addNewSmall" v-else v-on:click="goTo('SubList')">+</button>
          </ul>

          <h3> <pre>    Personal:</pre></h3>
          <ul
            v-for="(item, i) in monday.personal"
            :key="i"
            class="subheading mx-3"
            target="_blank"
          >

          <input type="checkbox"
          class="subheading mx-3"
            :id="item.text"
            :value="item.complete"
            @change="check($event, item)"
            >
            <label :for="item.text">{{ item.text }}</label>
            <v-divider class="mx-4" vertical></v-divider>
            <!-- subList button -->
            <button class="addNewSmall" v-if="item.sublist" v-on:click="goTo('SubList')">More</button>
            <button class="addNewSmall" v-else v-on:click="goTo('SubList')">+</button>
          </ul>

        </v-card>
        <!-- groceries button -->
        <v-btn
          to="/subList"
          text
          >
          <span
            style="color: #66BB6A;"
            >
            grocery list
          </span>
        </v-btn>

        <button v-on:click="goTo()">G list</button>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // import router from '../router/index.js'
  export default {
    name: 'todoList',

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
      monday: {
        work: [ 
          {
            text: 'A2',
            sublist: null,
            complete: false,
          },
          {
            text: 'C311 Project',
            sublist: null,
            complete: true,
          },
        ],
        personal: [
          {
            text: 'Groceries',
            sublist: ['oranges', 'pickles', 'chocolate', 'paper towels'],
            complete: false,
          },
          {
            text: 'Clip Toenails',
            sublist: null,
            complete: false,
          },
        ],
      }
    }),
  }
</script>
