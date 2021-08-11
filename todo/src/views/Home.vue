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
        },
        //
        tue: {
          title: 'Tuesday',
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
        },
        //
        wed: {
          title: 'Wednesday',
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
        },
        //
        thu: {
          title: 'Thursday',
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
        },
        //
        fri: {
          title: 'Friday',
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
        },
      //
      sat: {
          title: 'Saturday',
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
        },
        //
        sun: {
          title: 'Sunday',
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
        },
      },
    }),
  }
</script>
