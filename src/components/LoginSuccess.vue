<template>
  <div id="login-sucess">
    <div id="connected" v-if="!statusLogin">
      <v-list class="mt-5" dense>
        <div class="text-center">
          <Icon width="70%" fill="#ff5722" />
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
    </div>
    <div v-else id="unplugged" class="mt-5">
      <div class="text-center">
        <Icon width="70%" fill="#ff5722" />
        <v-list>
          <v-list-item>
            <div class="d-flex justify-space-between align-center">
              <v-avatar size="40">
                <v-img width="100%" :src="imgProfile"></v-img>
              </v-avatar>
              <div class="ml-2">
                Olá,
                <b>
                  Jhonatan
                </b>
              </div>
            </div>
          </v-list-item>
          <v-list-item color="#ff5722" :to="{ name: 'profile' }">
            Configurações de conta
          </v-list-item>
          <v-list-item color="#ff5722" :to="{ name: 'purchaseprofile' }" link>
            Meus pedidos
          </v-list-item>
          <v-list-item link>
            Segurança
          </v-list-item>
          <v-list-item link>
            Configurações de conta
          </v-list-item>
          <v-list-item>
            <v-btn @click="logout()" outlined color="error"
              >Encerrar sessão</v-btn
            >
          </v-list-item>
        </v-list>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon";

export default {
  components: {
    Icon
  },
  props: {
    statusLogin: Boolean,
    imgProfile: String
  },
  methods: {
    logout() {
      this.statusLogin = false;
      //limpar local storage
    }
  }
};
</script>

<style></style>
