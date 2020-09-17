<template>
  <div>
    <v-container class="d-flex justify-center pa-5 ma-3">
      <v-text-field hide-details single-line class="shrink" v-model="itemName"></v-text-field>
      <v-btn color="blue lighten-1" fab dark small @click="resetAndSearch">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-container>
    <v-container class="d-flex justify-center pa-3">
      <v-btn color="blue lighten-1 ma-4" fab dark small @click="backwardItems">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-btn color="blue lighten-1 ma-4" fab dark small @click="forwardItems">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      itemName: "",
      limit: 50,
      offset: 0,
      totalItems : 0
    };
  },

  methods: {
    searchItem() {
      axios
        .get("https://api.mercadolibre.com/sites/MCO/search?q=" + this.itemName + "&offset=" + this.offset)
        .then((response) => this.emitResponse(response));
    },
    resetAndSearch() {
        this.offset = 0;
        this.searchItem();
    },
    emitResponse(response) {
        if (response.data.results.length != 0) {
            this.totalItems = response.data.paging.total;
            this.$emit("searchResult", response);
        }
    },
    forwardItems() {
        if (this.offset+this.limit < this.totalItems) {
            this.offset+= this.limit;
            this.searchItem();
        }
    },
    backwardItems() {
        if(this.offset == 0) {
            return;
        } else {
            this.offset-= this.limit;
            this.searchItem();
        }
    }
  },
};
</script>

<style scoped>
.v-text-field {
  width: 600px;
}
</style>