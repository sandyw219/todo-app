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
              completedSublist: [],
            },
            {
              text: 'C311 Project',
              sublist: null,
              completedSublist: [],
            },
          ],
          personal: [
            {
              text: 'Groceries',
              sublist: ['oranges', 'pickles', 'chocolate', 'paper towels'],
              completedSublist: [],
            },
            {
              text: 'Clip Toenails',
              sublist: null,
              completedSublist: [],
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
              completedSublist: [],
            },
          ],
          personal: [
            {
              text: 'Lunch with Carley',
              sublist: null,
              completedSublist: [],
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
              completedSublist: [],
            },
            {
              text: 'Interview with CA',
              sublist: ['Computer', 'Portfolio', 'ID'],
              completedSublist: [],
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
              completedSublist: [],
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
              completedSublist: [],
            },
            {
              text: 'C311 Project',
              sublist: null,
              completedSublist: [],
            },
          ],
          personal: [
            {
              text: 'Groceries',
              sublist: ['oranges', 'pickles', 'chocolate', 'paper towels'],
              completedSublist: [],
            },
            {
              text: 'Clip Toenails',
              sublist: null,
              completedSublist: [],
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
              completedSublist: [],
            },
            {
              text: 'C311 Project',
              sublist: null,
              completedSublist: [],
            },
          ],
          personal: [
            {
              text: 'Groceries',
              sublist: ['oranges', 'pickles', 'chocolate', 'paper towels'],
              completedSublist: [],
            },
            {
              text: 'Clip Toenails',
              sublist: null,
              completedSublist: [],
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
              completedSublist: [],
            },
            {
              text: 'C311 Project',
              sublist: null,
              completedSublist: [],
            },
          ],
          personal: [
            {
              text: 'Groceries',
              sublist: ['oranges', 'pickles', 'chocolate', 'paper towels'],
              completedSublist: [],
            },
            {
              text: 'Clip Toenails',
              sublist: null,
              completedSublist: [],
            },
          ],
        },
      },
    }),
  }
</script>
