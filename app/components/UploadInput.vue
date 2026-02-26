<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  label?: string
  accept?: string
}>()

const emit = defineEmits<{
  (e: 'change', file: File | null): void
}>()

const fileInput = ref<HTMLInputElement | null>(null)
const fileName = ref<string | null>(null)

const triggerUpload = () => {
  fileInput.value?.click()
}

const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const file = target.files?.[0] || null

  fileName.value = file?.name || null
  emit('change', file)
}
</script>

<template>
  <div>
    <!-- Hidden input -->
    <input
      ref="fileInput"
      type="file"
      class="hidden"
      :accept="accept"
      @change="handleFileChange"
    />

    <!-- Upload button -->
    <button
      type="button"
      @click="triggerUpload"
      class="border border-dashed border-gray-border rounded-md h-10 px-4 py-2 text-sm text-gray-100 hover:bg-gray-50 flex items-center justify-center gap-2 w-full"
    >
      <Icon name="uis:upload-alt" class="size-4" />

      <span v-if="fileName">
        {{ fileName }}
      </span>

      <span v-else>
        {{ label || '(PNG/JPEG ≤ 2MB)' }}
      </span>
    </button>
  </div>
</template>