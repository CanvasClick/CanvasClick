<template>
    <footer class="bg-gray-100 text-center py-6 text-sm text-gray-800 animate-[fadeInUp_0.3s_ease-out]">
      <p>© 2025 CanvasClick. All rights reserved.</p>
      <div class="mt-4 flex justify-center space-x-6">
        <a href="#" class="hover:text-red-950 transition">Twitter</a>
        <a href="#" class="hover:text-red-950 transition">LinkedIn</a>
        <a href="#" class="hover:text-red-950 transition">Facebook</a>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style>
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(1.5rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>