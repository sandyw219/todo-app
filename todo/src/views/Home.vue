<template>
  <todo-list :week="thisWeek"/>
</template>

<script>
  // import HelloWorld from '../components/HelloWorld'

  // export default {
  //   name: 'Home',

  //   components: {
  //     HelloWorld,
  //   },
  // }
  import todoList from '../components/thisWeekTodo'

  export default {
    name: 'Home',

    components: {
      todoList,
    },

    data: () => ({
      thisWeek: {
        mon: {
          title: 'Monday',

          completed: [],
          
          work: [ 
            {
              text: 'A2',
              sublist: null,
              complete: false,
            },
            {
              text: 'C311 Project',
              sublist: null,
              complete: false,
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
        },
        //
        tue: {
          title: 'Tuesday',

          completed: [],
          
          work: [ 
            {
              text: 'A3',
              sublist: ['Find a partner', 'Write the psuedocode for the snake movements', 'Snake eats food', 'Add color to the snake', 'Snake head is defferent symbol'],
              complete: false,
            },
          ],
          personal: [
            {
              text: 'Lunch with Carley',
              sublist: null,
              complete: false,
            },
          ],
        },
        //
        wed: {
          title: 'Wednesday',

          completed: [],
          
          work: [ 
            {
              text: 'C311 office hours',
              sublist: null,
              complete: false,
            },
            {
              text: 'Interview with CA',
              sublist: ['Computer', 'Portfolio', 'ID'],
              complete: false,
            },
          ],
          personal: [],
        },
        //
        thu: {
          title: 'Thursday',

          completed: [],
          
          work: [],
          personal: [
            {
              text: 'Therapist apt 1pm',
              sublist: null,
              complete: false,
            },
          ],
        },
        //
        fri: {
          title: 'Friday',

          completed: [],
          
          work: [ 
            {
              text: 'A2',
              sublist: null,
              complete: false,
            },
            {
              text: 'C311 Project',
              sublist: null,
              complete: false,
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
        },
      //
      sat: {
          title: 'Saturday',

          completed: [],
          
          work: [ 
            {
              text: 'A2',
              sublist: null,
              complete: false,
            },
            {
              text: 'C311 Project',
              sublist: null,
              complete: false,
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
        },
        //
        sun: {
          title: 'Sunday',

          completed: [],
          
          work: [ 
            {
              text: 'A2',
              sublist: null,
              complete: false,
            },
            {
              text: 'C311 Project',
              sublist: null,
              complete: false,
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
        },
      },
    }),
  }
</script>
