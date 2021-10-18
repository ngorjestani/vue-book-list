<template>
  <v-form>
    <v-container>
      <v-row>
          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                v-model="title"
                label="Title"
                required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              cols="8"
              md="3"
          >
            <v-text-field
                v-model="genre"
                label="Genre"
                required
            ></v-text-field>
          </v-col>
          <v-col
              cols="4"
              md="1"
          >
            <v-text-field
                v-model="pages"
                label="Pages"
                required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              cols="12"
              md="4"
          >
            <v-checkbox
                v-model="isRead"
                label="Have you read this book?"
            ></v-checkbox>
          </v-col>
        </v-row>
      <v-row>
        <v-btn
            @click="addToList"
        >
          Submit
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import Book from "../models/Book";

export default {
  name: "BookForm",
  data() {
    return {
      title: '',
      genre: '',
      pages: '',
      isRead: false,
    };
  },

  props: {

  },

  methods: {
    addToList(e) {
      e.preventDefault();
      this.$emit('add-to-list', new Book(this.title, this.genre, this.pages, this.isRead));
      this.title = '';
      this.genre = '';
      this.pages = '';
      this.isRead = false;
    }
  }

}
</script>

<style scoped>

</style>