<template>
  <grocery-list />
</template>

<script>
  import groceryList from '../components/groceries'

  export default {
    name: 'SubList',

    components: {
      groceryList,
    },
  }
</script>