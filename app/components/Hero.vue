<template>
  <div class="relative w-full h-[300px] md:h-[550px] rounded-3xl md:rounded-5xl overflow-hidden mt-24 mb-28">
    <!-- Background image -->
    <NuxtImg
      placeholder
      src="hero.png"
      alt="School Payment"
      class="w-full h-full object-cover"
      format="webp"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-primary/95 via-secondary/80 to-primary/40 flex flex-col justify-center px-6 md:px-16">
      <h1 class="text-white text-xl md:text-6xl font-bold mb-4">
        Pay School Fees <br /> Flexibly, Not Painfully.
      </h1>
      <p class="text-white text-base md:text-2xl mb-6 max-w-[500px]">
        Pay school fees easily, get instant school payments, and grow trust with lenders.
      </p>
      <NuxtLink to="/onboarding" class="w-fit">
        <Button variant="overlay">
          Get Started
        </Button>
      </NuxtLink>
    </div>
  </div>
</template>