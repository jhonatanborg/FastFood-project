<template>
  <div id="company">
    <v-content class="col-sm-12">
      <ShoppingBag />
      <HeaderProfile />
      <router-view></router-view>

      <!-- </div> -->
    </v-content>
  </div>
</template>

<script>
import ShoppingBag from "@/components/ShoppingBag";
import HeaderProfile from "@/components/HeaderProfile";
// import ProductBar from "@/components/ProductBar"
// import Menu from "@/components/Menu"
export default {
  components: {
    ShoppingBag,
    HeaderProfile
    // ProductBar,
    // Menu,
  },
  created() {
    this.onResizeCategory();
  },
  data: () => ({
    statusLogin: true,
    menuSize: {
      x: 0,
      y: 0
    },
    items: ["Home", "Combos", "Bebidas"],
    item: "Home"
  }),
  methods: {
    onResizeCategory() {
      this.menuSize = { x: window.innerWidth, y: window.innerHeight };
    }
  },
  computed: {
    options() {
      return {
        duration: this.duration,
        offset: this.offset
      };
    }
  }
};
</script>

<style>
#company {
  background-color: #f2f2f2;
}

.select-category {
  width: 60%;
  height: 16px;
  font-size: 14px;
}
#select {
  height: 16px !important;
}
</style>
