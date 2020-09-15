<template>
  <div id="app">
    <v-app>
        <ToolBar/>
        <main>
          <v-container>
            <Search/>
          </v-container>
        </main>
    </v-app>
  </div>
</template>

<script>
import ToolBar from "./components/Toolbar";
import Search from "./components/Search";

export default {
  name: "App",

  components: {
    ToolBar,
    Search,
  },

  data: () => ({
    //
  }),
};
</script>
