<template>
  <v-form>
    <v-container>
      <v-row>
          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                v-model="book.title"
                label="Title"
                required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              cols="12"
              md="4"
          >
            <v-text-field
                v-model="book.genre"
                label="Genre"
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
                v-model="book.read"
                label="Have you read this book?"
            ></v-checkbox>
          </v-col>
        </v-row>
      <v-row>
        <v-btn
            @click="addToList"
        >
          Add Book
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "AddBook",
  data() {

  },
  props: {
    book: {type: Object, default: () => ({id: Math.floor(Math.random() * 10000), title: '', genre: '', read: false})},
  },
  methods: {
    addToList() {
    this.$emit('add-to-list', this.book);
    }
  }

}
</script>

<style scoped>

</style>