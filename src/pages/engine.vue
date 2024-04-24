<template>
  <v-container>
    <h1 class="text-center">ArtMind</h1>
    <h3 class="text-center font-weight-thin">Engines</h3>
    <v-divider class="my-8" />
    <v-row justify="center">
      <v-sheet width="1200" class="mt-8">
        <v-row>
          <v-col v-for="(v, i) in models" :key="i" cols="3">
            <v-card :disabled="!v.isSwitch" shaped>
              <h2 class="text-center mt-3">{{ v.name }}</h2>
              <h4 class="text-center font-weight-thin">Engines</h4>
              <v-divider class="ma-8" />

              <v-card-text>
                <v-row justify="center">
                  <v-switch
                    v-model="v.isSwitch"
                    hide-details
                    inset
                    :color="v.color"
                  ></v-switch>
                </v-row>
              </v-card-text>
              <v-card-text>
                <v-row justify="center">
                  <v-progress-circular
                    model-value="20"
                    width="10"
                    size="150"
                    :color="v.color"
                    ><p class="text-h4">20%</p></v-progress-circular
                  >
                </v-row>
              </v-card-text>

              <v-divider class="ma-8" />
              <div class="ma-3">
                <h4 class="text-center text-grey font-weight-thin">数据集数量</h4>
                <count-up
                  class="text-center font-weight-black text-grey"
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
import CountUp from "vue-countup-v3";
export default {
  data: () => ({
    models: [
      {
        name: "西方油画",
        description: "用于西方流派分析",
        // avatar: require("@/assets/west.jpg"),
        status: "已部署",
        isSwitch: true,
        color: "cyan",
      },
      {
        name: "中国山水",
        description: "用于中国风山水画分析",
        // avatar: require("@/assets/china.jpg"),
        status: "已部署",
        isSwitch: true,
        color: "teal",
      },
      {
        name: "日本浮世绘",
        description: "用于日式浮世绘风格分析",
        // avatar: require("@/assets/japan.jpg"),
        status: "已部署",
        isSwitch: true,
        color: "orange",
      },
      {
        name: "中国山水",
        description: "用于中国风山水画分析",
        // avatar: require("@/assets/china.jpg"),
        status: "待应用",
        isSwitch: false,
        // color: "teal"
      },
    ],
    model: true,
  }),
  components: {
    // eslint-disable-next-line vue/no-unused-components
    CountUp,
  },
  created() {
    this.toggles = this.models.map((v) => v.isSwitch);
  },
  methods: {
    toggleEngine(engineName: any) {
      const cur = this.models.findIndex((v: { name: string }) => v.name === engineName);
      this.models[cur].switch = !this.models[cur].switch;
    },
  },
};
</script>
