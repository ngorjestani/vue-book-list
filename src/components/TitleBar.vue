<template>
  <v-app-bar
      color="blue"
      app
  >
    <v-spacer></v-spacer>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: "TitleBar",
  props: {
    title: String,
  }
}
</script>

<style scoped>

</style>