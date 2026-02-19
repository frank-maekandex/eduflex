<script setup lang="ts">
import { computed } from "vue"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const props = defineProps<{
  title: string
  description?: string
  modelValue?: boolean

  // Icon Props
  icon?: string
  iconColor?: string
}>()

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void
}>()

const isOpen = computed({
  get: () => props.modelValue ?? false,
  set: (val) => emit("update:modelValue", val),
})

defineExpose({
  open: () => (isOpen.value = true),
  close: () => (isOpen.value = false),
})
</script>

<template>
  <Dialog v-model:open="isOpen">
    <DialogContent class="sm:max-w-[380px] text-center p-8 max-h-[95%] overflow-y-auto scrollbar-rounded">

      <!-- Icon -->
      <div class="flex justify-center">
        <Icon
            :name="icon || 'mdi:check'"
            class="size-28"
            :class="iconColor || 'text-primary'"
        />
      </div>

      <!-- Header -->
      <DialogHeader class="max-w-[250px] mx-auto">
        <DialogTitle class="text-lg font-semibold text-center">
          {{ title }}
        </DialogTitle>
        <DialogDescription
          v-if="description"
          class="text-gray-100 text-center"
        >
          {{ description }}
        </DialogDescription>
      </DialogHeader>

      <!-- Buttons Slot -->
      <div>
        <slot />
      </div>

    </DialogContent>
  </Dialog>
</template>
