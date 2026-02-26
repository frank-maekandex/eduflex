<template>
  <div class="min-h-svh bg-white px-4 md:px-10  py-14">
    <div class="grid lg:grid-cols-2 max-w-[1000px] mx-auto">
        <div class="hidden lg:flex flex-row items-start">
          <div class="flex flex-col gap-4 justify-center items-center w-full">
            <div class="mb-6">
              <h2 class="font-bold text-4xl">Verify Your Identity</h2>
              <p class="text-gray-100">Verify identity to continue</p>
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
import IdentityForm from '@/components/verification/IdentityForm.vue'
import EmploymentForm from '@/components/verification/EmploymentForm.vue'
import ResidenceForm from '@/components/verification/ResidenceForm.vue'
import BankForm from '@/components/verification/BankForm.vue'
import GuarantorForm from '@/components/verification/GuarantorForm.vue'

const currentStep = ref(1)
const totalSteps = 5

const progressValue = computed(() => {
  return (currentStep.value / totalSteps) * 100
})

// SWITCH–CASE PATTERN
const activeComponent = computed(() => {
  switch (currentStep.value) {
    case 1:
      return IdentityForm
    case 2:
      return EmploymentForm
    case 3:
      return ResidenceForm
    case 4:
      return BankForm
    case 5:
      return GuarantorForm
    default:
      return IdentityForm
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

const sections = [
  { id: 1, section: "BVN & NIN Validation", desc: "Enter your details", iconName: "fa7-solid:id-card-clip" },
  { id: 2, section: "Employment Information", desc: "Enter and upload", iconName: "flowbite:briefcase-solid" },
  { id: 3, section: "Residential Address", desc: "Enter and upload", iconName: "si:home-fill"},
  { id: 4, section: "Bank Details", desc: "Enter your details", iconName: "f7:creditcard-fill" },
  { id: 5, section: "Guarantor Details", desc: "Enter details", iconName: "teenyicons:users-solid" }
];
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