<template>
  <div class="home" fill-height>
    <ShoppingBag />
    <v-content>
      <v-card tile flat class="col-sm-12" outlined color="#ff5722">
        <div class="d-flex align-center flex-column">
          <div class="col-sm-8">
            <Icon width="50%" class="text-center mt-3" fill="white" />
          </div>
          <div class="col-sm-8">
            <v-text-field
              solo
              flat
              label="Buscar restaurante"
              prepend-inner-icon="mdi-magnify"
            ></v-text-field>
          </div>
        </div>
      </v-card>
      <router-view></router-view>
      <ListRestaurants :companies="type" />
    </v-content>
  </div>
</template>
<script>
import Icon from "@/components/Icon";
import ListRestaurants from "@/components/ListRestaurants";
import ShoppingBag from "@/components/ShoppingBag";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Icon,
    ListRestaurants,
    ShoppingBag
  },
  data: () => ({
    type: []
  }),
  mounted() {
    this.listCompanies();
  },
  methods: {
    listCompanies() {
      console.log("env:" + process.env.VUE_APP_BASE_URL_SERVER_LOCAL);
      axios({
        url: process.env.VUE_APP_BASE_URL_SERVER_LOCAL + "company",
        method: "get"
      }).then(response => {
        console.log(response.data);
        this.type = response.data;
      });
    }
  }
};
</script>
