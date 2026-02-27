<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'

const isOpen = ref(false)
const scrolled = ref(false)

const openMenu = () => {
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

// Scroll effect
const handleScroll = () => {
  scrolled.value = window.scrollY > 20 // triggers when scrolled 20px
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
  <div>
    <header
      :class="[
        'w-full h-20 flex items-center z-50 fixed top-0 transition-all duration-300',
        scrolled ? 'bg-background border-b border-gray-border' : 'bg-transparent'
      ]"
    >
      <nav class="my_container w-full mx-auto flex items-center justify-between">
        <Logo color-class="text-primary" size-class="text-2xl" />
        <ul class="hidden md:flex gap-6">
          <li><NuxtLink to="/" exact-active-class="text-primary font-semibold">Home</NuxtLink></li>
          <li><NuxtLink to="/how-it-works" exact-active-class="text-primary font-semibold">How It Works</NuxtLink></li>
          <li><NuxtLink to="/schools" exact-active-class="text-primary font-semibold">Schools</NuxtLink></li>
          <li><NuxtLink to="/support" exact-active-class="text-primary font-semibold">Support</NuxtLink></li>
        </ul>

        <!-- Desktop Buttons -->
        <div class="hidden md:flex gap-4">
          <NuxtLink to="/login">
            <Button variant="outline">Login</Button>
          </NuxtLink>
          <NuxtLink to="/onboarding">
            <Button>Create Account</Button>
          </NuxtLink>
        </div>

        <!-- Mobile Hamburger -->
        <button class="md:hidden" @click="openMenu">
          <Menu :size="26" />
        </button>

      </nav>
    </header>

    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/40 z-50 md:hidden"
        @click="closeMenu"
      />
    </transition>

    <!-- Slide Drawer -->
    <transition name="slide">
      <header
        v-if="isOpen"
        class="fixed top-0 left-0 h-full w-72 bg-background z-50 shadow-xl md:hidden flex flex-col"
      >
        <!-- Drawer Header -->
        <div class="flex items-center justify-between p-6 h-20 border-b border-gray-border">
          <Logo color-class="text-primary" size-class="text-xl" />
          <button @click="closeMenu">
            <X :size="24" />
          </button>
        </div>

        <!-- Links -->
        <ul class="flex flex-col gap-6 p-6 text-lg">
          <li><NuxtLink @click="closeMenu" to="/" exact-active-class="text-primary font-semibold">Home</NuxtLink></li>
          <li><NuxtLink @click="closeMenu" to="/how-it-works" exact-active-class="text-primary font-semibold">How It Works</NuxtLink></li>
          <li><NuxtLink @click="closeMenu" to="/schools" exact-active-class="text-primary font-semibold">Schools</NuxtLink></li>
          <li><NuxtLink @click="closeMenu" to="/support" exact-active-class="text-primary font-semibold">Support</NuxtLink></li>
        </ul>

        <!-- Buttons -->
        <div class="p-6 flex flex-col gap-4">
          <NuxtLink @click="closeMenu" to="/login">
            <Button variant="outline" class="w-full">Login</Button>
          </NuxtLink>
          <NuxtLink @click="closeMenu" to="/onboarding">
            <Button class="w-full">Create Account</Button>
          </NuxtLink>
        </div>
      </header>
    </transition>

  </div>
</template>

<style scoped>
/* Fade overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide drawer */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>