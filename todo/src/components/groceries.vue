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
          Groceries
        </h1>
        <v-divider></v-divider>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <!-- <h2 class="headline font-weight-bold mb-3">
          Groceries
        </h2> -->


        <v-card justify="center"> 
          <v-checkbox
            v-for="(item, i) in subItems"
            :key="i"
            :label="item.text"
            class="subheading mx-3"
          >
            
          </v-checkbox>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'groceryList',

    data: () => ({
      subItems: [
        {
          text: 'apples',
        },
        {
          text: 'tampons',
        },
        {
          text: 'cheese',
        },
        {
          text: 'chocolate',
        },
      ],
    }),
  }
</script>
