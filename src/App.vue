<template>
  <v-app id="App">
    <router-view />
  </v-app>
</template>
<script>

export default {
  name: "App",
  components: {

  },

  data: () => ({
    //
  })
};
</script>
<style>
#App {
  font-family: CircularStd;
}
.v-btn {
  text-transform: none !important;
}
</style>
