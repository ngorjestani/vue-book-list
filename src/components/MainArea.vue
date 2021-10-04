<template>
  <div>
    <title-bar title="Book List"></title-bar>
    <v-main>
      <book-form @add-to-list="addBook"></book-form>
      <book-list :books="books" @remove-book="deleteBook"></book-list>
      <add-button></add-button>
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
  }),

  computed: {

  },

  methods: {
    addBook(book) {
      this.books.push(book);
    },
    deleteBook(book) {
      this.books.splice(this.books.indexOf(book), 1);
    },
  },

}
</script>

<style scoped>

</style>