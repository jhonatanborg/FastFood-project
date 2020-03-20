<template>
  <div id="menu-home">
    <v-navigation-drawer id="menu" width="200px" floating v-model="menu" app>
      <v-list class="mt-5" dense>
        <div class="text-center">
          <!-- <Icon width="70%" fill="#ff5722" /> -->
        </div>
        <v-list-item class="ma-3">
          <v-list-item-title>
            <v-btn block color="#ff5722" small to="/login" dark>Entrar</v-btn>
          </v-list-item-title>
        </v-list-item>
        <div class="text-center">
          <p class="text-center">
            ou crie uma conta
            <br />
            <strong>agora</strong>
          </p>
        </div>
        <v-list-item class="ma-3">
          <v-list-item-title>
            <v-btn outlined block color="#ff5722" to="/register" small dark
              >Criar conta</v-btn
            >
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list class="mt-5" dense>
        <v-list-item>
          <v-divider color="#ff5722"></v-divider>
        </v-list-item>
        <v-list-item class="subtitle-2">Destaques</v-list-item>
        <v-list-item
          @click="emitir"
          v-for="(item, key) in categories"
          :key="key"
          :to="{ name: 'category', params: { type: item } }"
        >
          {{ item }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
// import Icon from "@/components/Icon";

export default {
  props: {
    categories: Array
    // search: {
    //   type: Function
    // }
  },
  components: {},
  data: () => ({
    menu: true
  }),
  methods: {
    emitir() {
      // this.$emit("rotinha");
      this.$bus.$emit("rotinha");
    }
  }
};
</script>

<style></style>
