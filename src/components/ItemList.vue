<template>
  <v-container>
    <v-row>
      <v-col v-bind:key="dato.id" v-for="dato in datos" cols="12" sm="3">
        <ItemCard v-bind:dato="dato" />
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import ItemCard from "./ItemCard";

export default {
  name: "ItemList",
  components: {
    ItemCard,
  },
  props: ["datos"],
};
</script>