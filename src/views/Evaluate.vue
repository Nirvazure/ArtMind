<template>
  <v-container>
    <v-row>
      <v-col col="12" md="9">
        <v-card elevation="24" class="mx-auto">
          <v-carousel
            :continuous="false"
            :cycle="cycle"
            :show-arrows="true"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="400"
          >
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet height="100%">
                <v-img :src="slide.avatar"></v-img>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          <v-list two-line>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
                <v-list-item-subtitle>Author</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-rating v-model="rating" length="10" readonly>
                  <template v-slot:item="props">
                    <v-icon
                      :color="props.isFilled ? 'purple darken-4' : ''"
                      v-text="`mdi-numeric-${props.index}-box`"
                    ></v-icon>
                  </template>
                </v-rating>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <v-card-actions>
            <v-text-field class="mx-4" v-model="label" label="Label"></v-text-field>
            <v-btn color="success" @click.stop="drawer = !drawer">评价</v-btn>
          </v-card-actions>
          <Report v-if="!drawer"></Report>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card class="mx-auto" max-width="400" tile>
          <v-card-title>
            绘画班17
            <v-spacer></v-spacer>
            <v-btn color="yellow" dark>17/24</v-btn>
          </v-card-title>
          <v-list two-line>
            <template v-for="(item, index) in items">
              <v-subheader v-if="item.header" :key="item.header" inset>{{ item.header }}</v-subheader>
              <v-divider v-else-if="item.divider" :key="index" inset></v-divider>
              <v-list-item v-else :key="item.title" ripple @click>
                <v-list-item-avatar>
                  <img :src="item.avatar" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-chip label small>提交了作业</v-chip>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import painters from "@/api/painters.js";
import crafts from "@/api/crafts.js";
export default {
  data: () => ({
    crafts: painters.splice(0, 6),
    slides: crafts,
    colors: [
      "green",
      "secondary",
      "yellow darken-4",
      "red lighten-2",
      "orange darken-1"
    ],
    items: [
      {
        header: "Today"
      },
      {
        divider: true
      },
      {
        avatar: "https://picsum.photos/250/300?image=660",
        title: "Li Charlie",
        subtitle:
          "<span class='text--primary'>Spike Lee</span> &mdash; I'll be in your neighborhood"
      },
      {
        avatar: "https://picsum.photos/250/300?image=821",
        title: 'Criss Wu<span class="grey--text text--lighten-1"></span>',
        subtitle:
          "<span class='text--primary'>to Operations support</span> &mdash; Wish I could come."
      },
      {
        avatar: "https://picsum.photos/250/300?image=783",
        title: "Wang Allen",
        subtitle:
          "<span class='text--primary'>Bella</span> &mdash; Do you have Paris recommendations"
      },
      {
        header: "Yesterday"
      },
      {
        divider: true
      },
      {
        avatar: "https://picsum.photos/250/300?image=1006",
        title: "Dinner Brown",
        subtitle:
          "<span class='text--primary'>LaToya</span> &mdash; Do you want to hang out?"
      },
      {
        avatar: "https://picsum.photos/250/300?image=146",
        title: "Allen War",
        subtitle:
          "<span class='text--primary'>Nancy</span> &mdash; Do you see what time it is?"
      }
    ]
  })
};
</script>

<style>
</style>