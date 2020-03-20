<template>
  <div class="product">
    <v-hover v-slot:default="{ hover }" open-delay="5">
      <v-card :class="gridSize" :elevation="hover ? 4 : 0" outlined>
        <v-list-item two-line>
          <v-list-item-avatar tile size="80" color="grey darken-3">
            <v-img :src="img"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="mb-1">{{ title }}</v-list-item-title>
            <div class="description-product my-auto py-2">
              {{ details }}
            </div>
            <v-list-item-subtitle class="font-weight-bold price">{{
              value
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-hover>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    details: String,
    value: String,
    img: String,
    item: String,
    gridSize: String,
    action: {
      type: Function
    }
  }
};
</script>

<style></style>
