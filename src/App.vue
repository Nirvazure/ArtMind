<template>
  <v-app>
    <v-navigation-drawer class="bg-deep-purple" theme="dark" permanent>
      <v-list color="transparent">
        <v-list-item
          @click="changeRoute('analyse')"
          prepend-icon="mdi-view-dashboard"
          title="Analyse"
        ></v-list-item>
        <v-list-item
          @click="changeRoute('engine')"
          prepend-icon="mdi-view-dashboard"
          title="Engines"
        ></v-list-item>
        <v-list-item prepend-icon="mdi-gavel" title="Admin"></v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
export default {
  methods: {
    changeRoute(routeName: string) {
      console.log("22m3", this.$router);
      this.$router.push(`/${routeName}`);
    },
  },
};
</script>
