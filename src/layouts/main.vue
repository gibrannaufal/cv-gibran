<style>
.text-primary {
    color: #3D2B1F
}
</style>
<template>
    <component>
        <div class="flex justify-between px-12 py-5 border-[#D1D5DB] border-b rounded-[12px] ">
            <a href="/" class="flex items-center gap-2 cursor-pointer">
                <div class="w-5 h-5 bg-[#D96C06] rounded-full"></div>
                <h1 class="text-[18px] font-bold text-start"> Muhammad Naufal Gibran</h1>
                <div class="text-[18px]">/</div>
                <div class="text-[18px]">Fullstack Developer</div>
            </a>
            <nav class="flex flex-row items-center">
                <ul class="flex flex-row gap-6">
                    <li class="text-[#3D2B1F]">
                        <a href="/" 
                            class="hover:text-blue-600 transition">About Me</a>
                    </li>
                    <li>
                        <a href="/resume"
                            class="hover:text-blue-600 transition">Resume</a>
                    </li>
                    <li>
                        <a href="/portofolio"
                            class="hover:text-blue-600 transition">Portofolio</a>
                    </li>
                    <li>
                        <a href="/contact"
                            class="hover:text-blue-600 transition">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </div>
        <router-view />
    </component>
</template>

<script setup>
import { computed, toRaw } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Ganti layout berdasarkan meta.layout
const layoutComponent = computed(() => {
    return route.meta.layout;
});
</script>