<template>
  <div id="app">
    <v-app>
      <v-app-bar
        absolute
        color="blue lighten-1"
        dark
        scroll-target="#scrolling-techniques-7"
        app
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>La tienda de Angie</v-toolbar-title>
      </v-app-bar>
      <main>
        <v-content>
          <router-view></router-view>
        </v-content>
      </main>
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
