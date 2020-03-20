<template>
  <div>
    <v-content>
      <v-sheet v-resize="onResizeDialogUser">
        <v-tabs
          :class="{ 'col-sm-12 mx-auto': mobileSize.isClass }"
          background-color="white"
          color="#ff5722"
          dense
          :grow="mobileSize.tabGrow"
          :left="mobileSize.isClass"
          v-model="activeTab"
        >
          <v-tab>Dados pessoais</v-tab>
          <v-tab>Endereço</v-tab>
          <v-tabs-items class="card-login" v-model="activeTab">
            <v-tab-item class="mt-5">
              <div>
                <v-card
                  v-if="mobileSize.mobileCard"
                  :loading="loading"
                  outlined
                  flat
                >
                  <div class="pa-5">
                    <div>
                      <span class="subtitle">Perfil</span>
                    </div>
                    <div>
                      <div>
                        <div
                          class="d-flex col-sm-12 justify-space-between align-center"
                        >
                          <div
                            class="edit-title"
                            v-text="objectUser.img.title"
                          ></div>
                          <div class="edit-title">
                            Uma foto ajuda a personalizar sua conta
                          </div>
                          <v-avatar>
                            <v-img
                              width="100%"
                              :src="objectUser.img.src"
                            ></v-img>
                          </v-avatar>
                        </div>

                        <div
                          v-for="(item, key) in objectUser.user"
                          :key="item.id"
                        >
                          <v-divider class="my-5"></v-divider>
                          <div
                            :class="{
                              'd-flex align-center ': mobileSize.groupAlign
                            }"
                          >
                            <div class="col-sm-6">
                              <div
                                class="edit-title text-uppercase"
                                v-text="item.title"
                              ></div>
                            </div>
                            <div class="col-sm-4">
                              <div class="subtitle-large">{{ item.value }}</div>
                            </div>
                            <div class="col-sm-2">
                              <v-btn
                                @click="edit(key, item)"
                                text
                                outlined
                                color="primary"
                                >Editar
                                <v-icon>mdi-pencil</v-icon>
                              </v-btn>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-card>
                <div v-else :loading="loading" outlined flat>
                  <div class="pa-5">
                    <div class="pb-5">
                      <span class="subtitle">Perfil</span>
                    </div>
                    <div class="d-flex  justify-space-between align-center">
                      <div>
                        <div
                          class="edit-title"
                          v-text="objectUser.img.title"
                        ></div>
                        <div class="edit-title">
                          Uma foto ajuda a personalizar sua conta
                        </div>
                      </div>

                      <v-avatar>
                        <v-img width="100%" :src="objectUser.img.src"></v-img>
                      </v-avatar>
                    </div>

                    <div v-for="(item, key) in objectUser.user" :key="item.id">
                      <v-divider class="my-5"></v-divider>
                      <div class="d-flex justify-space-between">
                        <div>
                          <div class="">
                            <div
                              class="edit-title text-uppercase"
                              v-text="item.title"
                            ></div>
                          </div>
                          <div class="">
                            <div class="subtitle-large">{{ item.value }}</div>
                          </div>
                        </div>
                        <div class="">
                          <v-btn
                            @click="edit(key, item)"
                            text
                            outlined
                            color="primary"
                            >Editar
                            <v-icon>mdi-pencil</v-icon>
                          </v-btn>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </v-tab-item>
            <v-tab-item>
              <Address :borderCard="mobileSize.borderCard" />
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>

        <DialogEdit
          :viewDialog="viewDialog"
          :title="modalParams.title"
          :valueLabel="modalParams.value"
          :closeDialog="this.closeDialog"
          :fullActive="mobileSize.activateFull"
        />
      </v-sheet>
    </v-content>
  </div>
</template>

<script>
import DialogEdit from "@/components/DialogEdit";

import Address from "@/components/Address";

export default {
  components: {
    DialogEdit,
    Address
  },
  created() {
    this.onResizeDialogUser();
  },
  data: () => ({
    menuSize: {
      x: 0,
      y: 0
    },
    activeTab: "0",
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
    loading: false,
    editDetails: false,
    mobileSize: {
      activateFull: false,
      groupAlign: false,
      regroup: false,
      mobileCard: false,
      isClass: false,
      tabGrow: false,
      borderCard: false
    },
    viewDialog: null,
    modalParams: {
      title: "",
      value: ""
    }
  }),
  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
    onResizeDialogUser() {
      this.menuSize = { x: window.innerWidth, y: window.innerHeight };
      if (this.menuSize.x <= 500) {
        this.mobileSize.activateFull = true;
        this.mobileSize.groupAlign = false;
        this.mobileSize.regroup = true;
        this.mobileSize.mobileCard = false;
        this.mobileSize.isClass = false;
        this.mobileSize.tabGrow = true;
        this.mobileSize.borderCard = false;
      } else {
        this.mobileSize.activateFull = false;
        this.mobileSize.groupAlign = true;
        this.mobileSize.regroup = false;
        this.mobileSize.mobileCard = true;
        this.mobileSize.isClass = true;
        this.mobileSize.tabGrow = false;
        this.mobileSize.borderCard = true;
      }
    },
    edit(key, item) {
      this.modalParams.title = "Alterar " + item.title;
      this.modalParams.value = item.value;
      this.viewDialog = true;
      console.log(item);
    },
    closeDialog() {
      this.viewDialog = false;
    },
    editAdress(key, item) {
      console.log(item);
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
