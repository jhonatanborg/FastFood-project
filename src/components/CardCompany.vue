<template>
  <div>
    <v-card :to="{ name: 'company', params: { id: id } }" outlined>
      <v-list-item three-line>
        <v-list-item-avatar size="80" color="grey darken-3">
          <v-img width="20%" :src="imgCompany"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="mb-1">{{ title }}</v-list-item-title>
          <v-list-item-subtitle
            >Entrega R$ {{ valueDelivery }}</v-list-item-subtitle
          >
          <div class="d-flex align-center justify-end">
            <v-list-item-subtitle class="subtitle">{{
              typeCompany
            }}</v-list-item-subtitle>
            <v-icon size="20" color="#ff5722">mdi-star-outline</v-icon>
            <div class>
              <v-list-item-subtitle>{{ ratingValue }}</v-list-item-subtitle>
            </div>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    valueDelivery: String,
    typeCompany: String,
    ratingValue: String,
    imgCompany: String,
    id: Number
  }
};
</script>

<style></style>
