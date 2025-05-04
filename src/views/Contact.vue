<template>
  <section id="contact" class="py-12 sm:py-16 bg-gray-50 relative" ref="contact">
    <!-- Subtle Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-red-50/10 to-transparent"></div>

    <div class="max-w-6xl mx-auto px-4 relative z-10">
      <!-- Section Heading -->
      <div class="text-center mb-10 sm:mb-12" data-aos="fade-down" data-aos-duration="1000">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">Get in Touch</h2>
        <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          We're here to help you bring your ideas to life. Reach out to us today!
        </p>
      </div>

      <div class="flex flex-col md:flex-row gap-8">
        <!-- Contact Form -->
        <div class="md:w-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-md" data-aos="fade-right" data-aos-duration="1000"
          data-aos-delay="100">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label class="block mb-2 font-medium text-gray-800">Name</label>
              <input v-model="form.name" type="text" required
                class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-950"
                :class="{ 'border-red-500': errors.name }" />
              <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
            </div>
            <div>
              <label class="block mb-2 font-medium text-gray-800">Email</label>
              <input v-model="form.email" type="email" required
                class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-950"
                :class="{ 'border-red-500': errors.email }" />
              <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
            </div>
            <div>
              <label class="block mb-2 font-medium text-gray-800">Message</label>
              <textarea v-model="form.message" rows="5" required
                class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-950"
                :class="{ 'border-red-500': errors.message }"></textarea>
              <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
            </div>
            <button type="submit" :disabled="isSubmitting"
              class="w-full bg-red-950 text-white px-6 py-3 rounded-lg transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-950"
              :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }">
              <span v-if="isSubmitting">Sending...</span>
              <span v-else>Send Message</span>
            </button>
          </form>
        </div>

        <!-- Contact Details and Map -->
        <div class="md:w-1/2 space-y-6">
          <!-- Contact Details -->
          <div class="bg-white p-6 sm:p-8 rounded-lg shadow-md" data-aos="fade-left" data-aos-duration="1000"
            data-aos-delay="200">
            <h3 class="text-lg sm:text-xl font-semibold text-red-950 mb-4">Contact Information</h3>
            <div class="space-y-4">
              <a href="mailto:thecanvasclick@gmail.com"
                class="flex items-center text-gray-600 hover:text-red-950 transition">
                <svg class="w-6 h-6 text-red-950 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                thecanvasclick@gmail.com
              </a>
              <a href="https://wa.me/918109291088"
                class="flex items-center text-gray-600 hover:text-red-950 transition">
                <svg class="w-6 h-6 text-red-950 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12c0 1.99.58 3.84 1.58 5.42L2 22l4.58-1.58C8.16 21.42 10.01 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                  <path
                    d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z"
                    fill="#FFFFFF"  transform="scale(0.8) translate(2.5, 2.5)"/>
                </svg>
                +91 8109291088 (WhatsApp)
              </a>
              <a href="tel:+918109291088" class="flex items-center text-gray-600 hover:text-red-950 transition">
                <svg class="w-6 h-6 text-red-950 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
                </svg>
                +91 8109291088 (Call)
              </a>
              <div class="flex items-center text-gray-600">
                <svg class="w-6 h-6 text-red-950 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Mungeli, CG, IN
              </div>
            </div>
          </div>

          <!-- Map -->
          <div class="bg-white p-6 sm:p-8 rounded-lg shadow-md" data-aos="fade-left" data-aos-duration="1000"
            data-aos-delay="300">
            <h3 class="text-lg sm:text-xl font-semibold text-red-950 mb-4">Our Location</h3>
            <div class="relative w-full h-64 sm:h-80">
              <iframe class="absolute inset-0 w-full h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14787.614170174165!2d81.6784487!3d22.0666976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a29b66b9f9c1f55%3A0x6e7c9a7b9b9b9b9b!2sMungeli%2C%20Chhattisgarh%20495334%2C%20India!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
                frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
              <div v-if="!iframeLoaded"
                class="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                <p class="text-gray-600">Loading map...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const iframeLoaded = ref(false)

const submitForm = () => {
  // Reset errors
  errors.name = ''
  errors.email = ''
  errors.message = ''

  // Basic validation
  let hasError = false
  if (!form.name.trim()) {
    errors.name = 'Name is required'
    hasError = true
  }
  if (!form.email.trim()) {
    errors.email = 'Email is required'
    hasError = true
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = 'Invalid email address'
    hasError = true
  }
  if (!form.message.trim()) {
    errors.message = 'Message is required'
    hasError = true
  }

  if (hasError) return

  isSubmitting.value = true
  setTimeout(() => {
    alert('Form submitted! (Demo only)')
    form.name = ''
    form.email = ''
    form.message = ''
    isSubmitting.value = false
  }, 1000) // Simulate async submission
}

const contact = ref(null)

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
  observer.observe(contact.value)

  // Simulate iframe loading
  setTimeout(() => {
    iframeLoaded.value = true
  }, 2000)
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