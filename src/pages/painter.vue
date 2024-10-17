<template>
  <v-container>
    <v-container>
      <v-data-iterator :items="painters" :page="page" :items-per-page="18">
        <template v-slot:default="{ items }">
          <v-row>
            <v-col v-for="(painter, i) in items" :key="i" cols="12" md="2">
              <v-card flat class="basil">
                <v-card-text class="text-center">
                  <v-avatar size="100">
                    <v-img
                      :src="`http://yqymons-bank.oss-cn-beijing.aliyuncs.com/artmind/images/painters/${painter.raw.name}.jpg`"
                    ></v-img>
                  </v-avatar>
                  <p>{{ painter.raw.name }}</p>
                  <v-chip small dark color="blue">文艺复兴</v-chip>
                </v-card-text>
                <v-card-actions class="white justify-center">
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
            </v-col>
            <v-divider vertical></v-divider>
          </v-row>
        </template>
      </v-data-iterator>

      <v-pagination
        class="mt-5"
        color="teal"
        v-model="page"
        :length="pageLength"
        rounded="circle"
      ></v-pagination>
    </v-container>
  </v-container>
</template>

<script>
import { painters } from "../api/painters";
export default {
  data: () => ({
    page: 1,
    socials: [
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
    ],
    painters: painters,
  }),
  computed: {
    pageLength() {
      return Math.floor(this.painters.length / 12);
    },
  },
};
</script>

<style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
