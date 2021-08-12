<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3" style="color: #66BB6A;">
          {{ this.$route.params.item.text }}
        </h1>
        <v-divider></v-divider>
      </v-col>

      <v-col
        class="mb-5 justify-center align-center flex-column d-flex"
        cols="12"
        justify="center"
        sm="3"
        lg="12"
      >

        <v-card 
          justify="center"
          class="text-left"
          elevation="0"
          :width="cardWidth"
          > 
          <v-checkbox
            v-for="(subitem, i) in this.$route.params.item.sublist"
            :key="i"
            :label="subitem"
            class="subheading mx-3"
          >
            
          </v-checkbox>
          <!-- add new button -->
          <input v-model="newItem" placeholder="New Item" class="addNewSmall" 
                :style="(this.$vuetify.breakpoint.name == 'xs') ? 'margin-left: 27px; border: 1px solid; text-align: center;' : 'margin-left: 16px; border: 1px solid; text-align: center;'" 
            >
          <button class="addNewSmall addButton" v-on:click="addNew(newItem)">Add</button>
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'SubList',

    components: {
      //
    },

    data: () => ({
      item: this.$route.params.item,
      newItem: null,
    }),

    methods: {
      addNew: function (text) {
        this.$route.params.item.sublist.push(text);
        this.newItem = null;
      },
    },

    computed: {
      cardWidth () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 220
          case 'sm': return 400
          case 'md': return 600
          case 'lg': return 600
          default: return 100
        }
      },
    }
  }
</script>

<style scoped>
.addButton {
  padding-left: 0;
  background-color: #66BB6A;
  color: white;
  border-color: #66BB6A;
  border: 1px solid;
}
.moreSmall {
  color:#66BB6A;
  font-size: small;
}

.mobileAddNewSection {
  margin-left: 27px; 
  border: 1px solid; 
  text-align: center;
  color:darkgray;
  font-size: small;
}
.AddNewSection {
  margin-left: 76px;
  border: 1px solid;
  text-align: center;
  color:darkgray;
  font-size: small;
}
</style>