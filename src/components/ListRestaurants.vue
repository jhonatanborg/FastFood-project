<template>
  <div>
    <div id="app">
      <div class="pa-3">
        <div class="d-flex justify-center justify-space-between align-center">
          <div class="subtitle" color="grey lighten-2">Restaurantes</div>
          <v-btn @click="filter = true" tile outlined color="#ff5722">
            Filtrar
            <v-icon right dark>mdi-filter</v-icon>
          </v-btn>
        </div>
        <v-layout class="">
          <v-row>
            <v-col v-for="item in companies" :key="item.id" cols="12" sm="4">
              <CardCompany
                :title="item.name"
                :valueDelivery="item.valueDelivery"
                :typeCompany="item.typeCompany"
                :ratingValue="item.ratingValue"
                :id="item.id"
                :imgCompany="item.logo"
              />
            </v-col>
          </v-row>
        </v-layout>
        <Banner />
      </div>
      <v-dialog v-model="filter" max-width="400">
        <v-card class="mx-auto">
          <v-list rounded>
            <v-subheader>Ordenar por:</v-subheader>
            <v-list-item-group class="pa-2" v-model="item" color="#ff5722">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-truck-delivery</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Entrega Grátis</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-divider></v-divider>
            <v-list-item-group class="pa-2" v-model="item" color="#ff5722">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-trending-up</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Mais Pedidos</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-divider></v-divider>
            <v-list-item-group class="pa-2" v-model="item" color="#ff5722">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-star-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Avaliação</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-btn @click="filter = false" block color="#ff5722" dark
              >Confirmar</v-btn
            >
          </v-list>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
import Banner from "@/components/Banner";
import CardCompany from "@/components/CardCompany";

export default {
  props: {
    companies: Array
  },
  name: "ListRestaurants",

  components: {
    Banner,
    CardCompany
  },
  data: () => ({
    filter: false,
    item: false
  }),
  methods: {
    getRouter() {
      console.log("cu");
    }
  }
};
</script>

<style>
#app {
  background-color: #f2f2f2;
}
</style>
