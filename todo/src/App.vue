<template>
  <v-app>
    <v-app-bar
      app
      color="grey darken-3"
      dark
    >
      <!-- <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div> -->
      <v-img
        class="shrink"
        contain
        src="https://toppng.com/public/uploads/thumbnail/clip-transparent-simple-drawing-at-getdrawings-com-draw-fern-plant-11563257485yl2hiwnskp.png"
        width="95"
      />
      <h2 
        class="font-weight-thin font-italic font-weight-light px-5 pb-0 pt-4" 
        size="8rem" 
        weight="400"
        style="color: #388E3C;"
        >Todo</h2>

      <!--
        https://toppng.com/public/uploads/thumbnail/clip-transparent-simple-drawing-at-getdrawings-com-draw-fern-plant-11563257485yl2hiwnskp.png
        https://www.pngimages.pics/images/quotes/english/general/transparent-colorful-simple-plant-with-52650-254896.png

        -->



      <v-spacer></v-spacer>

      <v-btn
        to="/"
        text
      >
        <span
        style="color: #66BB6A;">
        Home</span>
      </v-btn>

      <v-btn
        to="/about/hazaa"
        text
      >
      
        <!-- target="_blank" to a new tab -->
        <span
        style="color: #66BB6A;">
        about</span>
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style>
.addNewSmall {
  color:darkgray;
  font-size: small;
}
</style>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
