<template>
  <div class="relative w-full h-[800px] mb-64"> 
    
    <div class="h-full w-full overflow-hidden rounded-5xl">
        <NuxtImg 
          :src="imageSrc" 
          alt="Background" 
          class="h-full w-full object-cover object-top"
        />
    </div>

    <div class="absolute right-4 lg:right-10 -bottom-32 flex flex-col items-center p-6 sm:p-0 z-10">
      <div class="w-full max-w-lg rounded-4xl bg-white p-8 sm:p-12">
        <h2 class="mb-1 text-4xl font-bold text-black">{{ title }}</h2>
        <p class="mb-6 text-lg font-medium text-gray-100">{{ subtitle }}</p>

        <ul class="mb-8 space-y-2">
          <li v-for="(feature, index) in features" :key="index" class="flex items-start text-gray-100">
            <span class="mr-3 mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-100" />
            <span class="leading-relaxed -mt-0.5">{{ feature }}</span>
          </li>
        </ul>

        <Button 
          @click="$emit('action')"
        >
          {{ buttonText }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'For Parents' },
  subtitle: { type: String, default: 'Designed for Parents Who Need Payment Flexibility.' },
  imageSrc: { type: String, default: '/paarent.png' },
  buttonText: { type: String, default: 'Continue' },
  features: {
    type: Array,
    default: () => [
      'Create an account, verify your identity, and add your child’s school details.',
      'Apply for a structured school-fee loan and choose a repayment plan that fits your income cycle.',
      'Track your loan status, repayment schedule, and wallet balance—all in one simple dashboard.'
    ]
  }
});

defineEmits(['action']);
</script>