<template>
  <v-btn
      elevation="2"
      fab
      fixed
      bottom
      right
      @click="handleClick"
  >
    <v-icon>mdi-plus</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "AddButton",
  methods: {
    handleClick() {
      console.log('clicked');
      this.$emit('add-book-clicked');
    },
  },
}
</script>

<style scoped>

</style>