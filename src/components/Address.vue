<template>
  <v-sheet v-resize="onResizeDialogAddress">
    <div>
      <v-card class="pa-5 mt-5" :outlined="borderCard" flat>
        <div>
          <span class="subtitle">Endereços</span>
        </div>
        <v-list two-line>
          <v-divider></v-divider>
          <div v-for="(item, key) in address" :key="item.id">
            <v-list-item>
              <v-list-item-content class="my-2">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                <div>
                  Rua {{ item.street }}, {{ item.number }},
                  {{ item.complement }}
                </div>
              </v-list-item-content>
              <v-list-item-action>
                <div>
                  <v-btn
                    class="mr-3"
                    @click="editAddress(key, item)"
                    text
                    outlined
                    color="primary"
                    >Editar
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </div>
              </v-list-item-action>
            </v-list-item>
            <v-divider></v-divider>
          </div>
        </v-list>
        <v-btn block outlined color="#ff5722" dark>Novo endereço</v-btn>
      </v-card>
      <DialogEditAdress
        :titleValue="modalEdit.title"
        :cepValue="modalEdit.cep"
        :streetValue="modalEdit.street"
        :numberValue="modalEdit.number"
        :complementValue="modalEdit.complement"
        :viewDialogAddress="viewDialogAddress"
        :closeDialog="this.closeDialog"
        :fullActive="mobileSize.activateFull"
      />
    </div>
  </v-sheet>
</template>

<script>
import DialogEditAdress from "@/components/DialogAddress";

export default {
  props: {
    borderCard: Boolean
  },
  components: {
    DialogEditAdress
  },
  created() {
    this.onResizeDialogAddress();
  },

  data: () => ({
    menuSize: {
      x: 0,
      y: 0
    },
    viewDialogAddress: null,
    address: {
      adress1: {
        id: 1,
        street: "Amendoeiras",
        number: "76",
        cep: "78520-000",
        complement: "Ao lado do 7 Express",
        title: "Casa"
      },
      adress2: {
        id: 2,
        street: "Amendoeiras",
        number: "76",
        cep: "78520-000",
        complement: "Ao lado do 7 Express",
        title: "Trabalho"
      },
      adress3: {
        id: 3,
        street: "Amendoeiras",
        number: "76",
        cep: "78520-000",
        complement: "Ao lado do 7 Express",
        title: "Familia"
      }
    },
    modalEdit: "",
    mobileSize: {
      activateFull: false
    }
  }),

  methods: {
    editAddress(key, item) {
      this.viewDialogAddress = true;
      this.modalEdit = item;
      console.log(this.modalEdit);
    },
    closeDialog() {
      this.viewDialogAddress = false;
      console.log("koko");
    },
    onResizeDialogAddress() {
      this.menuSize = { x: window.innerWidth, y: window.innerHeight };
      if (this.menuSize.x <= 500) {
        this.mobileSize.activateFull = true;
      } else {
        this.mobileSize.activateFull = false;
      }
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
.edit-title {
  font-size: 14px;
}
</style>
