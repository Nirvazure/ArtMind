<template>
  <v-container>
    <v-row>
      <v-col cols="1" v-for="(v, i) in painters" :key="i">
        <v-avatar size="100">
          <v-img
            :src="`http://yqymons-bank.oss-cn-beijing.aliyuncs.com/artmind/images/painters/${v.name}.jpg`"
          ></v-img>
        </v-avatar>
        <h1>{{ v.name }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { painters } from "../api/painters";
</script>
