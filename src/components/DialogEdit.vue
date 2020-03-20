<template>
  <div id="editPerfil">
    <v-dialog
      :fullscreen="fullActive"
      persistent
      v-model="viewDialog"
      max-width="360"
    >
      <v-card class="pa-3">
        <v-toolbar dense flat color="white">
          <v-spacer></v-spacer>
          <v-btn color="red" outlined class @click="closeDialog">
            <v-icon>mdi-close</v-icon>Fechar
          </v-btn>
        </v-toolbar>

        <div class="col-sm-12  py-5">
          <div class="pb-5">
            <span class="subtitle">{{ title }}</span>
          </div>
          <v-text-field
            outlined
            dense
            :label="titleLabel"
            :value="valueLabel"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn block color="#ff5722" dark>Confirmar</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    viewDialog: Boolean,
    fullActive: Boolean,
    title: String,
    valueLabel: String,
    titleLabel: String,
    closeDialog: {
      type: Function
    }
  }
};
</script>

<style></style>
