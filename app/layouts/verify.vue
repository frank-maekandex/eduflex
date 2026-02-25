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
                  <h3 :class="['font-bold text-lg leading-tight', getTitleColor(item.id)]">
                    {{ item.section }}
                  </h3>
                  <p :class="['text-sm font-medium mt-0.5', getDescColor(item.id)]">
                    {{ item.desc }}
                  </p>
                </div>

                <div class="flex flex-col items-center">
                    <span 
                        :class="[
                        'flex size-10 items-center justify-center rounded-full transition-all duration-300',
                        isCurrent(index) ? 'bg-primary' : 'bg-background'
                        ]"
                    >
                        <Icon 
                        :name="item.iconName" 
                        :class="[
                            'size-5 transition-colors',
                            isCurrent(index) ? 'text-white' : 'text-gray-100'
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
                <span class="flex size-10 items-center justify-center rounded-full bg-background mb-4">
                  <ChevronLeft class="text-gray-100" :size="25" />
                </span>
                <div>
                  <slot />
                </div>
            </div>
          </div>
        </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next';

const currentStep = ref(2);
const totalSteps = 5;

// Calculate progress percentage (e.g., 1/5 = 20%)
const progressValue = computed(() => (currentStep.value / totalSteps) * 100);

// In Nuxt, we track the current state based on the route or a global store
const route = useRoute();

// Example State Logic (You can replace this with your actual state management)
// We use IDs instead of full strings for cleaner switch cases
const sections = [
  { id: 'identity', section: "BVN & NIN Validation", desc: "Enter your details", iconName: "material-symbols-light:sd-card" },
  { id: 'employment', section: "Employment Information", desc: "Enter and upload", iconName: "flowbite:briefcase-solid" },
  { id: 'residence', section: "Residential Address", desc: "Enter and upload", iconName: "si:home-fill"},
  { id: 'bank', section: "Bank Details", desc: "Enter your details", iconName: "f7:creditcard-fill" },
  { id: 'guarantor', section: "Guarantor Details", desc: "Enter details", iconName: "teenyicons:users-solid" }
];

// Determine the current step index based on route name or meta
// Example: if current page is /register/otp, currentStep is 2
const currentStepIndex = computed(() => {
  return route.meta.stepIndex as number || 0;
});

// Logic helpers
const isCompleted = (index: number) => index < currentStepIndex.value;
const isCurrent = (index: number) => index === currentStepIndex.value;

// Color Logic
const getFirstCircleColor = (id: string) => {
  const index = sections.findIndex(s => s.id === id);
  return isCurrent(index) ? "bg-blue-100" : "";
};

const getSecondCircleColor = (id: string) => {
  const index = sections.findIndex(s => s.id === id);
  if (isCurrent(index)) return "bg-blue-600 border-blue-600";
  if (isCompleted(index)) return "bg-white border-blue-600";
  return "bg-white border-slate-300";
};

const getThirdCircleColor = (id: string) => {
  const index = sections.findIndex(s => s.id === id);
  if (isCurrent(index)) return "bg-white";
  if (isCompleted(index)) return "bg-blue-600";
  return "bg-slate-300";
};

const getLineColor = (id: string) => {
  const index = sections.findIndex(s => s.id === id);
  return isCompleted(index) ? "bg-blue-600" : "bg-slate-200";
};

const getTitleColor = (id: string) => {
  const index = sections.findIndex(s => s.id === id);
  return (isCurrent(index) || isCompleted(index)) ? "text-blue-900" : "text-black";
};

const getDescColor = (id: string) => {
  const index = sections.findIndex(s => s.id === id);
  return (isCurrent(index) || isCompleted(index)) ? "text-slate-600" : "text-gray-100";
};
</script>