<template>
  <div class="px-12 py-4 flex justify-center items-center flex-col min-h-full gap-y-10 bg-[rgb(230,218,206)]">
    <div class="flex flex-col w-full h-auto rounded-[8px] overflow-hidden">
      <div class="w-full p-5 flex flex-col gap-y-2 text-center">
        <div class="flex flex-row justify-center items-center gap-x-4">
          <div class="w-5 h-5 bg-[#D96C06] rounded-full"></div>
          <h1 class="text-[30px] font-semibold text-center">My Project</h1>
        </div>
        <p class="text-[15px] font-normal text-[#2D2D2D]">Ongoing and previous projects</p>
      </div>

      <div class="flex flex-col p-5 gap-y-5 flex-1">
        <v-carousel :continuous="true" :show-arrows="true" delimiter-icon="mdi-circle" height="600"
          hide-delimiter-background>
          <template v-slot:prev="{ props }">
            <button v-bind="props" class="!bg-white hover:!bg-white rounded-full p-[12px] ">
              <v-icon>mdi-chevron-left</v-icon>
            </button>
          </template>

          <template v-slot:next="{ props }">
            <button v-bind="props" class="!bg-white hover:!bg-white  rounded-full p-[12px]">
              <v-icon>mdi-chevron-right</v-icon>
            </button>
          </template>
          <v-carousel-item v-for="(group, index) in chunkedSlides" :key="index">
            <!-- Grid 3x3 -->
            <div class="grid grid-cols-3 h-full gap-6 justify-items-center items-center">
              <div v-for="(skill, i) in group" :key="i"
                class="w-3/4 h-52 flex flex-col items-center justify-center rounded-lg p-4 overflow-hidden transition-transform duration-300">
                <p class="mt-2 text-[18px] text-gray-700 font-normal mb-4">{{ skill.name }}</p>
                <img :src="skill.icon" :alt="skill.name" class="w-full h-full object-cover" />
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed } from "vue";
import Masterprima1 from "../assets/portofolio/masterprima/masterprima1.png";
import Masterprima2 from "../assets/portofolio/masterprima/masterprima2.png";
import Masterprima3 from "../assets/portofolio/masterprima/masterprima3.png";

import Hayyu1 from "../assets/portofolio/hayyu/hayyu1.png";
import Hayyu2 from "../assets/portofolio/hayyu/hayyu2.png";
import Hayyu3 from "../assets/portofolio/hayyu/hayyu3.png";


const slides = [
  { name: "Masterprima", icon: Masterprima1 },
  { name: "Masterprima", icon: Masterprima2 },
  { name: "Masterprima", icon: Masterprima3 },
  { name: "Hayyu", icon: Hayyu1 },
  { name: "Hayyu", icon: Hayyu2 },
  { name: "Hayyu", icon: Hayyu3 },
];

const chunkedSlides = computed(() => {
  const chunkSize = 9;
  const result = [];
  for (let i = 0; i < slides.length; i += chunkSize) {
    result.push(slides.slice(i, i + chunkSize));
  }
  return result;
});
</script>
