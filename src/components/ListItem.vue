<template>
  <v-layout class="pa-2">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ book.title }}</h3>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="blue">Edit</v-btn>
          <v-btn flat color="red" @click="deleteBook">Delete</v-btn>
          <book-details :book="book"></book-details>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import BookDetails from "@/components/BookDetails";
import Book from "../models/Book";

export default {
  name: "ListItem",
  components: {BookDetails},
  props: {
    book: {
      type: Book,
      required: true,
    },
  },
  methods: {
    deleteBook() {
      this.$emit('remove-book', this.book);
    },
  }
}
</script>

<style scoped>

</style>