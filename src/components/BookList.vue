<template>
  <div>
    <div :key="book.id" v-for="book in books">
      <list-item :book="book" @remove-book="$emit('remove-book', book)"></list-item>
    </div>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem";
export default {
  name: "BookList",
  components: {ListItem},
  props: {
    books: Array,
  },
}
</script>

<style scoped>

</style>