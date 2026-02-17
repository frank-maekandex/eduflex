<template>
  <div class="max-w-6xl w-full mx-auto">
    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false
      }"
      :loop="true"
      class="rounded-2xl overflow-hidden"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div class="relative h-[350px] w-full overflow-hidden">
          
          <!-- Background Image -->
          <NuxtImg
            :src="slide.image"
            class="absolute inset-0 w-full h-full object-cover"
          />

          <!-- Gradient Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

          <!-- Text Content -->
          <div class="absolute bottom-8 left-8 text-white max-w-lg">
            <h2 class="text-3xl font-bold mb-3">
              {{ slide.title }}
            </h2>
            <p class="text-gray-200">
              {{ slide.description }}
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts">
import { Pagination, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const slides = [
      {
        image: '/hero.png',
        title: 'Pay School Fees Flexibly, Not Painfully.',
        description:
          "Ease your child’s education journey with simple, stress-free.",
      },
      {
        image: '/hero.png',
        title: 'Pay School Fees Flexibly, Not Painfully.',
        description:
          "Ease your child’s education journey with simple, stress-free.",
      },
      {
        image: '/hero.png',
        title: 'Pay School Fees Flexibly, Not Painfully.',
        description:
          "Ease your child’s education journey with simple, stress-free.",
      },
    ]

    return {
      slides,
      modules: [Pagination, A11y, Autoplay]
    }
  },
}
</script>