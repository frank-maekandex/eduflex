<template>
  <div class="w-full mx-auto">
    <Swiper
      :modules="modules"
      :slides-per-view="1"
      effect="fade"
      :fade-effect="{ crossFade: true }"
      :allow-touch-move="false"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false
      }"
      :loop="true"
      class="w-full overflow-hidden"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div>
          <div class="relative w-full h-[350px] md:h-[600px] rounded-3xl md:rounded-5xl overflow-hidden mt-24 mb-20">
            <!-- Background image -->
            <NuxtImg
              placeholder
              :src="slide.image"
              alt="School Payment"
              class="w-full h-full object-cover"
              format="webp"
            />
        
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-r from-primary/95 via-secondary/80 to-primary/40 flex flex-col justify-center px-6 md:px-16">
              <h1 class="text-white text-xl md:text-6xl font-bold mb-4 max-w-[700px]">
                {{ slide.title }}
              </h1>
              <p class="text-white text-base md:text-2xl mb-6 max-w-[500px]">
                {{ slide.description }}
              </p>
              <NuxtLink to="/onboarding" class="w-fit">
                <Button variant="overlay">
                  Get Started
                </Button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>


<script lang="ts">
import { A11y, Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/effect-fade'

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const slides = [
      {
        image: '/hero1.png',
        title: 'Pay School Fees Flexibly, Not Painfully.',
        description:
          "Pay school fees easily, get instant school payments, and grow trust with lenders.",
      },
      {
        image: '/hero2.png',
        title: 'Instant School Payments, Easy Repayments.',
        description:
          "Schools get paid upfront while parents enjoy flexible repayment schedules — everyone wins with EduFlex.",
      },
      {
        image: '/hero3.png',
        title: 'Secure, Transparent, Verified Education Financing.',
        description:
          "Built with trust and backed by verified partners, EduFlex ensures every transaction is safe, seamless, and fully transparent.",
      }
    ]

    return {
      slides,
      modules: [A11y, Autoplay, EffectFade]
    }
  },
}
</script>