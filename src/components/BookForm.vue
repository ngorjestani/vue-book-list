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
          Submit
        </v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "BookForm",
  data() {

  },

  props: {
    book: {type: Object, default: () => ({id: Math.floor(Math.random() * 10000), title: '', genre: '', read: false})},
  },

  methods: {
    addToList(e) {
      e.preventDefault();
      this.$emit('add-to-list', this.book);
      this.book = {type: Object, default: () => ({id: Math.floor(Math.random() * 10000), title: '', genre: '', read: false})};
    }
  }

}
</script>

<style scoped>

</style>