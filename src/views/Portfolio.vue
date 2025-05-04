<template>
  <section id="portfolio" class="py-12 sm:py-16 bg-gray-50 relative" ref="portfolio">
    <!-- Subtle Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-red-50/10 to-transparent"></div>

    <div class="max-w-6xl mx-auto px-4 relative z-10">
      <!-- Section Heading -->
      <div class="text-center mb-10 sm:mb-12" data-aos="fade-down" data-aos-duration="1000">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">Our Work</h2>
        <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our diverse portfolio of projects that have driven innovation and growth for clients across
          industries.
        </p>
      </div>

      <!-- Category Filters -->
      <div class="flex flex-wrap justify-center mb-8 gap-2 sm:gap-4" data-aos="fade-up" data-aos-duration="1000"
        data-aos-delay="100">
        <button v-for="category in categories" :key="category" @click="selectedCategory = category"
          class="flex items-center px-4 py-2 text-sm sm:text-base font-medium rounded-lg transition" :class="{
            'bg-red-950 text-white': selectedCategory === category,
            'bg-gray-200 text-gray-800 hover:bg-gray-300': selectedCategory !== category
          }">
          <svg class="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3h18v2H3V3zm0 4h12v2H3V7zm0 4h18v2H3v-2zm0 4h12v2H3v-2zm0 4h18v2H3v-2z" />
          </svg>
          {{ category }}
        </button>
      </div>

      <!-- Portfolio Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        <div v-for="(project, index) in filteredProjects" :key="project.title"
          class="bg-white rounded-lg shadow-md overflow-hidden border border-transparent hover:border-red-950/20 hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
          data-aos="fade-up" :data-aos-duration="1000" :data-aos-delay="100 + index * 100">
          <img :src="project.image" :alt="project.title" class="w-full max-w-full h-auto h-40 sm:h-48 object-cover"
            data-aos="zoom-in" :data-aos-delay="200 + index * 100" />
          <div class="p-4 sm:p-6">
            <div class="flex items-center mb-3">
              <svg class="w-6 h-6 text-red-950 mr-2" viewBox="0 0 24 24" fill="currentColor" v-html="project.icon" />
              <h4 class="text-lg sm:text-xl font-semibold text-red-950">{{ project.title }}</h4>
            </div>
            <span class="inline-block px-2 py-1 text-xs font-medium text-red-950 bg-red-100 rounded-full mb-3">
              {{ project.category }}
            </span>
            <p class="text-gray-600 text-sm sm:text-base">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center mt-12" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="700">
        <router-link to="/contact"
          class="relative inline-block px-6 sm:px-8 py-2 sm:py-3 bg-red-950 text-white font-medium rounded-lg overflow-hidden group">
          <span
            class="absolute inset-0 bg-gradient-to-r from-red-900 to-red-800 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
          <span class="relative z-10 flex items-center transition-colors duration-300 group-hover:text-white">
            <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Contact Us
          </span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const portfolio = ref(null)
const selectedCategory = ref('All')

const categories = ['All', 'Web Development', 'Automation', 'Marketing', 'Data Analytics', 'Cloud Solutions']

const projects = ref([
  {
    title: 'E-Commerce Site',
    category: 'Web Development',
    description: 'Developed a responsive online store using Shopify and React, featuring secure Stripe payments and a 30% increase in conversion rates for a retail client. The platform supports 10,000+ monthly visitors with seamless UX.',
    image: 'src/assets/image/ecom.webp',
    icon: '<path d="M7 3v3H4v15h16V6h-3V3H7zm8 3h3v3h-3V6zM9 6h3v3H9V6zm-2 9H4v-3h3v3zm0-5H4v-3h3v3zm5 5h-3v-3h3v3zm0-5h-3v-3h3v3zm5 5h-3v-3h3v3zm0-5h-3v-3h3v3z"/>'
  },
  {
    title: 'Automation Dashboard',
    category: 'Automation',
    description: 'Built a custom dashboard with Python and Django to automate workflows, reducing manual tasks by 40% for a logistics company. Integrated real-time monitoring and API connectivity for scalability.',
    image: 'src/assets/image/auto.jpg',
    icon: '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>'
  },
  {
    title: 'Social Media Campaign',
    category: 'Marketing',
    description: 'Executed a targeted Instagram campaign with compelling visuals, achieving a 200% ROI and 15K new followers for a fashion brand. Leveraged A/B testing and analytics for optimized ad performance.',
    image: 'src/assets/image/social.jpg',
    icon: '<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 19h-2v-2h2v2zm4-4h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V7h6v2z"/>'
  },
  {
    title: 'Data Analytics Platform',
    category: 'Data Analytics',
    description: 'Developed a Power BI-based analytics platform for a financial client, enabling real-time insights and a 25% improvement in decision-making efficiency. Integrated with SQL databases for robust data processing.',
    image: 'src/assets/image/analytic.webp',
    icon: '<path d="M4 4v16h16V4H4zm14 12h-4v-4h4v4zm0-6h-4V6h4v4zM8 16H6v-4h2v4zm0-6H6V6h2v4zm4 6h-2v-4h2v4zm0-6h-2V6h2v4z"/>'
  },
  {
    title: 'Cloud Migration',
    category: 'Cloud Solutions',
    description: 'Migrated a SaaS application to AWS, improving scalability and reducing costs by 20% for a tech startup. Implemented serverless architecture and automated CI/CD pipelines for seamless updates.',
    image: 'src/assets/image/old/cloud1.png',
    icon: '<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/>'
  },
  {
    title: 'Tech Support Portal',
    category: 'Automation',
    description: 'Created a tech support portal with Vue.js and Firebase, streamlining ticket management and reducing response times by 35% for an IT service provider. Included live chat and analytics features.',
    image: 'src/assets/image/support.jpg',
    icon: '<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm0 15l3-3.86 2.14 2.58 3-3.87L18 19H6z"/>'
  }
])

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') return projects.value
  return projects.value.filter(project => project.category === selectedCategory.value)
})

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
  observer.observe(portfolio.value)
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