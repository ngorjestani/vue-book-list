<template>
  <v-app>
    <title-bar title="Book List"></title-bar>
    <v-main>
      <book-list v-show="showList" :books="books" @remove-book="deleteBook"></book-list>
      <book-form v-show="showAddBook" @add-to-list="addBook"></book-form>
      <add-button @click="showAddBookScreen"></add-button>
    </v-main>
  </v-app>
</template>

<script>
import TitleBar from "@/components/TitleBar";
import BookList from "@/components/BookList";
import AddButton from "@/components/AddButton";
import BookForm from "@/components/BookForm";

export default {
  name: 'App',

  components: {
    BookForm,
    AddButton,
    BookList,
    TitleBar,
  },

  data: () => ({
    books: [],
    showBookForm: false,
    titleText: 'Book List',
    showList: true,
    showAddBook: false,
    showEditBook: false,
  }),

  methods: {
    addBook(book) {
      this.books.push(book);
    },
    deleteBook(book) {
      console.log("deleting book")
      this.books.splice(this.books.indexOf(book), 1);
    },
    showAddBookForm() {

    }
  }
};
</script>
