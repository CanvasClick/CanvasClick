<template>
  <header class="bg-white border-b shadow-sm sticky top-0 z-50 animate-[fadeInDown_0.3s_ease-out]">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <router-link to="/" class="flex items-center space-x-2">
        <img src="@/assets/image/logo.png" alt="CanvasClick" class="h-12" />
        <h1 class="text-2xl font-bold text-red-950">CanvasClick</h1>
      </router-link>
      <nav class="hidden md:flex space-x-6 text-sm text-gray-800">
        <router-link to="/" class="hover:text-red-950 transition">Home</router-link>
        <router-link to="/about" class="hover:text-red-950 transition">About</router-link>
        <router-link to="/services" class="hover:text-red-950 transition">Services</router-link>
        <router-link to="/portfolio" class="hover:text-red-950 transition">Portfolio</router-link>
        <router-link to="/contact" class="hover:text-red-950 transition">Contact</router-link>
      </nav>
      <button class="md:hidden text-gray-800" @click="toggleMenu">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div v-if="menuOpen" class="md:hidden bg-white border-t px-4 py-2">
      <nav class="flex flex-col space-y-2 text-sm text-gray-800">
        <router-link to="/" class="hover:text-red-950 transition" @click="toggleMenu">Home</router-link>
        <router-link to="/about" class="hover:text-red-950 transition" @click="toggleMenu">About</router-link>
        <router-link to="/services" class="hover:text-red-950 transition" @click="toggleMenu">Services</router-link>
        <router-link to="/portfolio" class="hover:text-red-950 transition" @click="toggleMenu">Portfolio</router-link>
        <router-link to="/contact" class="hover:text-red-950 transition" @click="toggleMenu">Contact</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style>
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-1rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>