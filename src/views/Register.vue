<template>
  <div>
    <v-content class="col-sm-12 background-login">
      <v-container v-resize="onResize">
        <div class="d-flex justify-center align-center my-5">
          <div :class="activate()">
            <div class>
              .
              <div class="font-weight-bold py-4">
                <div class="py-5">
                  <Icon width="40%" fill="white" />
                </div>
                <div>
                  <p class="banner-title">
                    Desconto
                    <span class="text-orange font-italic">especial</span> de
                    <span class="text-orange font-italic">10%</span> na primeira
                    compra
                  </p>
                </div>
                <v-divider class="my-4" width="90%" color="white"></v-divider>
              </div>
              <div class>
                <p class="banner-title my-1">
                  Ganhe
                  <span class="font-weight-bold">10%</span>
                  de desconto na primeira compra ou
                  <span>Entrega grátis</span>
                  até 2km do restaurante.
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-4 mx-auto card-login pa-5 elevation-17">
            <div class="text-center py-1">
              <Icon width="50%" fill="#ff5722" />
            </div>
            <v-btn to="/login" class="my-4" outlined large block color="#ff5722"
              >Já tenho uma conta</v-btn
            >
            <v-tabs color="#ff5722" v-model="activeTab" grow>
              <v-tab active-class="tabs__item--active ">Passo 1</v-tab>
              <v-tab active-class="tabs__item--active ">Passo 2</v-tab>
              <v-tab active-class="tabs__item--active ">Passo 3</v-tab>

              <v-tabs-items class="card-login" v-model="activeTab">
                <v-tab-item>
                  <div class="pa-1">
                    <div class="pt-4">
                      <v-text-field
                        v-model="user.name"
                        dense
                        outlined
                        label="Nome"
                      ></v-text-field>
                    </div>
                    <div>
                      <v-text-field
                        v-model="user.email"
                        dense
                        outlined
                        label="E-mail"
                      ></v-text-field>
                    </div>
                    <div class>
                      <v-text-field
                        v-model="user.password"
                        dense
                        outlined
                        label="Senha"
                      ></v-text-field>
                    </div>
                    <div class>
                      <v-text-field
                        v-model="user.confirmated_password"
                        dense
                        outlined
                        label="Confirmar senha"
                      ></v-text-field>
                    </div>

                    <div>
                      <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        min-width="290px"
                        origin="center center"
                        color="#ff5722"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            dense
                            v-model="dateFormat"
                            label="Data de nascimento"
                            readonly
                            v-on="on"
                            color="#ff5722"
                            outlined
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          color="#ff5722"
                          ref="picker"
                          locale="pt-br"
                          v-model="user.birthday"
                          :max="maxDate"
                          min="1950-01-01"
                          @change="save"
                        ></v-date-picker>
                      </v-menu>
                    </div>
                    <div>
                      <v-btn
                        block
                        dense
                        color="#ff5722"
                        @click="nextAddress()"
                        large
                        dark
                        >Avançar</v-btn
                      >
                    </div>
                  </div>
                </v-tab-item>
                <v-tab-item>
                  <div class="pt-4">
                    <v-text-field
                      v-model="user.adress.cep"
                      dense
                      color="#ff5722"
                      outlined
                      label="CEP"
                    ></v-text-field>
                    <div class="">
                      <v-text-field
                        dense
                        color="#ff5722"
                        outlined
                        label="Bairro"
                      ></v-text-field>
                    </div>
                  </div>
                  <div class="">
                    <v-text-field
                      dense
                      color="#ff5722"
                      outlined
                      label="Cidade"
                    ></v-text-field>
                  </div>
                  <div class="">
                    <v-text-field
                      dense
                      color="#ff5722"
                      outlined
                      label="Estado"
                    ></v-text-field>
                  </div>
                  <v-layout px-3 row justify-space-between>
                    <v-flex sm8>
                      <v-text-field
                        v-model="user.adress.street"
                        dense
                        color="#ff5722"
                        outlined
                        label="Rua"
                      ></v-text-field>
                    </v-flex>
                    <v-flex sm3>
                      <v-text-field
                        v-model="user.adress.number"
                        dense
                        color="#ff5722"
                        outlined
                        label="Número"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <div class>
                    <v-text-field
                      v-model="user.adress.complement"
                      dense
                      color="#ff5722"
                      outlined
                      label="Complemento"
                    ></v-text-field>
                  </div>
                  <div class="my-2">
                    <v-btn
                      block
                      dense
                      outlined
                      color="#ff5722"
                      @click="nextTel()"
                      dark
                      >Voltar</v-btn
                    >
                  </div>
                  <div class="pt-3">
                    <v-btn block dense color="#ff5722" @click="nextTel()" dark
                      >Avançar</v-btn
                    >
                  </div>
                </v-tab-item>
                <v-tab-item>
                  <div class="py-5">
                    <div>
                      <v-text-field
                        v-model="user.phone"
                        min-widht="100px"
                        dense
                        color="#ff5722"
                        outlined
                        label="Telefone"
                      ></v-text-field>
                    </div>
                    <div v-if="sendSMS">
                      <v-text-field
                        v-model="code_sms"
                        min-widht="100px"
                        dense
                        color="#ff5722"
                        outlined
                        label="Código de verificação"
                      ></v-text-field>
                    </div>
                    <div v-if="!sendSMS">
                      <v-btn
                        dense
                        block
                        color="#ff5722"
                        outlined
                        @click="sendSms()"
                        dark
                        >Enviar</v-btn
                      >
                    </div>
                    <div v-if="sendSMS">
                      <v-btn
                        dense
                        block
                        color="#ff5722"
                        outlined
                        @click="confirmSms()"
                        dark
                        >Verificar Código</v-btn
                      >
                    </div>
                    <div v-if="sendRegister">
                      <v-btn
                        dense
                        block
                        color="#ff5722"
                        outlined
                        @click="register()"
                        dark
                        >Cadastrar</v-btn
                      >
                    </div>
                  </div>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>
          </div>
        </div>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import axios from "axios";

