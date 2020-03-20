<template>
  <v-content>
    <div>
      <ShoppingBag :search="getRouter" />
      <ListRestaurants :companies="type" />
    </div>
  </v-content>
</template>

<script>
import ShoppingBag from "@/components/ShoppingBag";
import ListRestaurants from "@/components/ListRestaurants";
import axios from "axios";

export default {
  name: "Category",
  components: {
    ShoppingBag,
    ListRestaurants
  },
  mounted() {
    // this.getRouter();
    this.listCategories();
  },
  created() {
    this.$bus.$on("rotinha", () => {
      this.getRouter();
    });
  },
  data: () => ({
    type: {}
  }),
  methods: {
    getRouter() {},
    listCategories() {
      console.log("env:" + process.env.VUE_APP_BASE_URL_SERVER_LOCAL);
      axios({
        url: process.env.VUE_APP_BASE_URL_SERVER_LOCAL + "company_category",
        method: "get"
      }).then(response => {
        console.log(response.data);
      });
    }

    // rotinha() {
    //   console.log("cu");
    // }
  }
};
</script>

<style></style>
