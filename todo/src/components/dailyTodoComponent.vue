<template>
    <div id:='daily-todo-component'>
        <v-col
        class="mb-5"
        cols="12"
        justify="center"
      >
        <h2 class="headline font-weight-bold mb-3 text-decoration-underline">
          {{ day.title }}
        </h2>
        
        <v-card
        class="text-left"> 

        <h3> <pre>    Work:</pre></h3>
          <ul
            v-for="(item, i) in day.work"
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
            v-for="(item, i) in day.personal"
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

      </v-col>
    </div>
</template>

<script>
  // import router from '../router/index.js'
  export default {
    props: {
        day: {
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
  }
</script>