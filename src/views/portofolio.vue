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
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div v-for="(skill, i) in slides" :key="i"
            class="flex flex-col items-center bg-white rounded-xl p-4 shadow-sm">
            <img :src="skill.icon" :alt="skill.name" class="w-full h-64 object-contain rounded-lg" />
            <p class="mt-3 text-[18px] text-gray-700 font-normal text-center">
              {{ skill.name }}
            </p>
          </div>
        </div>
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

import nuta1 from "../assets/portofolio/mynutapos/nuta1.png";
import nuta2 from "../assets/portofolio/mynutapos/nuta2.png";
import nuta3 from "../assets/portofolio/mynutapos/nuta3.png";


const slides = [
  { name: "My Nutapos", icon: nuta1 },
  { name: "My Nutapos", icon: nuta2 },
  { name: "My Nutapos", icon: nuta3 },

  { name: "Hayyu", icon: Hayyu1 },
  { name: "Hayyu", icon: Hayyu2 },
  { name: "Hayyu", icon: Hayyu3 },

  { name: "Masterprima", icon: Masterprima1 },
  { name: "Masterprima", icon: Masterprima2 },
  { name: "Masterprima", icon: Masterprima3 },
];

</script>
