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
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    book: {
      type: Object,
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