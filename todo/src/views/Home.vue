<template>
  <todo-list />
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
  }
</script>
