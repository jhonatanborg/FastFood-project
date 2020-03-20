<template>
  <div id="app-bar">
    <v-app-bar app fixed persistent id="app-bar" flat color="#F2F2F2" dense>
      <v-app-bar-nav-icon @click.stop="menu = !menu" />
      <v-spacer></v-spacer>
      <v-btn v-on:click.stop="shoppingCart = !shoppingCart" rounded text>
        <v-icon class="mr-2">mdi-basket-outline</v-icon>Sacola
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
