<template>
  <v-container>
    <!-- <h1 class="text-center">Analyse</h1> -->
    <!-- <h4 class="text-center font-weight-thin"></h4> -->

    <picture-input
      class="mb-10"
      ref="pictureInput"
      width="600"
      height="300"
      margin="16"
      accept="image/jpeg,image/png"
      size="10"
      button-class="btn"
      :custom-strings="{
        drag: '请上传图片',
      }"
      @change="onChange"
    >
    </picture-input>

    <v-row justify="center">
      <v-sheet width="600">
        <v-row justify="space-between">
          <v-btn-toggle
            class="mx-4"
            v-model="formatting"
            variant="outlined"
            divided
            multiple
          >
            <v-btn>
              <v-icon icon="mdi-format-italic"></v-icon>
            </v-btn>
            <v-btn>
              <v-icon icon="mdi-format-bold"></v-icon>
            </v-btn>
            <v-btn>
              <v-icon icon="mdi-format-underline"></v-icon>
            </v-btn>
            <v-btn>
              <div class="d-flex align-center flex-column justify-center">
                <v-icon icon="mdi-format-color-text"></v-icon>
                <v-sheet color="purple" height="4" width="26" tile></v-sheet>
              </div>
            </v-btn>
          </v-btn-toggle>
          <v-btn
            variant="flat"
            color="purple-darken-3"
            class="mx-4"
            prepend-icon="$vuetify"
            :disabled="loading"
            @click="analyse"
          >
            {{ btnText }}
          </v-btn>
        </v-row>
        <v-divider class="my-3" />
        <v-row justify="center">
          <v-col lg="4">
            <v-skeleton-loader type="card-avatar" v-if="loading"></v-skeleton-loader>
            <PainterCard v-else name="毕加索" :url="painterImg" />
          </v-col>
          <v-col lg="8">
            <v-skeleton-loader type="card-avatar" v-if="loading"></v-skeleton-loader>
            <RaddarCard v-else />
          </v-col>
        </v-row>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { getImage } from "../utils.ts";
import PictureInput from "vue-picture-input";
import PainterCard from "../components/PainterCard.vue";
import RaddarCard from "../components/RaddarCard.vue";
export default {
  components: {
    PainterCard,
    RaddarCard,
    PictureInput,
  },
  data: () => ({
    craft: getImage("crafts", "记忆的永恒", "jpg"),
    painterImg: getImage("painters", "毕加索"),
    loading: false,
    btnText: "开始探索",
  }),

  methods: {
    analyse() {
      this.btnText = "正在分析";
      this.loading = true;
      // this.response = false;
    },
  },
  watch: {
    loading(val) {
      if (!val) return;
      setTimeout(() => {
        this.loading = false;
        this.btnText = "开始探索";
      }, 3000);
    },
  },
};
</script>

<style>
.bg {
  background-color: rgb(203, 203, 203);
}
</style>