export default {
  components: {
    Icon
  },
  mounted() {
    this.onResize();
  },
  data: () => ({
    sendRegister: false,
    sendSMS: false,
    code_sms: "",
    user: {
      name: "",
      email: "",
      password: "",
      confirmated_password: "",
      phone: "",
      birthday: null,
      adress: {
        cep: "",
        street: "",
        number: "",
        complement: ""
      }
    },
    menu: false,
    dateFormat: null,
    maxDate: new Date().toISOString().substr(0, 10),
    windowSize: {
      x: 0,
      y: 0
    },
    activeTab: "0"
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  methods: {
    register() {
      axios({
        url: process.env.VUE_APP_BASE_URL_SERVER_LOCAL + "user",
        method: "post",
        data: this.user
      }).then(response => {
        console.log(response);
      });
    },
    sendSms() {
      //console.log(parseInt(this.user.phone));
      axios({
        url: process.env.VUE_APP_BASE_URL_SERVER_LOCAL + "sms",
        method: "post",
        data: {
          phone: this.user.phone
        }
      }).then(response => {
        console.log(response);
        this.sendSMS = true;
      });
    },
    confirmSms() {
      axios({
        url: process.env.VUE_APP_BASE_URL_SERVER_LOCAL + "checksms",
        method: "post",
        data: {
          phone: this.user.phone,
          code_sms: this.code_sms
        }
      }).then(response => {
        this.sendSMS = false;
        this.sendRegister = true;
        console.log(response);
      });
    },
    activate() {
      if (this.windowSize.x <= 700) {
        return "d-none";
      } else {
        return "col-sm-6 normal";
      }
    },
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    },
    save(date) {
      this.$refs.menu.save(date);
      const [year, day, month] = date.toLocaleString().split("-");
      this.dateFormat = new Date(`${day}/${month}/${year}`)
        .toLocaleString("pt-br")
        .substr(0, 10);
    },
    nextAddress() {
      this.activeTab = 1;
    },
    nextTel() {
      this.activeTab = 2;
    },
    backProfile() {
      this.activeTab = 0;
    }
  }
};
</script>

<style>
.v-btn {
  text-transform: none !important;
}
.background-login {
  background-image: linear-gradient(-60deg, #ff9b18 0%, #dd0a03 100%);
}
.banner-title {
  color: white;
}
.card-login {
  background-color: white !important;
  height: 50%;
  border-radius: 5px;
  text-transform: none !important;
}

.v-tab {
  text-transform: none !important;
}
</style>
