<template>
  <div class="details-product">
    <v-dialog
      :fullscreen="!desktop"
      max-width="700px"
      v-model="viewDialog"
      persistent
    >
      <v-card>
        <v-toolbar dense flat color="white">
          <v-spacer></v-spacer>
          <div>
            <v-btn color="#ff5722" outlined class @click="closeDialog">
              <v-icon>mdi-close</v-icon>Fechar
            </v-btn>
          </div>
        </v-toolbar>
        <div class="" :class="{ 'd-flex': desktop }">
          <div class="col-sm-6">
            <v-img
              class="mx-auto"
              :class="{ '': desktop }"
              height="100%"
              width="100%"
              :src="imgProduct"
            ></v-img>
          </div>
          <div id="description" :class="{ '': desktop }">
            <div class="pa-4">
              <div class="subtitle-large py-1">
                {{ title }}
              </div>
              <div class="description-product ">
                {{ detailsProduct }}
              </div>
              <div class="font-weight-bold price py-2">R$ {{ saleValue }}</div>
              <div class>
                <div class="">
                  <v-select
                    class="mr-2"
                    color="#ff5722"
                    :items="qtd"
                    segmented
                    overflow
                    dense
                    value="1 item"
                    outlined
                  ></v-select>
                </div>
                <div>
                  <v-text-field
                    outlined
                    dense
                    label="Escreva um comentário"
                    id="id"
                  ></v-text-field>
                </div>
                <div class="">
                  <v-btn block color="#ff5722" dark>Adicionar</v-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    productDetails: Boolean,
    viewDialog: Boolean,
    saleValue: String,
    detailsProduct: String,
    title: String,
    imgProduct: String,
    closeDialog: {
      type: Function
    }
  },
  created() {
    this.onResizeDialogProduct();
  },
  data: () => ({
    desktop: false,
    qtd: ["1 item", "2 item", "3 item", "4 item"]
  }),
  methods: {
    onResizeDialogProduct() {
      this.menuSize = { x: window.innerWidth, y: window.innerHeight };
      if (this.menuSize.x <= 500) {
        this.desktop = false;
      } else {
        this.desktop = true;
      }
    }
  }
};
</script>

<style></style>
