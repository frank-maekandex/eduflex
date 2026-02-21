<template>
    <Field class="grid gap-1">
        <FieldLabel for="file">
            {{ label }}
        </FieldLabel>
        <div
        class="border border-dashed border-gray-border rounded-lg p-6 flex flex-col items-center justify-center transition-all hover:border-primary/80"
            @click="fileInput?.click()"
        >
        <div class="text-center space-y-1">
            <h3 class="font-semibold text-black">
                {{ fileName || 'Click to upload file' }}
            </h3>
            <p class="text-sm text-gray-100">
                {{ desc  || 'PDF/JPEG ≤ 2MB' }}
            </p>
        </div>

        <button
            type="button"
            class="mt-2 px-4 py-2 border border-slate-200 rounded-md bg-slate-50 text-sm font-bold text-slate-700 hover:bg-slate-100 transition-colors"
        >
            Browse
        </button>

        <input
            type="file"
            ref="fileInput"
            class="hidden"
            :accept="accept"
            @change="$emit('select', $event)"
        />
        </div>
    </Field>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  label?: string
  accept?: string
  fileName?: string | null 
  desc?: string
}>()

defineEmits(['select'])

const fileInput = ref<HTMLInputElement | null>(null)

</script>