<template>
  <v-container>
    <h1 class="text-center">ArtMind</h1>
    <h3 class="text-center font-weight-thin">Engines</h3>

    <v-divider class="my-8" />
    <v-row justify="center">
      <v-sheet width="1000" class="mt-8">
        <v-row>
          <v-col v-for="(v, i) in models" :key="i" cols="3">
            <v-card
              :disabled="!v.isSwitch"
              shaped
              :color="switches.includes(v.name) ? v.color : 'white'"
              class="text-white"
            >
              <h3 class="text-center mt-3">{{ v.name }}</h3>
              <h5 class="text-center font-weight-thin">Engines</h5>
              <v-divider class="ma-5" />

              <v-card-text>
                <v-row justify="center">
                  <v-switch
                    v-model="switches"
                    :value="v.name"
                    hide-details
                    inset
                    :color="v.color"
                  ></v-switch>
                </v-row>
              </v-card-text>
              <v-card-text>
                <v-row justify="center">
                  <v-progress-circular
                    :model-value="v.preciseNum"
                    width="10"
                    size="130"
                    :color="switches.includes(v.name) ? 'white' : v.color"
                  >
                    <p class="text-h6">{{ v.preciseNum }}%</p>
                  </v-progress-circular>
                </v-row>
              </v-card-text>

              <v-divider class="ma-8" />
              <div class="ma-3">
                <h4 class="text-center text-white font-weight-thin">数据集数量</h4>
                <count-up
                  class="text-center font-weight-black text-white"
                  :end-val="2000"
                ></count-up>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { color } from "chart.js/helpers";
import CountUp from "vue-countup-v3";
export default {
  data: () => ({
    switches: ["西方油画", "中国水墨", "日本浮世绘"] as Array<string>,
    models: [
      {
        name: "西方油画",
        description: "用于西方流派分析",
        status: "已部署",
        isSwitch: true,
        color: "red",
        preciseNum: 76,
      },
      {
        name: "中国水墨",
        description: "用于中国风山水画分析",
        status: "已部署",
        isSwitch: true,
        color: "teal",
        preciseNum: 96,
      },
      {
        name: "日本浮世绘",
        description: "用于日式浮世绘风格分析",
        isSwitch: true,
        color: "orange",
        preciseNum: 46,
      },
      {
        name: "波普艺术",
        description: "用于中国风山水画分析",
        isSwitch: false,
        // color: "teal"
      },
    ],
    model: true,
  }),
  components: {
    CountUp,
  },
  methods: {
    toggleEngine(engineId: number) {
      this.models[engineId].isSwitch = !this.models[engineId].isSwitch;
    },
  },
};
</script>
