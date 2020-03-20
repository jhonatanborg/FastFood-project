<template>
  <div>
    <div id="inspire">
      <MenuHome :categories="categories" />
    </div>
  </div>
</template>
<script>
import MenuHome from "@/components/MenuHome";
export default {
  name: "MenuBar",
  components: {
    MenuHome
  },
  props: {
    widht: Number
  },

  data: () => ({
    categories: [
      "Home",
      "Pizzza",
      "Saudavel",
      "Italiana",
      "Lanches",
      "Comida japonesa"
    ],
    isActive: false,
    hasError: true,
    menu: true,
    activeTab: "0",
    sheet: false,
    shoppingCart: false,
    age: null,
    active: false,
    qtd: ["1 item", "2 item", "3 item", "4 item"],
    items: ["Dinheiro", "Cartão de crédito", "Cartão de débito"],
    model: [],
    windowSize: {
      x: 0,
      y: 0
    },
    sizeWidht: 100
  }),

  methods: {
    next() {
      this.activeTab = 1;
    },
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
      if (this.windowSize <= 500) {
        this.isActive = true;
      }
    }
  },

  created() {
    window.addEventListener("resize", () => {
      if (this.windowSize.x <= 500) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    });

    this.onResize();
  }
};
</script>
<style scoped>
.input-name {
  width: 20px;
  height: 5px;
}

.active {
  width: 100% !important;
}
#menu {
  font-size: 14px;
}
#app-bar {
  height: 40px;
}
</style>
