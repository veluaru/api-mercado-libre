<template>
  <v-card
    @click="details"
    :class="hover"
    @mouseover="hover = 'cardHover'"
    @mouseleave="hover = 'card'"
  >
    <div class="card-col">
      <div class="card-row">
        <v-img class="item-image" :src="item.thumbnail"></v-img>
      </div>
      <div class="card-row">
        <v-card-title>{{ item.title }}</v-card-title>
      </div>
      <div class="card-row">
        <v-card-subtitle>{{ item.address.state_name }}</v-card-subtitle>
      </div>
      <div class="card-row">
        <v-card-text>{{ item.price }}</v-card-text>
      </div>
    </div>
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
  data() {
    return {
      hover: "card",
    };
  },
};
</script>

<style scoped>
.card {
  margin: auto;
  width: 350px;
  height: 410px;
}
.cardHover {
  padding: 5px;
  box-shadow: 6px 6px 10px 8px #dad9d9 !important;
  margin: auto;
  width: 350px;
  height: 410px;
}
.item-image {
  min-height: 170px;
  max-height: auto;
  min-width: auto;
  max-width: 160px;
}
.card-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>