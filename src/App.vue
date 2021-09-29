<template>
  <v-app>
    <title-bar title="Book List"></title-bar>
    <v-main>
      <book-list :books="books" @remove-book="deleteBook"></book-list>
      <add-button @click="showAddBookScreen"></add-button>
    </v-main>
  </v-app>
</template>

<script>
import TitleBar from "@/components/TitleBar";
import BookList from "@/components/BookList";
import AddButton from "@/components/AddButton";

export default {
  name: 'App',

  components: {
    AddButton,
    BookList,
    TitleBar,
  },

  data: () => ({
      books: [
        {id: 1, title: "Harry Potter", genre: "Fantasy", read: true},
        {id: 2, title: "Catcher in the Rye", genre: "Young Adult", read: true},
        {id: 3, title: "The Shining", genre: "Horror", read: false},
      ],
      showAddModal: false,
  }),

  methods: {
    addBook(book) {
      this.books.push(book);
    },
    deleteBook(book) {
      console.log("deleting book")
      this.books.splice(this.books.indexOf(book), 1);
    },
    showAddBookScreen() {

    },
  }
};
</script>
