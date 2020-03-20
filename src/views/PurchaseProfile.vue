<template>
  <v-content>
    <ShoppingBag />
    <router-view></router-view>
  </v-content>
</template>

<script>
import ShoppingBag from "@/components/ShoppingBag";

export default {
  components: {
    ShoppingBag
  }
};
</script>

<style>
.subtitle-purchase {
  font-size: 16px;
  color: grey;
}
.title-purchase {
  font-size: 20px;
}
</style>
