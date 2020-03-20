<template>
  <v-content class="col-sm-12 background-login">
    <v-container v-resize="onResize">
      <div class="d-flex justify-center align-center my-5">
        <div :class="activate()">
          <div class>
            <div class="font-weight-bold py-2">
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
          33
        </div>
        <div
          class="col-sm-4 mx-auto card-login pa-5 elevation-17"
          id="loginUser"
        >
          <div>
            <div color="white">
              <div class="text-center py-1">
                <Icon width="50%" fill="#ff5722" />
              </div>
              <div class="pa-1">
                <div class="py-3">
                  <v-btn
                    large
                    block
                    color="red"
                    class="my-2"
                    outlined
                    dark
                    tile
                  >
                    <v-icon left>mdi-google</v-icon>Entrar com o google
                  </v-btn>
                  <v-btn class="my-2" large block color="primary">
                    <v-icon left>mdi-facebook</v-icon>Entrar com o Facebook
                  </v-btn>
                </div>
                <div class="subtitle text-center">Entrar com e-email</div>
                <div class="pt-4">
                  <v-text-field
                    dense
                    outlined
                    name="name"
                    label="E-mail"
                  ></v-text-field>
                </div>
                <div>
                  <v-text-field
                    dense
                    outlined
                    name="name"
                    label="Senha"
                  ></v-text-field>
                </div>
                <div id="buttons-login">
                  <div>
                    <v-btn block color="#ff5722" large dark>Entrar</v-btn>
                  </div>
                  <div class="py-2">
                    <div class="subtitle text-center py-3">
                      ou clique para se cadastrar
                    </div>
                  </div>
                  <div class>
                    <v-btn
                      outlined
                      block
                      color="#ff5722"
                      to="/register"
                      large
                      dark
                      >Cadastre-se</v-btn
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </v-content>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon
  },
  mounted() {
    this.onResize();
  },
  data: () => ({
    windowSize: {
      x: 0,
      y: 0
    }
  }),
  methods: {
    activate() {
      if (this.windowSize.x <= 700) {
        return "d-none";
      } else {
        return "col-sm-6 normal";
      }
    },
    onResize() {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight };
    }
  }
};
</script>

<style>
.v-btn {
  text-transform: none !important;
}
.background-login {
  /* background-image: url(../assets/images/image-6.png); */
  background: linear-gradient(
      to bottom right,
      rgba(3, 3, 3, 0.637),
      rgb(19, 18, 18)
    ),
    url(../assets/images/image-6.png);

  background-size: 100%;
}
.banner-title {
  color: whitesmoke;
}
.card-login {
  background-color: whitesmoke;
  height: 50%;
  border-radius: 5px;
}
.text-orange {
  color: #ff5722;
}
</style>
