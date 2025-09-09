<template>
    <div class="flex justify-end items-end md:justify-between lg:justify-between 
        p-5 md:px-8 md:py-5 border-b border-[#D1D5DB] bg-white sticky top-0 z-50 shadow-md h-20 md:h-auto">

        <div v-if="isMobile" @click="toggleMenu" class="w-8 h-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>menu</title>
                <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
        </div>


        <a href="/" class="hidden md:flex lg:flex items-center gap-2 cursor-pointer">
            <div class="w-5 h-5 bg-[#D96C06] rounded-full"></div>
            <h1 class="text-[18px] font-bold text-start">Muhammad Naufal Gibran</h1>
            <div class="text-[18px]">/</div>
            <div class="text-[18px]">Fullstack Developer</div>
        </a>

        <nav class="hidden md:flex lg:flex flex-row items-center">
            <ul class="flex flex-row gap-6">
                <li class="text-[#3D2B1F]">
                    <a href="/" class="hover:text-blue-600 transition">About Me</a>
                </li>
                <li>
                    <a href="/cv-gibran/resume" class="hover:text-blue-600 transition">Resume</a>
                </li>
                <li>
                    <a href="/cv-gibran/portofolio" class="hover:text-blue-600 transition">Portofolio</a>
                </li>
                <li>
                    <a href="/cv-gibran/contact-me" class="hover:text-blue-600 transition">Contact Me</a>
                </li>
            </ul>
        </nav>

        <transition name="slide-fade">
            <div v-if="showMenu"
                class="absolute top-20 left-0 w-full bg-white shadow-xl border border-gray-200 rounded-b-[8px]  z-50 md:hidden">
                <ul class="flex flex-col gap-4 text-lg font-medium text-[#3D2B1F]">
                    <li class="border-b border-[#D1D5DB] py-3 px-5">
                        <a @click="closeMenu" href="/" class="hover:text-blue-600 transition">About Me</a>
                    </li>
                    <li class="border-b border-[#D1D5DB] pb-3 px-5">
                        <a @click="closeMenu" href="/cv-gibran/resume" class="hover:text-blue-600 transition">Resume</a>
                    </li>
                    <li class="border-b border-[#D1D5DB] pb-3 px-5">
                        <a @click="closeMenu" href="/cv-gibran/portofolio"
                            class="hover:text-blue-600 transition">Portofolio</a>
                    </li>
                    <li class="px-5 pb-3">
                        <a @click="closeMenu" href="/cv-gibran/contact-me"
                            class="hover:text-blue-600 transition">Contact Me</a>
                    </li>
                </ul>
            </div>
        </transition>
    </div>

    <router-view />
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, toRaw } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Ganti layout berdasarkan meta.layout
const layoutComponent = computed(() => {
    return route.meta.layout;
});

const isMobile = ref(false);
const showMenu = ref(false);

const toggleMenu = () => {
    showMenu.value = !showMenu.value;
};

const closeMenu = () => {
    showMenu.value = false;
};

const updateTimelineSide = () => {
    if (window.innerWidth >= 960) {
        isMobile.value = false
    } else {
        isMobile.value = true
    }
};

onMounted(() => {
    updateTimelineSide();
    window.addEventListener('resize', updateTimelineSide);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateTimelineSide);
});

</script>

<style scoped>
/* Animasi floating card */
.slide-fade-enter-active {
    transition: all 0.3s ease;
}

.slide-fade-leave-active {
    transition: all 0.2s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>