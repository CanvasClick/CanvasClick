<template>
  <div>
    <!-- Hero Section with Carousel -->
    <section class="relative bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden" ref="hero">
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
      <div class="max-w-7xl mx-auto px-4 py-16 sm:py-20 text-center relative z-10" data-aos="fade-up" data-aos-duration="1000">
        <!-- Carousel -->
        <div class="relative">
          <div class="overflow-hidden">
            <div class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <!-- Slide 1 -->
              <div class="min-w-full" data-aos="fade-right" data-aos-delay="200">
                <h2
                  class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 [text-shadow:_0_2px_4px_rgba(0,0,0,0.1)]">
                  Design the Future</h2>
                <p class="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Your Partner in Web Development, Automation, Data Processing, Tech Assistance and Social Media
                  Advertising</p>
              </div>
              <!-- Slide 2 -->
              <div class="min-w-full" data-aos="fade-right" data-aos-delay="200">
                <h2
                  class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 [text-shadow:_0_2px_4px_rgba(0,0,0,0.1)]">
                  Innovate with Us</h2>
                <p class="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Transform your business with cutting-edge web solutions and automation.</p>
              </div>
              <!-- Slide 3 -->
              <div class="min-w-full" data-aos="fade-right" data-aos-delay="200">
                <h2
                  class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 [text-shadow:_0_2px_4px_rgba(0,0,0,0.1)]">
                  Grow Your Brand</h2>
                <p class="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                  Reach your audience with targeted social media advertising.</p>
              </div>
            </div>
          </div>
          <!-- Navigation Dots -->
          <div class="flex justify-center mt-4" data-aos="fade-up" data-aos-delay="400">
            <button v-for="(slide, index) in 3" :key="index"
              class="w-3 h-3 mx-1 rounded-full transition-colors duration-300"
              :class="{ 'bg-red-950': currentSlide === index, 'bg-gray-400': currentSlide !== index }"
              @click="goToSlide(index)"></button>
          </div>
        </div>
        <!-- Call to Action Button -->
        <router-link to="/contact"
          class="relative inline-block px-6 sm:px-8 py-2 sm:py-3 bg-red-950 text-white font-medium rounded-lg overflow-hidden group mt-8"
          @click.prevent="scrollTo('contact')" data-aos="zoom-in" data-aos-delay="600">
          <span
            class="absolute inset-0 bg-red-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
          <span class="relative z-10 flex items-center transition-colors duration-300 group-hover:text-white">
            <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Get Started
          </span>
        </router-link>
      </div>
    </section>

    <!-- Services Overview -->
    <section id="services" class="py-12 sm:py-16 bg-white" ref="services" data-aos="fade-up" data-aos-duration="1000">
      <div class="max-w-6xl mx-auto px-4">
        <h3 class="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12" data-aos="fade-down">
          What We Do
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div
            class="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            data-aos="fade-up" data-aos-delay="100">
            <svg class="w-8 h-8 text-red-950 mb-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 3v3H4v15h16V6h-3V3H7zm8 3h3v3h-3V6zM9 6h3v3H9V6zm-2 9H4v-3h3v3zm0-5H4v-3h3v3zm5 5h-3v-3h3v3zm0-5h-3v-3h3v3zm5 5h-3v-3h3v3zm0-5h-3v-3h3v3z"/>
            </svg>
            <h4 class="text-lg sm:text-xl font-semibold text-red-950 mb-2">Web Development</h4>
            <p class="text-gray-700 text-sm sm:text-base">Custom, responsive websites and apps.</p>
          </div>
          <div
            class="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            data-aos="fade-up" data-aos-delay="200">
            <svg class="w-8 h-8 text-red-950 mb-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-10h-2v6h2v-6zm0-2h-2V6h2v2z"/>
            </svg>
            <h4 class="text-lg sm:text-xl font-semibold text-red-950 mb-2">Web Automation</h4>
            <p class="text-gray-700 text-sm sm:text-base">Streamlined workflows for efficiency.</p>
          </div>
          <div
            class="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            data-aos="fade-up" data-aos-delay="300">
            <svg class="w-8 h-8 text-red-950 mb-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
            <h4 class="text-lg sm:text-xl font-semibold text-red-950 mb-2">Data Processing</h4>
            <p class="text-gray-700 text-sm sm:text-base">Actionable insights from data.</p>
          </div>
          <div
            class="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            data-aos="fade-up" data-aos-delay="400">
            <svg class="w-8 h-8 text-red-950 mb-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm0 15l3-3.86 2.14 2.58 3-3.87L18 19H6z"/>
            </svg>
            <h4 class="text-lg sm:text-xl font-semibold text-red-950 mb-2">Tech Assistance</h4>
            <p class="text-gray-700 text-sm sm:text-base">Expert support for your systems.</p>
          </div>
          <div
            class="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            data-aos="fade-up" data-aos-delay="500">
            <svg class="w-8 h-8 text-red-950 mb-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 19h-2v-2h2v2zm4-4h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V7h6v2z"/>
            </svg>
            <h4 class="text-lg sm:text-xl font-semibold text-red-950 mb-2">Social Media Advertising</h4>
            <p class="text-gray-700 text-sm sm:text-base">Targeted ads for brand growth.</p>
          </div>
          <div
            class="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            data-aos="fade-up" data-aos-delay="600">
            <svg class="w-8 h-8 text-red-950 mb-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            <h4 class="text-lg sm:text-xl font-semibold text-red-950 mb-2">Cloud Solutions</h4>
            <p class="text-gray-700 text-sm sm:text-base">Scalable infrastructure for your business.</p>
          </div>
        </div>
        <div class="text-center mt-8" data-aos="zoom-in" data-aos-delay="700">
          <router-link to="/services"
            class="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-red-950 text-white font-medium rounded hover:bg-red-900 transition transform hover:scale-105">
            Explore Our Services
          </router-link>
        </div>
      </div>
    </section>

    <!-- Enhanced About Us Section -->
    <section id="about" class="py-12 sm:py-16 bg-gray-50" ref="about" data-aos="fade-up" data-aos-duration="1000">
      <div class="max-w-6xl mx-auto px-4">
        <h3 class="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12" data-aos="fade-down">
          Who We Are
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <!-- Mission Statement -->
          <div data-aos="fade-right" data-aos-delay="100">
            <h4 class="text-xl sm:text-2xl font-semibold text-red-950 mb-4 flex items-center">
              <svg class="w-6 h-6 mr-2 text-red-950" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L10 9H3L8 14L6 21L12 17L18 21L16 14L21 9H14L12 2Z"/>
              </svg>
              Our Mission
            </h4>
            <p class="text-base sm:text-lg text-gray-600 mb-6">
              We empower businesses to thrive in the digital age by delivering innovative, reliable, and tailored technology solutions. Our commitment to excellence drives us to transform ideas into reality, fostering growth and success for our clients.
            </p>
            <router-link to="/about"
              class="relative inline-block px-6 sm:px-8 py-2 sm:py-3 bg-red-950 text-white font-medium rounded-lg overflow-hidden group"
              data-aos="zoom-in" data-aos-delay="300">
              <span
                class="absolute inset-0 bg-red-900 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
              <span class="relative z-10 transition-colors duration-300 group-hover:text-white">Learn More</span>
            </router-link>
          </div>
          <!-- Core Values -->
          <div data-aos="fade-left" data-aos-delay="100">
            <h4 class="text-xl sm:text-2xl font-semibold text-red-950 mb-4 flex items-center">
              <svg class="w-6 h-6 mr-2 text-red-950" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
              </svg>
              Our Core Values
            </h4>
            <ul class="space-y-4">
              <li class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
                  data-aos="fade-up" data-aos-delay="200">
                <div class="flex items-center">
                  <svg class="w-6 h-6 text-red-950 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-10h-2v6h2v-6zm0-2h-2V6h2v2z"/>
                  </svg>
                  <div>
                    <h5 class="text-lg font-medium text-gray-800">Innovation</h5>
                    <p class="text-gray-600 text-sm sm:text-base">Pushing boundaries with creative solutions.</p>
                  </div>
                </div>
              </li>
              <li class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
                  data-aos="fade-up" data-aos-delay="300">
                <div class="flex items-center">
                  <svg class="w-6 h-6 text-red-950 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                  <div>
                    <h5 class="text-lg font-medium text-gray-800">Integrity</h5>
                    <p class="text-gray-600 text-sm sm:text-base">Building trust through transparency.</p>
                  </div>
                </div>
              </li>
              <li class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
                  data-aos="fade-up" data-aos-delay="400">
                <div class="flex items-center">
                  <svg class="w-6 h-6 text-red-950 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.5 3h-5C7.57 3 6 4.57 6 6.5v11C6 19.43 7.57 21 9.5 21h5c1.93 0 3.5-1.57 3.5-3.5v-11C18 4.57 16.43 3 14.5 3zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                  </svg>
                  <div>
                    <h5 class="text-lg font-medium text-gray-800">Collaboration</h5>
                    <p class="text-gray-600 text-sm sm:text-base">Partnering for shared success.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Process Section -->
    <section id="process" class="py-12 sm:py-16 bg-white" ref="process" data-aos="fade-up" data-aos-duration="1000">
      <div class="max-w-6xl mx-auto px-4">
        <h3 class="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12" data-aos="fade-down">
          Our Process
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div class="text-center" data-aos="fade-up" data-aos-delay="100">
            <div class="w-12 h-12 bg-red-950 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h4 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Discovery</h4>
            <p class="text-gray-700 text-sm sm:text-base">We understand your needs and goals.</p>
          </div>
          <div class="text-center" data-aos="fade-up" data-aos-delay="200">
            <div class="w-12 h-12 bg-red-950 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h4 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Planning</h4>
            <p class="text-gray-700 text-sm sm:text-base">We create a tailored strategy.</p>
          </div>
          <div class="text-center" data-aos="fade-up" data-aos-delay="300">
            <div class="w-12 h-12 bg-red-950 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h4 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Execution</h4>
            <p class="text-gray-700 text-sm sm:text-base">We build and implement solutions.</p>
          </div>
          <div class="text-center" data-aos="fade-up" data-aos-delay="400">
            <div class="w-12 h-12 bg-red-950 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h4 class="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Optimization</h4>
            <p class="text-gray-700 text-sm sm:text-base">We refine and enhance results.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const hero = ref(null)
const services = ref(null)
const about = ref(null)
const process = ref(null)
const currentSlide = ref(0)
const totalSlides = 3

// Auto-slide functionality
const autoSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides
}

const goToSlide = (index) => {
  currentSlide.value = index
}

let slideInterval = null

onMounted(() => {
  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    mirror: false
  })

  // Start auto-slide
  slideInterval = setInterval(autoSlide, 5000)
})

onUnmounted(() => {
  // Clean up interval
  if (slideInterval) clearInterval(slideInterval)
})

const scrollTo = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style>
.bg-pattern {
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>