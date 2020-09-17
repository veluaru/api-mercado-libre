<template>
  <v-container>
    <Search v-on:searchResult="searchResult" />
    <ItemList v-bind:items="items" />
  </v-container>
</template>

<script>
import Search from "./Search";
import ItemList from "./ItemList";

export default {
  name: "Home",
  components: {
    Search,
    ItemList,
  },
  methods: {
    searchResult(response) {
      this.items = response.data.results; 
      this.itemName = response.data.query;
    },
  },

  data() {
    return {
      itemName: "",
      items: [],
    };
  },
};
</script>