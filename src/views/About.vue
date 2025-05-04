<template>
  <section id="about" class="py-12 sm:py-16 bg-white relative overflow-hidden" ref="about">
    <!-- Subtle Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-red-50/20 to-transparent"></div>
    
    <div class="max-w-5xl mx-auto px-4 relative z-10">
      <!-- Header -->
      <div class="text-center mb-10 sm:mb-12" data-aos="zoom-in" data-aos-duration="1000">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
          Discover CanvsClick
        </h2>
        <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          We're your partner in transforming ideas into powerful digital realities.
        </p>
      </div>

      <!-- Mission Statement -->
      <div class="bg-red-50 p-6 sm:p-8 rounded-lg shadow-md mb-12" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
        <h3 class="text-xl sm:text-2xl font-semibold text-red-950 mb-4 flex items-center">
          <svg class="w-6 h-6 mr-2 text-red-950" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L10 9H3L8 14L6 21L12 17L18 21L16 14L21 9H14L12 2Z"/>
          </svg>
          Our Mission
        </h3>
        <p class="text-base sm:text-lg text-gray-600 mb-4">
          CanvsClick is dedicated to revolutionizing the digital landscape with innovative solutions in web development, automation, data insights, technical support, and social media strategies.
        </p>
        <p class="text-base sm:text-lg text-gray-600">
          We aim to empower businesses to thrive in a complex tech world, delivering value through precision and creativity.
        </p>
      </div>

      <!-- Core Values -->
      <div class="mb-12">
        <h3 class="text-xl sm:text-2xl font-semibold text-red-950 mb-6 text-center" data-aos="fade-down" data-aos-duration="1000">
          Our Core Values
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1 text-center"
               data-aos="zoom-in" data-aos-delay="100">
            <svg class="w-8 h-8 mx-auto mb-3 text-red-950" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-10h-2v6h2v-6zm0-2h-2V6h2v2z"/>
            </svg>
            <h4 class="text-lg font-medium text-gray-800 mb-2">Innovation</h4>
            <p class="text-gray-600 text-sm sm:text-base">Creating forward-thinking solutions.</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1 text-center"
               data-aos="zoom-in" data-aos-delay="200">
            <svg class="w-8 h-8 mx-auto mb-3 text-red-950" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            <h4 class="text-lg font-medium text-gray-800 mb-2">Excellence</h4>
            <p class="text-gray-600 text-sm sm:text-base">Delivering quality in every project.</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1 text-center"
               data-aos="zoom-in" data-aos-delay="300">
            <svg class="w-8 h-8 mx-auto mb-3 text-red-950" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.5 3h-5C7.57 3 6 4.57 6 6.5v11C6 19.43 7.57 21 9.5 21h5c1.93 0 3.5-1.57 3.5-3.5v-11C18 4.57 16.43 3 14.5 3zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
            </svg>
            <h4 class="text-lg font-medium text-gray-800 mb-2">Collaboration</h4>
            <p class="text-gray-600 text-sm sm:text-base">Partnering for shared success.</p>
          </div>
        </div>
      </div>

      <!-- Why Choose Us -->
      <div class="text-center">
        <h3 class="text-xl sm:text-2xl font-semibold text-red-950 mb-6" data-aos="fade-down" data-aos-duration="1000">
          Why Choose CanvsClick?
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div class="flex items-start" data-aos="fade-up" data-aos-delay="100">
            <svg class="w-6 h-6 text-red-950 mr-3 mt-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <div>
              <h4 class="text-lg font-medium text-gray-800 mb-1">Tailored Solutions</h4>
              <p class="text-gray-600 text-sm sm:text-base">Custom strategies for your needs.</p>
            </div>
          </div>
          <div class="flex items-start" data-aos="fade-up" data-aos-delay="200">
            <svg class="w-6 h-6 text-red-950 mr-3 mt-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 2.25 1.97 3.95V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
            <div>
              <h4 class="text-lg font-medium text-gray-800 mb-1">Expert Team</h4>
              <p class="text-gray-600 text-sm sm:text-base">Skilled professionals, diverse expertise.</p>
            </div>
          </div>
          <div class="flex items-start" data-aos="fade-up" data-aos-delay="300">
            <svg class="w-6 h-6 text-red-950 mr-3 mt-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            <div>
              <h4 class="text-lg font-medium text-gray-800 mb-1">Proven Results</h4>
              <p class="text-gray-600 text-sm sm:text-base">Delivering measurable success.</p>
            </div>
          </div>
        </div>
        <router-link to="/contact"
          class="relative inline-block px-6 sm:px-8 py-2 sm:py-3 bg-red-950 text-white font-medium rounded-lg overflow-hidden group"
          data-aos="zoom-in" data-aos-delay="300">
          <span
            class="absolute inset-0 bg-gradient-to-r from-red-900 to-red-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
          <span class="relative z-10 flex items-center transition-colors duration-300 group-hover:text-white">
            <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Contact Us
          </span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const about = ref(null)

// Intersection Observer to trigger AOS animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        AOS.refresh()
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.1 }
)

onMounted(() => {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    mirror: false
  })
  
  // Observe section
  observer.observe(about.value)
})

onUnmounted(() => {
  observer.disconnect()
})
</script>

<style scoped>
/* Subtle shadow for depth */
.shadow-md {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>