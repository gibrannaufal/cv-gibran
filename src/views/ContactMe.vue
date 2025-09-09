<template>
  <div class="px-12 py-10 flex justify-center items-center flex-col min-h-screen gap-y-10 bg-[rgb(230,218,206)]">
    <div class="flex flex-col w-full h-auto rounded-[8px] overflow-hidden">
      <div class="w-full p-5 flex flex-col gap-y-2 text-center">
        <div class="flex flex-row justify-center items-center gap-x-4">
          <div class="w-5 h-5 bg-[#D96C06] rounded-full"></div>
          <h1 class="text-[30px] font-semibold text-center">Contact Me</h1>
        </div>
        <p class="text-[15px] font-normal text-[#2D2D2D]">You can reaching me with</p>
      </div>

      <div class="flex flex-col p-5 gap-y-5 flex-1">
        <div class="flex items-center bg-white rounded-xl shadow-md p-4 gap-4">
          <v-icon size="32" class="text-green-500">mdi-whatsapp</v-icon>

          <input v-model="whatsappNumber" readonly @click="copyToClipboard(whatsappNumber)"
            class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none cursor-pointer" />

          <button class="px-4 py-2 rounded-lg border border-[#D1D5DB] text-[#2D2D2D]" @click="openLink('wa')">
            Chat
          </button>
        </div>
        <div class="flex items-center bg-white rounded-xl shadow-md p-4 gap-4">
          <v-icon size="32" class="text-blue-500">mdi-email</v-icon>
          <input v-model="emailAddress" readonly @click="copyToClipboard(emailAddress)"
            class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none cursor-pointer" />

          <button class="px-4 py-2 rounded-lg border border-[#D1D5DB] text-[#2D2D2D]" @click="openLink('gmail')">
            Gmail
          </button>
        </div>
        <div class="flex items-center bg-white rounded-xl shadow-md p-4 gap-4">
          <v-icon size="32" class="text-gray-800">mdi-cog</v-icon>
          <input v-model="githubAddress" readonly @click="copyToClipboard(githubAddress)"
            class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none cursor-pointer" />

          <button class="px-4 py-2 rounded-lg border border-[#D1D5DB] text-[#2D2D2D]" @click="openLink('github')">
            Github
          </button>
        </div>
        <div class="flex items-center bg-white rounded-xl shadow-md p-4 gap-4">
          <v-icon size="32" class="text-gray-800">mdi-cog</v-icon>
          <input v-model="gitlabAddress" readonly @click="copyToClipboard(gitlabAddress)"
            class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none cursor-pointer" />
          <button class="px-4 py-2 rounded-lg border border-[#D1D5DB] text-[#2D2D2D]" @click="openLink('gitlab')">
            Gitlab
          </button>
        </div>
      </div>
    </div>

    <!-- Notifikasi Copy -->
    <transition name="fade">
      <div v-if="copied" class="fixed bottom-5 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md">
        Copied to clipboard!
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useDisplay } from "vuetify";

const whatsappNumber = ref("+6281334102384");
const emailAddress = ref("naufalgibran961@gmail.com");
const githubAddress = ref("https://github.com/gibrannaufal");
const gitlabAddress = ref("https://gitlab.com/naufalgibran961");
const copied = ref(false);

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  copied.value = true;
  setTimeout(() => (copied.value = false), 1500);
};

const openLink = (type) => {
  switch (type) {
    case 'wa':
      const phone = whatsappNumber.value.replace(/\D/g, "");
      window.open(`https://wa.me/${phone}`, "_blank");
      break;
    case 'gmail':
      window.open(`mailto:${emailAddress.value}`, "_blank");
      break;
    case 'github':
      window.open(`${githubAddress.value}`, "_blank");
      break;
    case 'gitlab':
      window.open(`${gitlabAddress.value}`, "_blank");
      break;

    default:
      break;
  }

};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
