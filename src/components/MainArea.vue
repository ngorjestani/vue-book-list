<template>
  <div>
    <title-bar title="Book List"></title-bar>
    <v-main>
      <book-form v-show="showAddBookForm" @add-to-list="addBook"></book-form>
      <book-list v-show="!showAddBookForm" :books="books" @remove-book="deleteBook"></book-list>
      <add-button @add-book-clicked="handleAddBookClick"></add-button>
    </v-main>
  </div>
</template>

<script>
import TitleBar from "@/components/TitleBar";
import BookList from "@/components/BookList";
import AddButton from "@/components/AddButton";
import BookForm from "@/components/BookForm";

export default {
  name: "MainArea",

  components: {
    TitleBar,
    BookList,
    AddButton,
    BookForm,
  },

  props: {
    mainComponents: Object,
  },

  data: () => ({
    books: [],
    showAddBookForm: false,
  }),

  computed: {

  },

  methods: {
    addBook(book) {
      this.books.push(book);
      this.showAddBookForm = false;
    },
    deleteBook(book) {
      this.books.splice(this.books.indexOf(book), 1);
    },
    handleAddBookClick() {
      console.log('button clicked');
      this.showAddBookForm = true;
    },
  },

}
</script>

<style scoped>

</style>