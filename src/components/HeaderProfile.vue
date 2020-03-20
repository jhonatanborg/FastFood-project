<template>
  <div id="headerProfile">
    <div class="mx-auto">
      <v-card tile flat class="col-sm-12">
        <div class="d-flex justify-center-start">
          <div>
            <v-list-item>
              <v-list-item-avatar size="80" color="grey darken-3">
                <v-img
                  width="20%"
                  src="https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/0f75deda-d351-4ece-80be-4847b142b296/202002051010_xZHt_i.png"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <b>To frit's</b>
                </v-list-item-title>
                <v-list-item-subtitle>Rua amendoeiras, 49 - Sinop -MT</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </div>
        </div>
        <v-layout class="col-sm-12">
          <v-flex rows="4">
            <v-row>
              <div flat>
                <v-list-item dense>
                  <v-list-item-content>
                    <v-list-item-title>
                      <b>TEMPO DE ESPERA</b>
                    </v-list-item-title>
                    <v-list-item-subtitle>40 - 50 minutos</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </div>
              <div flat>
                <v-list-item dense>
                  <v-list-item-content>
                    <v-list-item-title>
                      <b>TAXA DE ENTREGA</b>
                    </v-list-item-title>
                    <v-list-item-subtitle>R$ 5,50</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </div>
              <div flat>
                <v-list-item dense>
                  <v-list-item-content>
                    <v-list-item-title>
                      <b>ABERTO</b>
                    </v-list-item-title>
                    <v-list-item-subtitle>23:00 - 3:00</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </div>
            </v-row>
          </v-flex>
        </v-layout>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerProfile"
}
</script>

<style>
.image-background {
  background-color: grey;
}
.subtitle {
  color: #797979;
}
.data-profile {
  font-size: 16px;
}
.title-data {
  font-size: 14px;
}
.title-company {
  font-family: CircularStd;
}
.image-profile {
  width: 100px;
}
</style>