<template>
   <div class="px-12 py-4 flex justify-center items-center flex-col min-h-full gap-y-10 bg-[rgb(230,218,206)]">
      <div class="flex justify-center items-start w-full h-dvh">
         <div class="flex w-3xl min-h-3/4 h-auto rounded-[8px] overflow-hidden">
            <div class="w-1/3 bg-[#F5A65B] flex flex-col justify-center items-center p-5 gap-y-5">
               <div class="w-32 h-32 rounded-full overflow-hidden relative">
                  <img :src="fotoBlue" alt="foto-profile" class="w-full h-full object-cover object-top" />
               </div>
               <h2 class="text-[25px] font-semibold text-[#2D2D2D] text-center">Muhammad Naufal Gibran</h2>
               <h3 class="text-[18px] font-normal text-[#2D2D2D]">Fullstack Developer</h3>
            </div>

            <div class="w-2/3 p-5 flex flex-col bg-white">
               <h1 class="text-[50px] font-bold text-[#2D2D2D] mb-2">Hello!</h1>
               <p class="text-[30px] font-normal text-[#2D2D2D] mb-8">Here's who I am & what I do</p>

               <p class="text-[15px] font-normal mb-4">
                  Hi! I'm Naufal, a Fullstack Programmer with 2 years of experience in building web
                  applications. I'm passionate about creating user-friendly, scalable, and high-performance products
                  that
                  help businesses reach their full potential.
               </p>

               <!-- <v-icon class="text-dark"
                     start>mdi-download</v-icon> -->
               <div class="flex flex-row gap-x-4">
                  <button class="rounded-[8px] border border-[#E07A5F] w-auto px-[12px] py-[8px] bg-white">Download
                     CV</button>
                  <button class="rounded-[8px] bg-[#F4A261] w-auto px-[12px] py-[8px]">Contact Me</button>
               </div>
            </div>
         </div>
      </div>
      <div class="flex flex-col justify-center items-center gap-y-8 w-full">
         <div class="flex flex-row justify-center items-center gap-x-4">
            <div class="w-5 h-5 bg-[#D96C06] rounded-full"></div>
            <h1 class="text-[30px] font-semibold text-center">Skills</h1>
         </div>
         <div class="flex w-3/4 justify-center items-stretch gap-x-8">
            <!-- Hard Skills Card -->
            <div class="flex flex-col w-full rounded-[8px] overflow-hidden bg-white">
               <div class="w-full p-5 flex flex-col bg-[#F5A65B] gap-y-2 text-center">
                  <h1 class="text-[18px] font-bold text-[#2D2D2D]">Hard Skills</h1>
                  <p class="text-[15px] font-normal text-[#2D2D2D]">Programming Skills</p>
               </div>
               <div class="flex flex-col p-5 bg-white gap-y-5 flex-1">
                  <v-carousel :continuous="true" :show-arrows="false" delimiter-icon="mdi-circle" height="180"
                     hide-delimiter-background :cycle="true" :interval="3000">
                     <v-carousel-item v-for="(group, index) in chunkedSlides" :key="index">
                        <div class="grid grid-cols-3 gap-3 justify-items-center items-center">
                           <div v-for="(skill, i) in group" :key="i" class="flex flex-col items-center justify-center">
                              <img :src="skill.icon" :alt="skill.name" class="h-16 w-auto object-contain" />
                              <p class="mt-2 text-sm text-gray-700 font-medium">{{ skill.name }}</p>
                           </div>
                        </div>
                     </v-carousel-item>
                  </v-carousel>
               </div>
            </div>

            <!-- Soft Skills Card -->
            <div class="flex flex-col w-full rounded-[8px] overflow-hidden bg-white">
               <div class="w-full p-5 flex flex-col bg-[#F5A65B] gap-y-2 text-center">
                  <h1 class="text-[18px] font-bold text-[#2D2D2D]">Soft Skills</h1>
                  <p class="text-[15px] font-normal text-[#2D2D2D]">Beside Programming Skills</p>
               </div>
               <div class="flex flex-col p-5 bg-white gap-y-5 flex-1">
                  <ul class="list-disc list-inside text-gray-700 space-y-1">
                     <li>SCRUM/AGILE Metodology</li>
                     <li>Beta Testing</li>
                     <li>Analytic Thinking</li>
                     <li>Problem Solving</li>
                     <li>Fast Learner</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      <div class="flex flex-col justify-center items-center gap-y-8 w-full">
         <div class="flex flex-row justify-center items-center gap-x-4">
            <div class="w-5 h-5 bg-[#D96C06] rounded-full"></div>
            <h1 class="text-[30px] font-semibold text-center">Education</h1>
         </div>
         <div class="flex w-3/4 justify-center items-center">
            <v-timeline>
               <v-timeline-item dot-color="#D96C06" size="small" fill-dot>
                  <template v-slot:opposite>
                     2020-2024
                  </template>
                  <div>
                     <div class="flex flex-col w-full min-h-3/4 h-auto rounded-[8px] overflow-hidden">
                        <div class="w-full h-1/3 p-5 flex flex-col bg-[#F5A65B] gap-y-2">
                           <h1 class="text-[18px] font-bold text-[#2D2D2D]">STIKI Malang </h1>
                           <p class="text-[15px] font-normal text-[#2D2D2D]">College Student Information System</p>
                        </div>
                        <div class="w-full h-1/3 p-5 flex flex-col bg-white gap-y-5">
                           <ul class="list-disc list-inside text-gray-700 space-y-1">
                              <li>Studying Supply Chain Management</li>
                              <li>Studying Enterprise Resource Planning</li>
                              <li>Studying Managamenet (risk management , human resource and IT Service Management)
                              </li>
                              <li>Studying basic skills of algorithm using c++</li>
                              <li>Studying basic skills of database Mysql</li>
                              <li>Studying basic skills of web programming</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </v-timeline-item>
               <v-timeline-item dot-color="#D96C06" size="small" fill-dot>
                  <template v-slot:opposite>
                     2017-2020
                  </template>
                  <div>
                     <div class="flex flex-col w-full min-h-3/4 h-auto rounded-[8px] overflow-hidden">
                        <div class="w-full h-1/3 p-5 flex flex-col bg-[#F5A65B] gap-y-2">
                           <h1 class="text-[18px] font-bold text-[#2D2D2D]">SMAN 10 MALANG </h1>
                           <p class="text-[15px] font-normal text-[#2D2D2D]">Senior high School Student Social</p>
                        </div>
                        <div class="w-full h-1/3 p-5 flex flex-col bg-white gap-y-5">
                           <ul class="list-disc list-inside text-gray-700 space-y-1">
                              <li>Studying basic Sociology</li>
                              <li>Studying basic economy macro and micro </li>
                              <li>Studying basic accounting </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </v-timeline-item>
            </v-timeline>
         </div>
      </div>
      <div class="flex flex-col justify-center items-center gap-y-8 w-full">
         <div class="flex flex-row justify-center items-center gap-x-4">
            <div class="w-5 h-5 bg-[#D96C06] rounded-full"></div>
            <h1 class="text-[30px] font-semibold text-center">Certification</h1>
         </div>
         <div class="flex w-3/4 justify-center items-stretch gap-x-8">
            <!-- Hard Skills Card -->
            <div class="flex flex-col w-full rounded-[8px] overflow-hidden bg-white">
               <div class="w-full p-5 flex flex-col bg-[#F5A65B] gap-y-2 text-center">
                  <h1 class="text-[18px] font-bold text-[#2D2D2D]">BNSP </h1>
                  <p class="text-[15px] font-normal text-[#2D2D2D]">Sertifikat kompetensi BNSP “Software
                     Development Web Developer”</p>
               </div>
               <div class="flex flex-col p-5 justify-center items-center bg-white gap-y-5 flex-1">
                  <div class="flex w-3/4 h-auto justify-items-center items-center relative overflow-hidden">
                     <img :src="webCertify" alt="Sertifikat Web" class="w-full h-full object-contain" />
                  </div>

               </div>
            </div>

            <!-- Soft Skills Card -->
            <div class="flex flex-col w-full rounded-[8px] overflow-hidden bg-white">
               <div class="w-full p-5 flex flex-col bg-[#F5A65B] gap-y-2 text-center">
                  <h1 class="text-[18px] font-bold text-[#2D2D2D]">BNSP</h1>
                  <p class="text-[15px] font-normal text-[#2D2D2D]">Sertifikat kompetensi BNSP “Software
                     Development Pemrogram Basis Data”</p>
               </div>
               <div class="flex justify-center items-center p-5 bg-white gap-y-5 flex-1">
                  <div class="flex w-3/4 h-auto justify-items-center items-center relative overflow-hidden">
                     <img :src="databaseCertify" alt="Basis Data" class="w-full h-full object-contain" />
                  </div>
               </div>
            </div>
         </div>

      </div>

   </div>
