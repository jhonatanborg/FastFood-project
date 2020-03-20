<template>
  <div class="home" fill-height>
    <ShoppingBag :shoppingCart="shoppingCart" />
    <LoginSuccess />
  </div>
</template>
<script>
import ShoppingBag from "@/components/ShoppingBag";
import LoginSuccess from "@/components/LoginSuccess";

export default {
  name: "Home",
  components: {
    ShoppingBag,
    LoginSuccess
  },

  data: () => ({
    categories: [
      "Home",
      "Pizzza",
      "Saudavel",
      "Italiana",
      "Lanches",
      "Comida japonesa"
    ],
    shoppingCart: false,
    type: {
      company1: {
        id: 1,
        nameCompany: "Emporio do caldo",
        valueDelivery: "5,00",
        typeCompany: "Caldos e Massas",
        ratingValue: "4,5",
        imgCompany:
          "https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/0f75deda-d351-4ece-80be-4847b142b296/202002051010_xZHt_i.png"
      },
      company2: {
        id: 2,
        nameCompany: "Emporio do caldo",
        valueDelivery: "5,00",
        typeCompany: "Caldos e Massas",
        ratingValue: "4,5",
        imgCompany:
          "https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/381fe7c7-6760-47bf-ba3f-070bcc489885/202002061536_DzgK_i.png"
      },
      company3: {
        id: 3,
        nameCompany: "Emporio do caldo",
        valueDelivery: "5,00",
        typeCompany: "Caldos e Massas",
        ratingValue: "4,5",
        imgCompany:
          "https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/381fe7c7-6760-47bf-ba3f-070bcc489885/202002061536_DzgK_i.png"
      },
      company4: {
        id: 4,
        nameCompany: "Emporio do caldo",
        valueDelivery: "5,00",
        typeCompany: "Caldos e Massas",
        ratingValue: "4,5",
        imgCompany:
          "https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/381fe7c7-6760-47bf-ba3f-070bcc489885/202002061536_DzgK_i.png"
      },
      company5: {
        id: 5,
        nameCompany: "Emporio do caldo",
        valueDelivery: "5,00",
        typeCompany: "Caldos e Massas",
        ratingValue: "4,5",
        imgCompany:
          "https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/381fe7c7-6760-47bf-ba3f-070bcc489885/202002061536_DzgK_i.png"
      },
      company6: {
        id: 6,
        nameCompany: "Emporio do caldo",
        valueDelivery: "5,00",
        typeCompany: "Caldos e Massas",
        ratingValue: "4,5",
        imgCompany:
          "https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/0c773257-85ab-475d-b415-5ae3ddad8fe4/202001221831_oLKD_i.png"
      },
      company7: {
        id: 7,
        nameCompany: "Emporio do caldo",
        valueDelivery: "5,00",
        typeCompany: "Caldos e Massas",
        ratingValue: "4,5",
        imgCompany:
          "https://static-images.ifood.com.br/image/upload/f_auto,t_thumbnail/logosgde/625149e5-d550-4441-b008-435ba630ac9a/202002101851_UfF7_i.png"
      }
    }
  }),
  methods: {}
};
</script>
