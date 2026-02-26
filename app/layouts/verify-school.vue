<template>
  <div class="min-h-svh bg-white px-4 md:px-10 py-6 lg:py-14">
    <div class="grid lg:grid-cols-2 max-w-[1000px] mx-auto">
        <div class="hidden lg:flex flex-row items-start">
          <div class="flex flex-col gap-4 justify-center items-center w-full">
            <div class="mb-6">
              <h2 class="font-bold text-4xl">School Verification</h2>
              <p class="text-gray-100">Verify school identity to continue</p>
            </div>
            <Card class="flex flex-col shadow-none border-none bg-transparent w-full gap-1 mr-0 lg:mr-20">
              <div v-for="(item, index) in sections" :key="index" class="flex gap-4 justify-end">
                    
                <div class="pt-1 text-right flex-1">
                  <h3 :class="['font-bold text-lg leading-tight', isActive(index) ? 'text-primary' : 'text-black']">
                    {{ item.section }}
                  </h3>
                  <p :class="['text-sm font-medium mt-0.5', isActive(index) ? 'text-gray-600' : 'text-gray-100']">
                    {{ item.desc }}
                  </p>
                </div>

                <div class="flex flex-col items-center">
                    <span 
                        :class="[
                        'flex size-10 items-center justify-center rounded-full transition-all duration-300',
                        isCurrent(index) || isActive(index) ? 'bg-primary' : 'bg-background'
                        ]"
                    >
                        <Icon 
                        :name="item.iconName" 
                        :class="[
                            'size-5 transition-colors',
                            isCurrent(index) || isActive(index) ? 'text-white' : 'text-gray-100'
                        ]" 
                        />
                    </span>

                    <div 
                        v-if="index !== sections.length - 1" 
                        :class="[
                        'h-14 w-0.5 my-1 transition-colors duration-500',
                        isCompleted(index) ? 'bg-primary' : 'bg-gray-border'
                        ]"
                    ></div>
                </div>

              </div>
            </Card>
          </div>
          <div class="border-l border-gray-border h-96 mt-28"/>
        </div>
        <div class="flex flex-col gap-4 ml-0 lg:ml-16">
          <div class="lg:hidden mb-6 flex flex-col items-center">
            <h2 class="font-bold text-xl text-center">School Verification</h2>
            <p class="text-gray-100 text-center">Verify school identity to continue</p>
          </div>
          <div class="flex flex-row items-start gap-4">
            <div class="lg:hidden mb-4">
              <h2 class="font-bold text-lg">
                {{ currentSection?.section }}
              </h2>
              <p class="text-gray-100 text-sm">
                {{ currentSection?.desc }}
              </p>
            </div>
            <div class="ml-auto">
              <ve-progress 
                :progress="progressValue"
                :size="80" 
                color="#1e3a8a"
                empty-color="#f1f5f9"
                :thickness="6"
                :line="'butt'"
              >
                <span class="text-xl font-bold text-slate-900">
                  {{ currentStep }}/{{ totalSteps }}
                </span>
              </ve-progress>
            </div>
          </div>
          <div>
            <div>
                <button @click="prevStep" class="flex size-10 items-center justify-center rounded-full bg-background mb-4">
                  <ChevronLeft class="text-gray-100" :size="25" />
                </button>
                <div>
                  <transition name="fade" mode="out-in">
                    <div :key="currentStep">
                      <component
                        :is="activeComponent"
                        @next="nextStep"
                        @prev="prevStep"
                      />
                    </div>
                  </transition>
                </div>
            </div>
          </div>
        </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next';
import { ref, computed } from 'vue'

// Import your forms
import SchoolForm from '@/components/school-verification/SchoolForm.vue'
import RepresentativeForm from '@/components/school-verification/RepresentativeForm.vue'
import BankForm from '@/components/school-verification/BankForm.vue'

const sections = [
  { id: 1, section: "School Information", desc: "Enter details", iconName: "fa7-solid:id-card-clip" },
  { id: 2, section: "School Representative Details", desc: "Enter Details", iconName: "solar:user-check-bold" },
  { id: 3, section: "Bank Details", desc: "Enter details", iconName: "fluent:edit-16-filled" }
];

const currentStep = ref(1)
const totalSteps = sections.length

const progressValue = computed(() => {
  return (currentStep.value / totalSteps) * 100
})

// SWITCH–CASE PATTERN
const activeComponent = computed(() => {
  switch (currentStep.value) {
    case 1:
      return SchoolForm
    case 2:
      return RepresentativeForm
    case 3:
      return BankForm
    default:
      return SchoolForm
  }
})

// Navigation
const nextStep = () => {
  if (currentStep.value < totalSteps) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const currentSection = computed(() => {
  return sections[currentStep.value - 1]
})

const isCompleted = (index: number) => index + 1 < currentStep.value
const isCurrent = (index: number) => index + 1 === currentStep.value
const isActive = (index: number) => index + 1 <= currentStep.value

</script>


<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.25s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>