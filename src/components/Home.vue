<template>
  <v-container>
    <Search />
    <ItemList v-bind:datos="datos" />
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
  data() {
    return {
      datos: [
        {
          id: 1,
          texto: "Margherita",
          fullprice: 22,
          sale: 0,
          category: "Sliced Pizza",
          description:
            "<span style='color:#ccc'>my description width a style injected</span>",
          image:
            "https://storage.googleapis.com/ghostfood-539ae.appspot.com/images/pizza_2.jpg",
          fav: false,
        },
        {
          id: 2,
          texto: "Capricciosa",
          fullprice: 25,
          sale: 22,
          category: "Sliced Pizza",
          description: "my description",
          image:
            "https://storage.googleapis.com/ghostfood-539ae.appspot.com/images/pizza_3.jpg",
          fav: false,
          stars: 3.5,
        },
        {
          id: 3,
          texto: "Napoli",
          fullprice: 20,
          sale: 0,
          category: "Sliced Pizza",
          description: "my description",
          image:
            "https://storage.googleapis.com/ghostfood-539ae.appspot.com/images/pizza_4.jpg",
          fav: false,
        },
        {
          id: 4,
          texto: "Salame Piccante",
          fullprice: 19,
          sale: 0,
          category: "Sliced Pizza",
          description: "my description",
          image:
            "https://storage.googleapis.com/ghostfood-539ae.appspot.com/images/pizza_5.jpg",
          fav: false,
        },        {
          id: 5,
          texto: "Margherita",
          fullprice: 22,
          sale: 0,
          category: "Sliced Pizza",
          description:
            "<span style='color:#ccc'>my description width a style injected</span>",
          image:
            "https://storage.googleapis.com/ghostfood-539ae.appspot.com/images/pizza_2.jpg",
          fav: false,
        },
        {
          id: 6,
          texto: "Capricciosa",
          fullprice: 25,
          sale: 22,
          category: "Sliced Pizza",
          description: "my description",
          image:
            "https://storage.googleapis.com/ghostfood-539ae.appspot.com/images/pizza_3.jpg",
          fav: false,
          stars: 3.5,
        },
        {
          id: 7,
          texto: "Napoli",
          fullprice: 20,
          sale: 0,
          category: "Sliced Pizza",
          description: "my description",
          image:
            "https://storage.googleapis.com/ghostfood-539ae.appspot.com/images/pizza_4.jpg",
          fav: false,
        },
        {
          id: 8,
          texto: "Salame Piccante",
          fullprice: 19,
          sale: 0,
          category: "Sliced Pizza",
          description: "my description",
          image:
            "https://storage.googleapis.com/ghostfood-539ae.appspot.com/images/pizza_5.jpg",
          fav: false,
        },
      ],
    };
  },
};
</script>