<template>
  <div id="purchase-details">
    <v-container class="col-sm-12 ">
      <div class="d-flex justify-space-between align-center">
        <div>
          <v-btn color="#ff5722" @click="$router.go(-1)" text>
            <v-icon size="20">mdi-arrow-left</v-icon>
            Voltar
          </v-btn>
        </div>

        <div>
          <v-chip class="mr-2" outlined color="primary">
            <v-icon size="20" left>mdi-checkbox-blank-circle</v-icon>
            Em andamento
          </v-chip>
        </div>
      </div>
      <v-card class="pa-5 mt-5" flat outlined>
        <div class="d-flex justify-space-between ">
          <div>
            <div class="subtitle-purchase">
              <b>
                Pedido 78524
              </b>
            </div>
            <div class="title-company">
              Açai no quintal
            </div>
            <div class="complements">
              Data: 14-03-02 11:45
            </div>
          </div>

          <div>
            <v-btn color="#ff5722" @click="$router.go(-1)" text>
              Ver cardápio
            </v-btn>
          </div>
        </div>
        <div class="mt-2">
          <b>
            Pedido
          </b>
        </div>
        <v-divider></v-divider>

        <div class="mt-2 d-flex justify-space-between">
          <div>1x Açai 500ml</div>
          <div>R$ 15,00</div>
        </div>

        <div>
          <v-expansion-panels tile flat>
            <v-expansion-panel v-for="(item, i) in 1" :key="i">
              <v-expansion-panel-header
                class="col-sm-2"
                type="text"
                text
                expand-icon=""
              >
                <v-btn small color="#ff5722" class="pa-0" text tile>
                  <v-icon size="20">mdi-plus</v-icon>
                  Detalhes
                </v-btn></v-expansion-panel-header
              >
              <v-expansion-panel-content class="complements">
                <div class="d-flex justify-space-between">
                  <div>
                    Nutella
                  </div>
                  <div>
                    0,00
                  </div>
                </div>
                <div class="d-flex justify-space-between">
                  <div>
                    Brigadeiro
                  </div>
                  <div>
                    0,00
                  </div>
                </div>
                <div class="d-flex justify-space-between">
                  <div>
                    Leite condensado
                  </div>
                  <div>
                    0,00
                  </div>
                </div>
                <div class="d-flex justify-space-between">
                  <div>
                    Banana
                  </div>
                  <div>
                    0,00
                  </div>
                </div>
                <div class="d-flex justify-space-between">
                  <div>
                    Morango
                  </div>
                  <div>
                    2,00
                  </div>
                </div>
                <div class="d-flex justify-space-between">
                  <div>
                    Kiwi
                  </div>
                  <div>
                    2,00
                  </div>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <v-divider></v-divider>

        <div class="my-2 d-flex justify-space-between">
          <div>1x Açai 500ml</div>
          <div>R$ 15,00</div>
        </div>

        <div>
          <v-expansion-panels tile flat accordion>
            <v-expansion-panel v-for="(item, i) in 1" :key="i">
              <v-expansion-panel-header class="col-sm-2" expand-icon="">
                <v-btn small block color="#ff5722" class="pa-0" text tile>
                  <v-icon size="20">mdi-plus</v-icon>
                  Detalhes
                </v-btn></v-expansion-panel-header
              >
              <v-expansion-panel-content class="complements">
                <div class="d-flex justify-space-between">
                  <div>
                    Nutella
                  </div>
                  <div>
                    0,00
                  </div>
                </div>
                <div class="d-flex justify-space-between">
                  <div>
                    Brigadeiro
                  </div>
                  <div>
                    0,00
                  </div>
                </div>
                <div class="d-flex justify-space-between">
                  <div>
                    Leite condensado
                  </div>
                  <div>
                    0,00
                  </div>
                </div>
                <div class="d-flex justify-space-between">
                  <div>
                    Banana
                  </div>
                  <div>
                    0,00
                  </div>
                </div>
                <div class="d-flex justify-space-between">
                  <div>
                    Morango
                  </div>
                  <div>
                    2,00
                  </div>
                </div>
                <div class="d-flex justify-space-between">
                  <div>
                    Kiwi
                  </div>
                  <div>
                    2,00
                  </div>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <v-divider></v-divider>

        <div class="my-5" id="address">
          <div>
            <div class="font-weight-bold">Entregue em</div>
          </div>
          <div>
            <v-list-item-title>Casa</v-list-item-title>
            <div class="subheader ">
              Rua Amendoeiras, 49, ao lado do 7 express
            </div>
          </div>
        </div>
        <div class="font-weight-bold my-5">
          <v-divider></v-divider>

          <div class="no-focus ">
            <div class="my-5 d-flex justify-space-between">
              <div>Subtotal</div>
              <div>R$ 15,00</div>
            </div>
            <v-divider></v-divider>
            <div class="my-5 d-flex justify-space-between">
              <div>Taxa de entrega</div>
              <div>R$ 2,00</div>
            </div>
            <v-divider></v-divider>
            <div class="my-5 d-flex justify-space-between">
              <div>Desconto</div>
              <div>R$ 5,00</div>
            </div>
          </div>

          <v-divider></v-divider>
          <div class="my-5 d-flex justify-space-between">
            <div>Total</div>
            <div>R$ 12,00</div>
          </div>
          <v-divider></v-divider>
          <div class="my-5">
            <div class="no-focus">Pagamento</div>
            <div>Master Card - Crédito</div>
          </div>
        </div>

        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.complements {
  font-size: 13px;
  color: grey;
}
.title-company {
  font-size: 20px;
}
.subheader {
  font-size: 13px;
  color: grey;
}
.no-focus {
  font-family: CircularStd;
  font-style: Bold;
  color: grey;
}
</style>
