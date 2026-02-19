<script lang="ts" setup>
interface Props {
  modelValue: string | number;
  placeholder?: string;
  type?: string;
  inputClass?: string; // New prop for internal input styling
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Search...',
  type: 'text',
  inputClass: '',
});

const emit = defineEmits(['update:modelValue']);

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

defineOptions({
  inheritAttrs: false
})
</script>

<template>
    <div 
      v-bind="$attrs"
      :class="[
        'flex items-center gap-1 px-3 py-2 rounded-md ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 transition-all',
        $attrs.class
      ]"
    >
        <div class="flex items-center gap-1 pr-1">
            <Icon name="iconamoon:search" class="size-4 text-gray-100" />
        </div>
        
        <input
            :type="type" 
            :placeholder="placeholder" 
            :value="modelValue"
            @input="handleInput" 
            :class="[
              'flex-1 outline-none bg-transparent placeholder:text-sm',
              inputClass
            ]"
            required 
        />
    </div>
</template>