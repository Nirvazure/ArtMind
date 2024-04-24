<template>
  <v-card variant="tonal" class="text-center" height="350">
    <v-card-title class="font-weight-black">{{ name }}</v-card-title>
    <v-card-subtitle>文艺复兴</v-card-subtitle>
    <v-card-text class="text-center">
      <v-progress-circular model-value="20" size="150" width="40" color="primary">
        <v-avatar size="130">
          <v-img :src="url" />
        </v-avatar>
      </v-progress-circular>
    </v-card-text>
    <v-chip class="my-4 px-10" size="large" dark color="primary" variant="elevated"
      >90%</v-chip
    >

    <v-card-actions class="white justify-center" v-if="showSocial">
      <v-btn
        v-for="(social, i) in socials"
        :key="i"
        :color="social.color"
        class="white--text"
        fab
        icon
        small
      >
        <v-icon>{{ social.icon }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  url: String,
  showSocial: Boolean,
});
const socials = [
  {
    icon: "mdi-facebook",
    color: "indigo",
  },
  {
    icon: "mdi-linkedin",
    color: "cyan darken-1",
  },
  {
    icon: "mdi-instagram",
    color: "red lighten-3",
  },
];
console.log(props);
</script>
