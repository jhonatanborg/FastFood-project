<template>
  <v-container class=" col-sm-12" id="ProductBar">
    <v-sheet color="#f2f2f2" v-resize="onResizeDialogProduct">
      <div class="col-sm-12 d-flex justify-space-between">
        <v-row v-if="menuSize.x >= 500">
          <div class>
            <v-btn
              :to="{ name: 'products', params: { id: $route.params.id } }"
              selected
              text
              color="#ff5722"
              >Home</v-btn
            >
          </div>
          <div v-for="(item, key) in products" :key="key" class>
            <v-btn
              @click="$vuetify.goTo('#' + key, options)"
              text
              color="#797979"
              >{{ key }}</v-btn
            >
          </div>
        </v-row>
        <div v-else>
          <div class="select-category">
            <v-select
              id="select"
              color="#ff5722"
              :items="items"
              dense
            ></v-select>
          </div>
        </div>
        <div justify-end>
          <v-btn
            dense
            @click="rating = true"
            :to="{ name: 'rating', params: { id: $route.params.id } }"
            color="#ff5722"
            outlined
          >
            Avaliações
            <v-icon size="22" right dark>mdi-star</v-icon>
          </v-btn>
        </div>
      </div>

      <div
        id="list-products text-uppercase"
        v-for="(item, key) in products"
        :key="item.combo"
      >
        <div class="subtitle" :id="key" color="grey lighten-2">
          {{ key }}
        </div>
        <v-layout class="">
          <v-row>
            <v-col v-for="product in item" :key="product.id" cols="12" sm="6">
              <a @click="modal(product)">
                <Product
                  :title="product.name"
                  :details="product.details"
                  :value="product.saleValue"
                  :img="product.img"
                  :action="modal"
                />
              </a>
            </v-col>
          </v-row>
        </v-layout>
      </div>

      <v-layout min-height="500px" class>
        <Banner />
        <v-card min-height="480px"></v-card>
      </v-layout>
    </v-sheet>
    <div id="dialogProduct">
      <ProductDialog
        :viewDialog="viewDialog"
        :saleValue="productdialog.valueProduct"
        :detailsProduct="productdialog.detailsProduct"
        :title="productdialog.titleProduct"
        :imgProduct="productdialog.imgProduct"
        :closeDialog="closeDialog"
      />
    </div>
  </v-container>
</template>

<script>
import Banner from "@/components/Banner";
import Product from "@/components/Product";
import ProductDialog from "@/components/ProductDialog";

import * as easings from "vuetify/es5/services/goto/easing-patterns";

export default {
  name: "ProductBar",
  components: {
    Banner,
    Product,
    ProductDialog
  },
  created() {
    this.onResizeDialogProduct();
  },
  data: () => ({
    menuSize: {
      x: 0,
      y: 0
    },
    grid: "",
    productDetails: false,
    qtd: ["1 item", "2 item", "3 item", "4 item"],
    rating: true,

    type: "selector",
    number: 9999,
    selector: "#bebidas",
    selected: "Button",
    elements: ["Button", "Radio group"],
    duration: 300,
    offset: 0,
    easing: "easeInOutCubic",
    easings: Object.keys(easings),
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    mobileSize: {
      productDialog: false,
      activateFull: null,
      displayFlex: null,
      toolbar: null,
      toolbarMobile: false
    },
    productdialog: {
      valueProduct: "",
      detailsProduct: "",
      titleProduct: "",
      imgProduct: ""
    },

    viewDialog: false,
    products: {
      Combos: {
        product1: {
          id: 1,
          name: "X-tudo",
          saleValue: "14,50",
          details:
            " Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante, Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante",
          img:
            "https://images2.nogueirense.com.br/wp-content/uploads/2018/08/whatsapp-image-2018-08-16-at-19-59-49-1534878741.jpeg"
        },
        product2: {
          id: 2,
          name: "X-toledo",
          saleValue: "14,50",
          details:
            " Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante, Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante",
          img:
            "http://planoatlas.com.br/wp-content/uploads/2018/07/Lanchonete.jpg"
        },

        product3: {
          id: 3,
          name: "X-sergipe",
          saleValue: "14,50",
          details:
            " Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante, Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante",
          img:
            "http://planoatlas.com.br/wp-content/uploads/2018/07/Lanchonete.jpg"
        }
      },
      Destaques: {
        product1: {
          id: 1,
          name: "X-tudo",
          saleValue: "14,50",
          details:
            " Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante, Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante",
          img:
            "https://images2.nogueirense.com.br/wp-content/uploads/2018/08/whatsapp-image-2018-08-16-at-19-59-49-1534878741.jpeg"
        },
        product2: {
          id: 2,
          name: "X-toledo",
          saleValue: "14,50",
          details:
            " Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante, Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante",
          img:
            "http://planoatlas.com.br/wp-content/uploads/2018/07/Lanchonete.jpg"
        },

        product3: {
          id: 3,
          name: "X-sergipe",
          saleValue: "14,50",
          details:
            " Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante, Pão, molho, 2 salsichas, milho, ervilha, tomate e batata palha + refrigerante",
          img:
            "http://planoatlas.com.br/wp-content/uploads/2018/07/Lanchonete.jpg"
        }
      },
      Bebidas: {
        product1: {
          id: 1,
          name: "Coca Cola lata",
          saleValue: "4,50",
          details: "",
          img:
            "https://static.carrefour.com.br/medias/sys_master/images/images/h28/hfa/h00/h00/12175725363230.jpg"
        },
        product2: {
          id: 2,
          name: "Cola cola 2L",
          saleValue: "14,50",
          details: "",
          img:
            "https://static.carrefour.com.br/medias/sys_master/images/images/h10/h46/h00/h00/12175673655326.jpg"
        },

        product3: {
          id: 3,
          name: "Refrigerante ",
          saleValue: "14,50",
          details: "",
          img:
            "https://static.carrefour.com.br/medias/sys_master/images/images/h48/h55/h00/h00/15165945315358.jpg"
        },
        product4: {
          id: 4,
          name: "Cola cola 2L",
          saleValue: "14,50",
          details: "",
          img:
            "https://static.carrefour.com.br/medias/sys_master/images/images/h10/h46/h00/h00/12175673655326.jpg"
        },
        product5: {
          id: 5,
          name: "Cola cola 2L",
          saleValue: "14,50",
          details: "",
          img:
            "https://static.carrefour.com.br/medias/sys_master/images/images/h10/h46/h00/h00/12175673655326.jpg"
        }
      }
    }
  }),
  computed: {
    options() {
      return {
        duration: this.duration,
        offset: this.offset
      };
    }
  },
  methods: {
    modal(item) {
      this.viewDialog = true;
      console.log(item);
      this.productdialog.titleProduct = item.name;
      this.productdialog.valueProduct = item.saleValue;
      this.productdialog.detailsProduct = item.details;
      this.productdialog.imgProduct = item.img;
    },
    onResizeDialogProduct() {
      this.menuSize = { x: window.innerWidth, y: window.innerHeight };
      if (this.menuSize.x <= 500) {
        this.mobileSize.activateFull = true;
        this.mobileSize.displayFlex = false;
        this.mobileSize.toolbar = true;
      } else {
        this.mobileSize.activateFull = false;
        this.mobileSize.displayFlex = true;
        this.mobileSize.toolbar = false;
        this.mobileSize.toolbar = true;
      }
    },

    closeDialog() {
      this.viewDialog = false;
    }
  }
};
</script>

<style>
.subtitle-large {
  font-size: 16px;
}
.price {
  font-size: 16px;
}
.description-product {
  font-size: 14px;
}
</style>
