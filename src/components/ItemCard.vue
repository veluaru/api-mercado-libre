<template>
  <v-card class="ma-5 mx-auto" max-width="344">
    <v-img :src=dato.image height="200px"></v-img>
    <v-card-title>{{dato.id}}</v-card-title>
    <v-card-subtitle>{{dato.texto}}</v-card-subtitle>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "ItemCard",
  props: ["dato"],
};
</script>