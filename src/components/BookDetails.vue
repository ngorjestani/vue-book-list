<template>
  <div class="text-center ml-2">
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="blue darken-1"
            dark
            v-bind="attrs"
            v-on="on"
        >
          Details
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Book Details
        </v-card-title>

        <v-card-text>
          {{book.getDetails()}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Book from "../models/Book";

export default {
  name: "BookDetails",
  props: {
    book: Book,
  },
  data() {
    return {
      dialog: false,
    }
  },
}
</script>

<style scoped>

</style>