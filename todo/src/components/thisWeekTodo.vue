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
        <h2 class="headline font-weight-bold mb-3">
          Monday
        </h2>
        
        <v-card
        class="text-left"> 
          <ul
            v-for="(item, i) in todoItems"
            :key="i"
            class="subheading mx-3"
            target="_blank"
          >

          <input type="checkbox"
          class="subheading mx-3"
            :id="item.text">
            <label :for="item.text">{{ item.text }}</label>
            <v-divider class="mx-4" vertical></v-divider>
            <button v-on:click="goTo('SubList')">*****</button>
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
      }
      // goTo: function () {
      //   this.$router.push({ name: 'SubList' })
      // }
    },

    data: () => ({
      todoItems: [
        {
          text: 'A2',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'C311 Project',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'Groceries',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
          subli: ['oranges', 'pickles', 'chocolate', 'paper towels'],
        },
        {
          text: 'Clip Toenails',
          href: '',
        },
      ],
    }),
  }
</script>
