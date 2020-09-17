<template>
  <v-card @click="details" class="ma-5 mx-auto" max-width="344" min-height="380">
    <v-img :src="item.thumbnail" height="150px"></v-img>
    <v-card-title>{{item.title}}</v-card-title>
    <v-card-subtitle>{{item.address.state_name}}</v-card-subtitle>
    <v-card-text class="text--primary">{{item.price}}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ItemCard",
  props: ["item"],
  methods: {
    details() {
      this.$router.push({ name: "Details", params: { itemId: this.item.id } });
    },
  },
};
</script>