<template>
  <div class="px-12 py-4 flex justify-center items-center flex-col min-h-full gap-y-10 bg-[rgb(230,218,206)]">
    <div class="flex flex-col justify-center items-center gap-y-8 w-full">
      <div class="flex flex-row justify-center items-center gap-x-4">
        <div class="w-5 h-5 bg-[#D96C06] rounded-full"></div>
        <h1 class="text-[30px] font-semibold text-center">My Career Path</h1>
      </div>
      <div class="flex w-3/4 justify-center items-center">
        <v-timeline>
          <v-timeline-item dot-color="#D96C06" size="small" fill-dot>
            <template v-slot:opposite>
              Sep 2025 - Now
            </template>
            <div>
              <div class="flex flex-col w-full min-h-3/4 h-auto rounded-[8px] overflow-hidden">
                <div class="w-full h-1/3 p-5 flex flex-col bg-[#F5A65B] gap-y-2">
                  <h1 class="text-[18px] font-bold text-[#2D2D2D]">Nutapos</h1>
                  <p class="text-[15px] font-normal text-[#2D2D2D]">Point Of Sales Startup</p>
                </div>
                <div class="w-full h-1/3 p-5 flex flex-col bg-white gap-y-5">
                  <ul class="list-disc list-inside text-gray-700 space-y-1">
                    <li>Conduct research and development of web
                      applications using PHP and JavaScript.</li>
                    <li>Ensure the application is free from bugs. </li>
                    <li>Troubleshoot and resolve any bugs found with
                      critical thinking and precise approach </li>
                  </ul>
                </div>
              </div>
            </div>
          </v-timeline-item>
          <v-timeline-item dot-color="#D96C06" size="small" fill-dot>
            <template v-slot:opposite>
              Aug 2023 - Aug 2025
            </template>
            <div>
              <div class="flex flex-col w-full min-h-3/4 h-auto rounded-[8px] overflow-hidden">
                <div class="w-full h-1/3 p-5 flex flex-col bg-[#F5A65B] gap-y-2">
                  <h1 class="text-[18px] font-bold text-[#2D2D2D]">Venturo Pro Indonesia</h1>
                  <p class="text-[15px] font-normal text-[#2D2D2D]">Software House</p>
                </div>
                <div class="w-full h-1/3 p-5 flex flex-col bg-white gap-y-5">
                  <ul class="list-disc list-inside text-gray-700 space-y-1">
                    <li>Conduct research and development of web
                      applications using PHP and JavaScript.</li>
                    <li>Ensure the application is free from bugs. </li>
                    <li>Troubleshoot and resolve any bugs found with
                      critical thinking and precise approach </li>
                  </ul>
                </div>
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </div>
    </div>

  </div>
</template>

<script setup>
import fotoBlue from "../assets/foto-terracota.jpg";
</script>