</template>

<script setup>
import { computed } from "vue";
import fotoBlue from "../assets/foto-terracota.jpg";
import phpLogo from "../assets/php_logo.png";
import javascriptLogo from "../assets/javascript_logo.jpeg";
import laravelLogo from "../assets/laravel_logo.png";
import vueLogo from "../assets/vue_logo.png";
import angularLogo from "../assets/angular_logo.png";
import nextLogo from "../assets/next_logo.png";
import MysqlLogo from "../assets/mysql_logo.png";
import mariadbLogo from "../assets/mariadb_logo.png";
import mongoDbLogo from "../assets/mongodb_logo.png";
import redisLogo from "../assets/redis_logo.png";
import bootstrapLogo from "../assets/bootstrap_logo.png";
import tailwindLogo from "../assets/tailwind_logo.png";
import materialLogo from "../assets/material_logo.png";
import pythonLogo from "../assets/python_logo.png";
import golangLogo from "../assets/golang_logo.png";
import webCertify from "../assets/sertifikat_web.png";
import databaseCertify from "../assets/sertifikat_database.jpeg";

const slides = [
   { name: "PHP", icon: phpLogo },
   { name: "Javascript", icon: javascriptLogo },
   { name: "Laravel", icon: laravelLogo },
   { name: "Angular", icon: angularLogo },
   { name: "Vue", icon: vueLogo },
   { name: "Next", icon: nextLogo },
   { name: "Mysql", icon: MysqlLogo },
   { name: "MariaDb", icon: mariadbLogo },
   { name: "MongoDb", icon: mongoDbLogo },
   { name: "Redis", icon: redisLogo },
   { name: "Bootstrap", icon: bootstrapLogo },
   { name: "Tailwind", icon: tailwindLogo },
   { name: "MaterialUi", icon: materialLogo },
   { name: "Python", icon: pythonLogo },
   { name: "Golang", icon: golangLogo },
]

const chunkedSlides = computed(() => {
   const chunkSize = 3
   const result = []
   for (let i = 0; i < slides.length; i += chunkSize) {
      result.push(slides.slice(i, i + chunkSize))
   }
   return result
})
</script>