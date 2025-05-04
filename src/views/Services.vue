<template>
  <section id="services" class="py-12 sm:py-16 bg-white relative" ref="services">
    <!-- Subtle Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-red-50/10 to-transparent"></div>

    <div class="max-w-6xl mx-auto px-4 relative z-10">
      <!-- Section Heading -->
      <div class="text-center mb-10 sm:mb-12" data-aos="fade-down" data-aos-duration="1000">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">Our Services</h2>
        <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Unlock your business potential with our comprehensive digital solutions tailored to your unique needs.
        </p>
      </div>

      <!-- Services List -->
      <div class="space-y-12">
        <!-- Web Development -->
        <div
          class="flex flex-col md:flex-row items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
          <div class="md:w-1/2 p-4 sm:p-6">
            <div class="flex items-center mb-3">
              <svg class="w-8 h-8 text-red-950 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M7 3v3H4v15h16V6h-3V3H7zm8 3h3v3h-3V6zM9 6h3v3H9V6zm-2 9H4v-3h3v3zm0-5H4v-3h3v3zm5 5h-3v-3h3v3zm0-5h-3v-3h3v3zm5 5h-3v-3h3v3zm0-5h-3v-3h3v3z" />
              </svg>
              <h3 class="text-lg sm:text-xl font-semibold text-red-950">Web Development</h3>
            </div>
            <p class="text-gray-700 text-sm sm:text-base font-medium mb-2">Responsive & Modern Websites</p>
            <p class="text-gray-600 text-sm sm:text-base">
              We craft custom, responsive websites and web applications using the latest technologies like React,
              Vue.js, and Node.js. From e-commerce platforms to corporate sites, our solutions are designed to enhance
              user experience, improve SEO, and drive conversions, ensuring your brand stands out in the digital
              landscape.
            </p>
          </div>
          <div class="md:w-1/2 p-4 sm:p-6">
            <img src="@/assets/image/1 (9).png" alt="Web Development" class="w-50% max-w-full h-auto "
              data-aos="zoom-in" data-aos-delay="200" />
          </div>
        </div>

        <!-- Web Automation -->
        <div
          class="flex flex-col md:flex-row-reverse items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          <div class="md:w-1/2 p-4 sm:p-6">
            <div class="flex items-center mb-3">
              <svg class="w-8 h-8 text-red-950 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-10h-2v6h2v-6zm0-2h-2V6h2v2z" />
              </svg>
              <h3 class="text-lg sm:text-xl font-semibold text-red-950">Web Automation</h3>
            </div>
            <p class="text-gray-700 text-sm sm:text-base font-medium mb-2">Streamlined Workflow Efficiency</p>
            <p class="text-gray-600 text-sm sm:text-base">
              Our automation solutions eliminate repetitive tasks, saving time and reducing errors. Whether it's
              automating data entry, web scraping, or form submissions, we create tailored scripts and tools using
              Python, Selenium, and other technologies to optimize your workflows and boost operational productivity.
            </p>
          </div>
          <div class="md:w-1/2 p-4 sm:p-6">
            <img src="@/assets/image/1 (8).png" alt="Web Automation" class="w-50% max-w-full h-auto " data-aos="zoom-in"
              data-aos-delay="200" />
          </div>
        </div>

        <!-- Data Processing -->
        <div
          class="flex flex-col md:flex-row items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
          <div class="md:w-1/2 p-4 sm:p-6">
            <div class="flex items-center mb-3">
              <svg class="w-8 h-8 text-red-950 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
              <h3 class="text-lg sm:text-xl font-semibold text-red-950">Data Processing</h3>
            </div>
            <p class="text-gray-700 text-sm sm:text-base font-medium mb-2">Actionable Business Insights</p>
            <p class="text-gray-600 text-sm sm:text-base">
              We transform raw data into meaningful insights using advanced processing and analytics tools like Pandas,
              SQL, and Power BI. From cleaning datasets to generating reports and visualizations, our services empower
              you to make data-driven decisions that fuel business growth and efficiency.
            </p>
          </div>
          <div class="md:w-1/2 p-4 sm:p-6">
            <img src="@/assets/image/1 (1).png" alt="Data Processing" class="w-50% max-w-full h-auto "
              data-aos="zoom-in" data-aos-delay="200" />
          </div>
        </div>

        <!-- Tech Assistance -->
        <div
          class="flex flex-col md:flex-row-reverse items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
          <div class="md:w-1/2 p-4 sm:p-6">
            <div class="flex items-center mb-3">
              <svg class="w-8 h-8 text-red-950 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm0 15l3-3.86 2.14 2.58 3-3.87L18 19H6z" />
              </svg>
              <h3 class="text-lg sm:text-xl font-semibold text-red-950">Tech Assistance</h3>
            </div>
            <p class="text-gray-700 text-sm sm:text-base font-medium mb-2">Reliable System Support</p>
            <p class="text-gray-600 text-sm sm:text-base">
              Our expert team provides comprehensive technical support, from troubleshooting software issues to
              optimizing hardware performance. We offer proactive maintenance, system upgrades, and 24/7 assistance to
              ensure your technology runs smoothly and supports your business goals.
            </p>
          </div>
          <div class="md:w-1/2 p-4 sm:p-6">
            <img src="@/assets/image/Asst.png" alt="Tech Assistance" class="w-50% max-w-full h-auto " data-aos="zoom-in"
              data-aos-delay="200" />
          </div>
        </div>

        <!-- Social Media Advertising -->
        <div
          class="flex flex-col md:flex-row items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
          <div class="md:w-1/2 p-4 sm:p-6">
            <div class="flex items-center mb-3">
              <svg class="w-8 h-8 text-red-950 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 19h-2v-2h2v2zm4-4h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V7h6v2z" />
              </svg>
              <h3 class="text-lg sm:text-xl font-semibold text-red-950">Social Media Advertising</h3>
            </div>
            <p class="text-gray-700 text-sm sm:text-base font-medium mb-2">Targeted Brand Growth</p>
            <p class="text-gray-600 text-sm sm:text-base">
              We design and manage targeted ad campaigns on platforms like Facebook, Instagram, and LinkedIn to maximize
              reach and engagement. Our data-driven strategies optimize ad spend, increase conversions, and build brand
              loyalty through compelling visuals and precise audience targeting.
            </p>
          </div>
          <div class="md:w-1/2 p-4 sm:p-6">
            <img src="@/assets/image/1 (2).png" alt="Social Media Advertising" class="w-50% max-w-full h-auto"
              data-aos="zoom-in" data-aos-delay="200" />
          </div>
        </div>

        <!-- Cloud Solutions -->
        <div
          class="flex flex-col md:flex-row-reverse items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
          <div class="md:w-1/2 p-4 sm:p-6">
            <div class="flex items-center mb-3">
              <svg class="w-8 h-8 text-red-950 mr-3" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z" />
              </svg>
              <h3 class="text-lg sm:text-xl font-semibold text-red-950">Cloud Solutions</h3>
            </div>
            <p class="text-gray-700 text-sm sm:text-base font-medium mb-2">Scalable & Secure Infrastructure</p>
            <p class="text-gray-600 text-sm sm:text-base">
              Our cloud solutions leverage platforms like AWS, Azure, and Google Cloud to provide scalable, secure, and
              cost-effective infrastructure. From cloud migration to serverless architecture, we ensure your business
              stays agile, resilient, and ready for future growth.
            </p>
          </div>
          <div class="md:w-1/2 p-4 sm:p-6">
            <img src="@/assets/image/1 (6).png" alt="Cloud Solutions"
              class="w-50% max-w-full h-auto" data-aos="zoom-in" data-aos-delay="200" />
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
            Get Started
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

const services = ref(null)

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
  observer.observe(services.value)
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