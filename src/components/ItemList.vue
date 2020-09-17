<template>
  <v-container>
    <v-row>
      <v-col v-bind:key="item.id" v-for="item in items" cols="12" sm="3">
        <ItemCard v-bind:item="item" />
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
  props: ["items"],
  
};
</script>