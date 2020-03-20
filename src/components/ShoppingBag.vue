<template>
  <div id="shopping-bag">
    <v-sheet v-resize="onResize">
      <v-navigation-drawer
        id="teste"
        fixed
        v-bind:class="{ active: isActive, 'text-danger': hasError }"
        width="350px"
        right
        app
        persistent
        temporary
        mobile-break-point
        v-model="shoppingCart"
        overlay-opacity="40%"
      >
        <v-card flat class="mx-auto col-sm-12">
          <div class="d-flex justify-end my-3">
            <v-btn color="#ff5722" outlined class @click="shoppingCart = false">
              <v-icon>mdi-close</v-icon>Fechar
            </v-btn>
          </div>
          <v-tabs
            v-model="activeTab"
            centered
            grow
            background-color="white"
            color="#ff5722"
          >
            <v-tab active-class="tabs__item--active">Pedido</v-tab>
            <v-tab active-class="tabs__item--active">Pagamento</v-tab>
            <v-tabs-items v-model="activeTab">
              <v-tab-item>
                <div>
                  <v-list color="white" dense three-line>
                    <v-subheader>Itens na Sacola</v-subheader>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-content>
                        <b color="#ff5722" class="font-weight-regular"
                          >Macarrão 500gramas</b
                        >
                        <div class="d-flex justify-center mt-4 mb-4">
                          <b color="#ff5722">Detalhes</b>
                          <v-spacer></v-spacer>
                          <b>Remover</b>
                        </div>
                        <div class="d-flex align-baseline">
                          <v-select
                            :items="qtd"
                            class="input-name"
                            segmented
                            width="30%"
                            overflow
                            dense
                            value="1 item"
                            outlined
                            target="#target"
                          ></v-select>
                          <v-spacer></v-spacer>
                          <p class>R$ 15,00</p>
                        </div>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                      <v-list-item-content>
                        <b color="#ff5722" class="font-weight-regular"
                          >Macarrão 500gramas</b
                        >
                        <div class="d-flex justify-center mt-4 mb-4">
                          <b color="#ff5722">Detalhes</b>
                          <v-spacer></v-spacer>
                          <b>Remover</b>
                        </div>
                        <div class="d-flex align-baseline">
                          <v-select
                            :items="qtd"
                            class="input-name"
                            segmented
                            width="30%"
                            overflow
                            dense
                            value="1 item"
                            outlined
                            target="#target"
                          ></v-select>
                          <v-spacer></v-spacer>
                          <p class>R$ 15,00</p>
                        </div>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                  </v-list>
                  <v-card flat>
                    <v-subheader>Desconto</v-subheader>
                    <div class="d-flex justify-space-between pa-3">
                      <v-text-field
                        class="input-name"
                        dense
                        outlined
                        label="Cupom"
                      ></v-text-field>
                      <v-spacer></v-spacer>
                      <v-btn dark outlined color="#ff5722">Adicionar</v-btn>
                    </div>
                  </v-card>
                  <div>
                    <v-list dense color="white" two-line>
                      <v-subheader>Pagamento</v-subheader>
                      <v-divider></v-divider>
                      <v-list-item>
                        <div>Subtotal</div>
                        <v-spacer></v-spacer>
                        <div class="subtitle">R$ 15,00</div>
                      </v-list-item>
                      <v-divider></v-divider>
                      <v-list-item>
                        <div>Taxa de entrega</div>
                        <v-spacer></v-spacer>
                        <div class="subtitle">R$ 15,00</div>
                      </v-list-item>
                      <v-divider></v-divider>
                      <v-list-item>
                        <div>Total</div>
                        <v-spacer></v-spacer>
                        <div class="subtitle">
                          <b>R$ 15,00</b>
                        </div>
                      </v-list-item>
                      <v-btn @click="next()" block color="#ff5722" dark
                        >Continuar compra</v-btn
                      >
                    </v-list>
                  </div>
                </div>
              </v-tab-item>
              <v-tab-item key="2">
                <v-list color="white" dense three-line>
                  <v-subheader>Confirmar endereço</v-subheader>
                  <v-divider></v-divider>
                  <v-list-item>
                    <v-list-item-content>
                      <div class="d-flex justify-space-between">
                        <b color="#ff5722" class="font-weight-regular"
                          >R. dos Papiros, 36 St. Res. Sul, Sinop - MT</b
                        >
                        <div>
                          <b>Editar</b>
                        </div>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-subheader class="mt-5">Confirmar pagamento</v-subheader>
                <v-card flat class="mx-auto">
                  <v-list dense rounded>
                    <v-list-item-group v-model="model" multiple>
                      <template v-for="(item, i) in items">
                        <v-list-item
                          class="mt-3"
                          :key="`item-${i}`"
                          :value="item"
                          active-class="#ff5722"
                          dense
                        >
                          <template v-slot:default="{ active, toggle }">
                            <v-list-item-content>
                              <v-list-item-title
                                v-text="item"
                              ></v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-action>
                              <v-checkbox
                                :input-value="active"
                                :true-value="item"
                                color="#ff5722"
                                @click="toggle"
                              ></v-checkbox>
                            </v-list-item-action>
                          </template>
                        </v-list-item>
                      </template>
                    </v-list-item-group>
                  </v-list>
                  <v-spacer class="ma-5"></v-spacer>
                  <v-btn block color="#ff5722" dark>Confirmar</v-btn>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>
        </v-card>
      </v-navigation-drawer>
      <div id="app-bar">
        <v-app-bar app fixed id="app-bar" flat color="#F2F2F2">
          <v-app-bar-nav-icon @click.stop="menu = !menu" />
          <v-spacer></v-spacer>
          <v-btn v-on:click.stop="shoppingCart = !shoppingCart" rounded text>
            <v-icon class="mr-2">mdi-basket-outline</v-icon>Sacola
          </v-btn>
        </v-app-bar>
      </div>
      <div id="menu-home">
        <v-navigation-drawer
          id="menu"
          width="230px"
          floating
          v-model="menu"
          app
        >
          <div id="component-login">
            <LoginSuccess
              :imgProfile="objectUser.img.src"
              :statusLogin="login"
            />
          </div>
          <v-list dense>
            <v-list-item>
              <v-divider color="#ff5722"></v-divider>
            </v-list-item>
            <v-list-item class="subtitle-2">Destaques</v-list-item>
            <v-list-item :to="'/'">Home</v-list-item>

            <v-list-item
              @click="emitir"
              v-for="(item, key) in categories"
              :key="key"
              :to="{ name: 'category', params: { type: item.id } }"
            >
              {{ item.name }}
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </div>
    </v-sheet>
  </div>
