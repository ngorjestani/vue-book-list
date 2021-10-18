<template>
  <div>
    <div :key="book.id" v-for="book in books">
      <list-item :book="book" @remove-book="$emit('remove-book', book)"></list-item>
    </div>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem";
import ItemCollection from "../models/ItemCollection";

export default {
  name: "BookList",
  components: {ListItem},
  props: {
    books: ItemCollection,
  },
}
</script>

<style scoped>

</style>