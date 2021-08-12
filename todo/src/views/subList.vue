<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3" style="color: #66BB6A;">
          {{ this.$route.params.item.text }}
        </h1>
        <v-divider></v-divider>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >

        <v-card justify="center"> 
          <v-checkbox
            v-for="(subitem, i) in this.$route.params.item.sublist"
            :key="i"
            :label="subitem"
            class="subheading mx-3"
          >
            
          </v-checkbox>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
  <!-- <h1>{{ this.$route.params.item.text }}
    {{ this.$route.params.item.sublist }}
  </h1> -->
</template>

<script>

  export default {
    name: 'SubList',

    components: {
      //
    },

    data: () => ({
      item: this.$route.params.item
    })
  }
</script>