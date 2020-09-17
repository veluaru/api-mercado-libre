<template>
  <div id="app">
    <v-app>
      <v-app-bar absolute color="blue lighten-1" dark app>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title class="text-h4">La tienda de Angie</v-toolbar-title>
      </v-app-bar>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>

