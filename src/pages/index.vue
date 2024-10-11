<template>
  <v-parallax class="text-center pa-0" height="800" dark :src="randCraft">
    <h1 class="font-weight-bold animated zoomIn">ArtMind</h1>
    <h3 class="heading font-thin mb-7 animated zoomIn">最懂你的AI绘画分析引擎</h3>
    <p class="subheading font-weight-black animated zoomIn">
      共收录了
      <v-chip class="ma-2" variant="elevated">
        <count-up
          class="text-center font-weight-black text-grey"
          :end-val="num_of_painter"
        /> </v-chip
      >个画家的
      <v-chip class="ma-2" color="blue " variant="elevated">
        <count-up class="text-center font-weight-black" :end-val="2000" />
      </v-chip>
      张油画
    </p>
  </v-parallax>
</template>

<script>
import CountUp from "vue-countup-v3";
export default {
  components: {
    CountUp,
  },
  data: () => ({
    imgs: [
      "http://yqymons-bank.oss-cn-beijing.aliyuncs.com/artmind/images/painters/梵高.jpg",
      "http://yqymons-bank.oss-cn-beijing.aliyuncs.com/artmind/images/painters/毕加索.jpg",
      "http://yqymons-bank.oss-cn-beijing.aliyuncs.com/artmind/images/painters/达芬奇.jpg",
    ],
    bgImg:
      "http://yqymons-bank.oss-cn-beijing.aliyuncs.com/artmind/images/painters/达芬奇.jpg",
    num_of_painter: 30,
    num_of_paints: 3000,
  }),
  computed: {
    randCraft: function () {
      let a = new Date().getSeconds() % 3;
      if (a == 0) {
        return this.imgs[0];
      } else if (a == 1) {
        return this.imgs[1];
      } else {
        return this.imgs[2];
      }
    },
  },
};
</script>
