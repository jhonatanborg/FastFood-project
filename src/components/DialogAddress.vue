<template>
  <div id="editPerfil">
    <v-dialog
      persistent
      :fullscreen="fullActive"
      v-model="viewDialogAddress"
      max-width="360"
    >
      <v-card class="pa-3">
        <v-toolbar dense flat color="white">
          <v-spacer></v-spacer>
          <v-btn color="red" @click="closeDialog" outlined class>
            <v-icon>mdi-close</v-icon>Fechar
          </v-btn>
        </v-toolbar>

        <div class="col-sm-10 pa-5  py-5">
          <div class="pb-5">
            <span class="subtitle"></span>
          </div>
          <div class="pt-4">
            <v-text-field
              dense
              color="#ff5722"
              outlined
              label="Titulo"
              :value="titleValue"
            ></v-text-field>
          </div>
          <div>
            <v-text-field
              dense
              color="#ff5722"
              outlined
              label="CEP"
              :value="cepValue"
            ></v-text-field>
          </div>
          <v-layout px-3 row justify-space-between>
            <v-flex sm8>
              <v-text-field
                dense
                color="#ff5722"
                outlined
                label="Rua"
                :value="streetValue"
              ></v-text-field>
            </v-flex>
            <v-flex sm3>
              <v-text-field
                dense
                color="#ff5722"
                outlined
                label="Número"
                :value="numberValue"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <div class>
            <v-text-field
              dense
              color="#ff5722"
              outlined
              label="Complemento"
              :value="complementValue"
            ></v-text-field>
          </div>

          <v-spacer></v-spacer>
          <v-btn class="mb-3" block color="#ff5722" dark>Confirmar</v-btn>

          <v-btn block color="red" outlined dark>Excluir</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    viewDialogAddress: Boolean,
    fullActive: Boolean,
    titleValue: String,
    cepValue: String,
    streetValue: String,
    numberValue: String,
    complementValue: String,
    closeDialog: {
      type: Function
    }
  },
  data: () => ({
    menuSize: {
      x: 0,
      y: 0
    }
  })
};
</script>

<style>
.edit-title {
  font-size: 16px;
}
</style>
