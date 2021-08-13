<template>
    <div id:='daily-todo-component'>
        <v-col
        class="mb-5 justify-center align-center flex-column d-flex"
        cols="12"
        justify="center"
        sm="3"
        lg="12"
        >
        
        <v-card
        class="text-left"
        elevation="11"
        :width="cardWidth"
        > 
        <v-card-title class="text-decoration-underline">{{ day.title }}</v-card-title>

        <h3 v-if="this.$vuetify.breakpoint.name == 'xs'"> <pre>   Work:</pre></h3>
        <h3 v-else> <pre>    Work:</pre></h3>

          <ul
            v-for="(item, i) in day.work"
            :key="i"
            class="subheading mx-3"
            target="_blank"
          >

          <input type="checkbox"
            class="subheading mx-3"
            :id="item.text"
            :value="item.text"
            v-model="day.completed"
            >
              <label :for="item.text" :style="day.completed.includes(item.text) ? 'text-decoration:line-through;' : ''"> {{ item.text }} </label>
            
            <v-divider class="mx-4" vertical></v-divider>
            <!-- subList button -->
            <button class="moreSmall" v-if="item.sublist" v-on:click="goTo('SubList', item)">More</button>
            <button class="addNewSmall" v-else v-on:click="goTo('SubList', item)">+</button>
          </ul>
          <!-- add new button -->
          <input v-model="newItemMessageW" placeholder="New Item" class="addNewSmall" 
            :style="(this.$vuetify.breakpoint.name == 'xs') ? 'margin-left: 27px; border: 1px solid; text-align: center;' : 'margin-left: 76px; border: 1px solid; text-align: center;'" 
            >
          <button class="addNewSmall addButton" v-on:click="addNewWork(day, newItemMessageW)">Add</button>

          <h3 v-if="this.$vuetify.breakpoint.name == 'xs'"> <pre>   Personal:</pre></h3>
          <h3 v-else> <pre>    Personal:</pre></h3>

          <ul
            v-for="(item, i) in day.personal"
            :key="i"
            class="subheading mx-3"
            target="_blank"
          >

          <input type="checkbox"
          class="subheading mx-3"
            :id="item.text"
            :value="item.text"
            v-model="day.completed"
            >
            <placeholder :for="item.text" :style="day.completed.includes(item.text) ? 'text-decoration:line-through;' : ''"> {{ item.text }} </placeholder>
            <v-divider class="mx-4" vertical></v-divider>
            <!-- subList button -->
            <button class="moreSmall" v-if="item.sublist" v-on:click="goTo('SubList', item)">More</button>
            <button class="addNewSmall" v-else v-on:click="goTo('SubList', item)">+</button>
          </ul>
          <!-- add new button -->
          <input v-model="newItemMessageP" placeholder="New Item" class="addNewSmall" 
                :style="(this.$vuetify.breakpoint.name == 'xs') ? 'margin-left: 27px; border: 1px solid; text-align: center;' : 'margin-left: 76px; border: 1px solid; text-align: center;'" 
            >
          <button class="addNewSmall addButton" v-on:click="addNewPersonal(day, newItemMessageP)">Add</button>

        </v-card>
        <!-- <p>checked: {{day.completed}}</p> -->

      </v-col>
    </div>
</template>

<script>
  // import router from '../router/index.js'
  
  import db from '../localStorage/db'
  export default {
    props: {
        day: {
            type: Object,
            default: () => ({})
        },
        peek: {
          type: Object,
          default: () => ({})
        }
    },

    data: () => ({
      newItemMessageP: null,
      newItemMessageW: null,
    }),

    methods: {
      goTo: function (path, item) {
        this.$router.push({ 
          name: path,
          params: { item: item }
        })
      },
      check: function (e, item) {
        item.complete = !item.complete;
        this.class="text-decoration-line-through";
      },
      addNewPersonal: function (day, text) {
        var newItem = {
              text: text,
              sublist: null,
              complete: false,
            }
        //update database
        if(day.title == 'Monday') {
          this.peek.mon.personal.push(newItem);
        }
        else if(day.title == 'Tuesday') {
          this.peek.tue.personal.push(newItem);
        }
        else if(day.title == 'Wednesday') {
          this.peek.wed.personal.push(newItem);
        }
        else if(day.title == 'Thursday') {
          this.peek.thu.personal.push(newItem);
        }
        else if(day.title == 'Friday') {
          this.peek.fri.personal.push(newItem);
        }
        else if(day.title == 'Saturday') {
          this.peek.sat.personal.push(newItem);
        }
        else if(day.title == 'Sunday') {
          this.peek.sun.personal.push(newItem);
        }
        db.addToDB("08/09/2021", this.peek);
        this.newItemMessageP = null;
      },
      addNewWork: function (day, text) {
        var newItem = {
              text: text,
              sublist: null,
              complete: false,
            }
        //update database
        if(day.title == 'Monday') {
          this.peek.mon.work.push(newItem);
        }
        else if(day.title == 'Tuesday') {
          this.peek.tue.work.push(newItem);
        }
        else if(day.title == 'Wednesday') {
          this.peek.wed.work.push(newItem);
        }
        else if(day.title == 'Thursday') {
          this.peek.thu.work.push(newItem);
        }
        else if(day.title == 'Friday') {
          this.peek.fri.work.push(newItem);
        }
        else if(day.title == 'Saturday') {
          this.peek.sat.work.push(newItem);
        }
        else if(day.title == 'Sunday') {
          this.peek.sun.work.push(newItem);
        }
        db.addToDB("08/09/2021", this.peek);
        this.newItemMessageW = null;
      }
    },

    computed: {
      cardWidth () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 220
          case 'sm': return 400
          case 'md': return 500
          case 'lg': return 400
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