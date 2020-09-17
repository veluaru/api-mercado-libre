<template>
  <v-card class="d-flex justify-center pa-5 ma-3">
    <v-col>
      <v-row>
        <v-img contain :src="this.picture" height="400px"></v-img>
      </v-row>
    </v-col>
    <v-col>
      <v-card-title class="ma-5">{{item.price}}</v-card-title>
      <v-card-subtitle>{{item.title}}</v-card-subtitle>
      <v-card-subtitle>{{seller.nickname}}</v-card-subtitle>
    </v-col>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "Details",
  props: ["itemId"],
  data() {
    return {
      item: [],
      seller: "",
      picture: '',
    };
  },
  methods: {
    sellerName(id) {
      axios
        .get("https://api.mercadolibre.com/users/" + id)
        .then((response) => (this.seller = response.data));
    },
  },
  mounted() {
    axios
      .get("https://api.mercadolibre.com/items/" + this.itemId)
      .then((response) => {
        this.item = response.data;
        this.sellerName(this.item.seller_id);
        this.picture = this.item.pictures[0].url;
      });
  },
};
</script>