</template>

<script>
import axios from "axios";
import LoginSuccess from "@/components/LoginSuccess";

export default {
  name: "ShoppingBag",

  props: {
    widht: Number
  },
  components: {
    LoginSuccess
  },
  created() {
    window.addEventListener("resize", () => {
      if (this.windowSize.x <= 500) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    });
    this.listCategories();

    this.onResize();
  },
  data: () => ({
    objectUser: {
      id: 1,
      img: {
        title: "Foto",
        src:
          "https://pbs.twimg.com/profile_images/1236456713362046976/vmW871gE_400x400.jpg"
      },
      user: {
        name: {
          title: "nome",
          value: "Jhonatan Borges"
        },

        birthday: {
          title: "data de nascimento",
          value: "20-05-2010"
        },
        password: {
          title: "senha",
          value: "123456"
        },
        email: {
          title: "e-mail",
          value: "jhodj@gmail.com"
        },
        tel: {
          title: "telefone",
          value: "66 9 99378204"
        }
      }
    },
    login: true,
    categories: [],
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
    listCategories() {
      console.log("env:" + process.env.VUE_APP_BASE_URL_SERVER_LOCAL);
      axios({
        url: process.env.VUE_APP_BASE_URL_SERVER_LOCAL + "company_category",
        method: "get"
      }).then(response => {
        console.log(response);
        this.categories = response.data;
      });
    },
    next() {
      this.activeTab = 1;
    },
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
      if (this.windowSize <= 500) {
        this.isActive = true;
      }
    },
    emitir() {
      // this.$emit("rotinha");
      this.$bus.$emit("rotinha");
    }
  }
};
</script>

<style>
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
